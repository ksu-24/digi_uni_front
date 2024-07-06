"use client"

import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {createEmptyHistoryState, registerHistory} from "@lexical/history";
import {useEffect} from "react";
import {create} from "zustand";
import {CAN_REDO_COMMAND, CAN_UNDO_COMMAND, LexicalEditor, REDO_COMMAND, UNDO_COMMAND} from "lexical";
import {mergeRegister} from "@lexical/utils";

export const useHistory = create<
    {
        editor: LexicalEditor;
        setEditor: (editor: LexicalEditor) => void;
        canUndo: boolean;
        canRedo: boolean;
        readonly awaitEvictHolder: {
            value: boolean;
        }
        readonly setAwaitEvict: (value: boolean) => void;
        readonly setCanUndo: (canUndo: boolean) => void;
        readonly setCanRedo: (canRedo: boolean) => void;
    }>((set, getState) => ({
    editor: null as any,
    setEditor: (editor) => {
        set((state) => {
            state.editor = editor;
            return state;
        });
    },
    canUndo: false,
    canRedo: false,
    awaitEvictHolder: {
        value: false
    },
    setCanUndo: (canUndo) => {
        set((state) => {
            state.canUndo = canUndo;
            return state;
        });
    },
    setCanRedo: (canRedo) => {
        set((state) => {
            state.canRedo = canRedo;
            return state;
        });
    },
    setAwaitEvict: (value) => {
        set((state) => {
            state.awaitEvictHolder.value = value;
            return state;
        })
    }
}));

export default function HistoryPlugin() {
    const editor = useLexicalComposerContext()[0];
    const history = createEmptyHistoryState();

    const {
        setCanUndo,
        setCanRedo,
        awaitEvictHolder,
        setAwaitEvict,
        setEditor
    } = useHistory((state) => {
        return {
            setCanUndo: state.setCanUndo,
            setCanRedo: state.setCanRedo,
            awaitEvictHolder: state.awaitEvictHolder,
            setAwaitEvict: state.setAwaitEvict,
            setEditor: state.setEditor
        };
    });

    useEffect(() => {
        setEditor(editor);
    }, [editor]);

    useEffect(() => {
        return mergeRegister(
            registerHistory(
                editor,
                history,
                300
            ),
            editor.registerCommand(
                CAN_UNDO_COMMAND,
                (payload) => {
                    setCanUndo(payload);
                    return false;
                },
                1
            ),
            editor.registerCommand(
                CAN_REDO_COMMAND,
                (payload) => {
                    setCanRedo(payload);
                    return false;
                },
                1
            ),
            editor.registerCommand(
                UNDO_COMMAND,
                () => {
                    if (awaitEvictHolder.value) {
                        history.undoStack.pop();
                        editor.dispatchCommand(CAN_UNDO_COMMAND, history.undoStack.length > 0);
                        setAwaitEvict(false);
                        return true;
                    }
                    return false;
                },
                4
            ),
            editor.registerCommand(
                REDO_COMMAND,
                () => {
                    if (awaitEvictHolder.value) {
                        history.redoStack.pop();
                        editor.dispatchCommand(CAN_REDO_COMMAND, history.redoStack.length > 0);
                        setAwaitEvict(false);
                        return true;
                    }
                    return false;
                },
                4
            )
        );
    }, []);

    return null;
}