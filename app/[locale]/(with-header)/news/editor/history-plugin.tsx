import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {createEmptyHistoryState, HistoryStateEntry, registerHistory} from "@lexical/history";
import {useEffect, useRef} from "react";
import {create} from "zustand";
import {UNDO_COMMAND} from "lexical";
import ClassnameTextNode from "@/app/[locale]/(with-header)/news/editor/classname-text-node";

export const useHistory = create<
    {
        undoStack: HistoryStateEntry[];
        redoStack: HistoryStateEntry[];
        setUndoStack: (undoStack: HistoryStateEntry[]) => void;
        setRedoStack: (redoStack: HistoryStateEntry[]) => void;
        evictUndo: () => void;
        evictRedo: () => void;
    }>((set) => ({
    undoStack: [],
    redoStack: [],
    setUndoStack: (undoStack) => {
        set((state) => {
            state.undoStack = undoStack;
            return state;
        });
    },
    setRedoStack: (redoStack) => {
        set((state) => {
            state.redoStack = redoStack;
            return state;
        });
    },
    evictUndo: () => {
        set((state) => {
            state.undoStack.pop();
            return state;
        });
    },
    evictRedo: () => {
        set((state) => {
            state.redoStack.pop();
            return state;
        });
    }
}));

export default function HistoryPlugin() {
    const editor = useLexicalComposerContext()[0];
    const history = createEmptyHistoryState();
    const undoStack = useRef([] as HistoryStateEntry[]);
    const redoStack = useRef([] as HistoryStateEntry[]);
    history.undoStack = undoStack.current;
    history.redoStack = redoStack.current;

    const {setUndoStack, setRedoStack} = useHistory((state) => {
        return {
            setUndoStack: state.setUndoStack,
            setRedoStack: state.setRedoStack
        };
    });

    setUndoStack(undoStack.current);
    setRedoStack(redoStack.current);

    useEffect(() => {
        return registerHistory(
            editor,
            history,
            300
        );
    }, []);

    return null;
}