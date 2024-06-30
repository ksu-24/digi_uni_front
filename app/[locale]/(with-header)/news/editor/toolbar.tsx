"use client";

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {mergeRegister} from '@lexical/utils';
import {
    $getSelection,
    $isRangeSelection,
    CAN_REDO_COMMAND,
    CAN_UNDO_COMMAND,
    FORMAT_TEXT_COMMAND,
    LexicalEditor,
    SELECTION_CHANGE_COMMAND,
    UNDO_COMMAND,
} from 'lexical';

import {$patchStyleText} from '@lexical/selection';
import React, {useCallback, useEffect, useState} from 'react';
import {Stack, Tab, Tabs} from "@mui/material";
import {create} from "zustand";
import {ToolbarItem} from "@/app/[locale]/(with-header)/news/editor/toolbar-item";
import {getCssProp, getCssValue, useToolbarTabs} from "@/app/[locale]/(with-header)/news/editor/toolbar-tabs";
import ClassnameTextNode, {$isClassNameTextNode} from "@/app/[locale]/(with-header)/news/editor/classname-text-node";

const LowPriority = 1;

const CustomToolbarItem = ({supplier}: { supplier: () => React.ReactNode }) => supplier();

export type ToolbarState = {
    canUndo: boolean;
    canRedo: boolean;
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    isStrikethrough: boolean;
    sharedSelectionBackgroundTimeout: NodeJS.Timeout | null;
    clearSelectionBackgroundTimeout: () => void;
    setSharedSelectionBackgroundTimeout: (timeout: NodeJS.Timeout) => void;
    setState: (state: Omit<ToolbarState, "setState" | "setSharedSelectionBackgroundTimeout" | "sharedSelectionBackgroundTimeout" | "clearSelectionBackgroundTimeout">) => void;
};

export const useToolbarState = create<ToolbarState>((set, getState) => ({
    canUndo: false,
    canRedo: false,
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isStrikethrough: false,
    sharedSelectionBackgroundTimeout: null as never,
    setSharedSelectionBackgroundTimeout: (timeout) => {
        getState().clearSelectionBackgroundTimeout();
        set({sharedSelectionBackgroundTimeout: timeout})
    },
    clearSelectionBackgroundTimeout: () => {
        if (getState().sharedSelectionBackgroundTimeout !== null) {
            clearTimeout(getState().sharedSelectionBackgroundTimeout as NodeJS.Timeout);
            set({sharedSelectionBackgroundTimeout: null});
        }
    },
    setState: (state: Omit<ToolbarState, "setState" | "setSharedSelectionBackgroundTimeout" | "sharedSelectionBackgroundTimeout" | "clearSelectionBackgroundTimeout">) => set(state)
}));

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isStrikethrough, setIsStrikethrough] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);
    const setToolbarState = useToolbarState((state) => state.setState);
    useEffect(() => {
        setToolbarState({
            canUndo,
            canRedo,
            isBold,
            isItalic,
            isUnderline,
            isStrikethrough
        });
    }, [canUndo, canRedo, isBold, isItalic, isUnderline, isStrikethrough]);


    const $updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
            setIsStrikethrough(selection.hasFormat('strikethrough'));
        }
    }, []);

    useEffect(() => {
        editor.registerNodeTransform(ClassnameTextNode, (node) => {
            if ($isClassNameTextNode(node)) {
                if (!node.getStyle().includes("--level")) {
                    node.setMediaClass(null);
                }
            }
        });
    }, []);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({editorState}) => {
                editorState.read($updateToolbar);
            }),
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                () => {
                    $updateToolbar();
                    return false;
                },
                LowPriority
            ),
            editor.registerCommand(
                CAN_UNDO_COMMAND,
                (payload) => {
                    setCanUndo(payload);
                    return false;
                },
                LowPriority
            ),
            editor.registerCommand(
                CAN_REDO_COMMAND,
                (payload) => {
                    setCanRedo(payload);
                    return false;
                },
                LowPriority
            ),
            editor.registerCommand(
                FORMAT_TEXT_COMMAND,
                (payload) => {
                    editor.update(() => {
                        const selection = $getSelection();
                        if ($isRangeSelection(selection)) {
                            const cssProp = getCssProp(payload);
                            const cssValue = getCssValue(payload as never);
                            $patchStyleText(selection, {
                                [cssProp]: (value) => {
                                    value = value ?? ""
                                    if (value.includes(cssValue)) {
                                        return value.replace(cssValue, '');
                                    } else {
                                        return value + ' ' + cssValue;
                                    }
                                }
                            });
                        }
                    });
                    return true;
                },
                LowPriority
            ),
        );
    }, [$updateToolbar, editor]);

    const toolbarTabs = useToolbarTabs(editor);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    return (
        <>
            <Tabs value={currentTab} onChange={handleChange}>
                {
                    toolbarTabs.map((tab, index) => (
                        <Tab key={index} label={tab.title} id={`tab-${index}`} aria-controls={`tabcontrol-${index}`}/>
                    ))
                }
            </Tabs>
            {
                <Stack direction="row" spacing={1} aria-labelledby={`tab-${currentTab}`}
                       id={`tabcontrol-${currentTab}`}>
                    {toolbarTabs[currentTab].tools.map((item, index) =>
                        item.supplier ? <CustomToolbarItem key={index} supplier={item.supplier}/> :
                            <ToolbarItem key={index} {...item} />
                    )}
                </Stack>
            }
        </>
    );
}

export function clearLevel(editor: LexicalEditor) {
    editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            $patchStyleText(selection, {
                "--level": null
            });
        }
    });
}

export function undoIfNeeded(editor: LexicalEditor, clicked: boolean, setClicked: (value: (((prevState: boolean) => boolean) | boolean)) => void) {
    let shouldUndo = true;
    editor.update(() => {
        const selection = $getSelection();
        if (selection?.getTextContent().length === 0) {
            shouldUndo = false;
        }
    });
    if (!clicked && shouldUndo) {
        editor.dispatchCommand(UNDO_COMMAND, undefined);
    }
    setClicked(false);
}