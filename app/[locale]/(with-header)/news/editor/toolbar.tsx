"use client";

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {mergeRegister} from '@lexical/utils';
import {
    $getSelection,
    $isRangeSelection, $isTextNode, CAN_UNDO_COMMAND, CLEAR_EDITOR_COMMAND,
    FORMAT_TEXT_COMMAND,
    LexicalEditor, RangeSelection, REDO_COMMAND,
    SELECTION_CHANGE_COMMAND,
    UNDO_COMMAND,
} from 'lexical';

import {$patchStyleText} from '@lexical/selection';
import React, {useCallback, useEffect, useState} from 'react';
import {IconButton, Stack, Tab, Tabs} from "@mui/material";
import {create} from "zustand";
import {ToolbarItem} from "@/app/[locale]/(with-header)/news/editor/toolbar-item";
import {getCssProp, getCssValue, useToolbarTabs} from "@/app/[locale]/(with-header)/news/editor/toolbar-tabs";
import ClassnameTextNode, {$isClassNameTextNode} from "@/app/[locale]/(with-header)/news/editor/_generic-nodes/classname-text-node";
import {useEditorClasses} from "@/app/[locale]/(with-header)/news/editor/editor";
import {$isAutoLinkNode} from "@lexical/link";
import {useHistory} from "@/app/[locale]/(with-header)/news/editor/_plugins/history-plugin";
import {Clear} from "@mui/icons-material";
import {useTranslations} from "next-intl";

const LowPriority = 1;

const CustomToolbarItem = ({supplier}: { supplier: () => React.ReactNode }) => supplier();

export type ToolbarState = {
    canUndo: boolean;
    canRedo: boolean;
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    isStrikethrough: boolean;
    font: string;
    fontSize: number;
    lineHeight: number;
    color: string;
    backgroundColor: string;
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
    font: "IBM Plex Mono",
    fontSize: 16,
    lineHeight: 1.5,
    color: "#000000",
    backgroundColor: "#FFFFFF",
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

function componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgbString: string) {
    const r = parseInt(rgbString.split(",")[0].split("(")[1]);
    const g = parseInt(rgbString.split(",")[1]);
    const b = parseInt(rgbString.split(",")[2].split(")")[0]);
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getStyleOfSelection(selection: RangeSelection, style: string) {
    let currentStyle = null as unknown as string;
    for (const node of selection.getNodes()) {
        if ($isTextNode(node)) {
            const regex = new RegExp(`${style}:([^;]+);`);
            const match = regex.exec(node.getStyle());
            if (match) {
                let matchStr = match[1].trim();
                if (/rgb\((\s*\d+){3}\)/.test(currentStyle)) {
                    matchStr = rgbToHex(matchStr);
                }
                if (currentStyle && matchStr !== currentStyle) {
                    return null;
                } else {
                    currentStyle = matchStr;
                }
            } else {
                if ($isAutoLinkNode(node.getParent())) {
                    out:
                    for (const styleSheet of document.styleSheets) {
                        const rules = styleSheet.cssRules;
                        for (const rule of rules) {
                            if (rule.cssText.includes(".styled-autolink > *")) {
                                const cssText = rule.cssText;
                                const regex = new RegExp(`${style}:([^;]+);`);
                                const match = regex.exec(cssText);
                                if (match) {
                                    let matchStr = match[1].trim();
                                    if (/rgb\((\s*\d+){3}\)/.test(currentStyle)) {
                                        matchStr = rgbToHex(matchStr);
                                    }
                                    if (currentStyle && matchStr !== currentStyle) {
                                        return null;
                                    } else {
                                        currentStyle = matchStr;
                                    }
                                }
                                break out;
                            }
                        }
                    }
                } else {
                    return null;
                }
            }
        }
    }
    return currentStyle;
}

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isStrikethrough, setIsStrikethrough] = useState(false);
    const [font, setFont] = useState("IBM Plex Mono");
    const [fontSize, setFontSize] = useState(16);
    const [lineHeight, setLineHeight] = useState(1.5);
    const [color, setColor] = useState("black");
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [currentTab, setCurrentTab] = useState(0);
    const setToolbarState = useToolbarState((state) => state.setState);
    const {canUndo, canRedo} = useHistory((state) => {
        return {
            canUndo: state.canUndo,
            canRedo: state.canRedo,
        };
    });

    useEffect(() => {
        setToolbarState({
            canUndo,
            canRedo,
            isBold,
            isItalic,
            isUnderline,
            isStrikethrough,
            font,
            fontSize,
            lineHeight,
            color,
            backgroundColor
        });
    }, [canUndo, canRedo, isBold, isItalic, isUnderline, isStrikethrough, font, fontSize, lineHeight, color, backgroundColor]);

    const $updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
            setIsStrikethrough(selection.hasFormat('strikethrough'));
            setFont(getStyleOfSelection(selection, "font-family") ?? "IBM Plex Mono");
            const fontSize = getStyleOfSelection(selection, "font-size");
            if (fontSize) {
                setFontSize(parseInt(fontSize));
            } else {
                setFontSize(16);
            }
            const lineHeight = getStyleOfSelection(selection, "line-height");
            if (lineHeight) {
                setLineHeight(parseFloat(lineHeight) / 100);
            } else {
                setLineHeight(1.5);
            }
            setColor(getStyleOfSelection(selection, "color") ?? "#000000");
            setBackgroundColor(getStyleOfSelection(selection, "background-color") ?? "#FFFFFF");
        }
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
            editor.registerNodeTransform(ClassnameTextNode, (node) => {
                if (node.getTextContent().length < 2) {
                    const previousSibling = node.getPreviousSibling();
                    if (previousSibling) {
                        if ($isClassNameTextNode(previousSibling)) {
                            previousSibling.setTextContent(previousSibling.getTextContent() + node.getTextContent());
                            node.remove();
                        } else if ($isAutoLinkNode(previousSibling)) {
                            const lastChild = previousSibling.getLastChild();
                            if ($isClassNameTextNode(lastChild) && lastChild.getStyle() !== node.getStyle() && lastChild.classList.toString() !== node.classList.toString()) {
                                node.setStyle(lastChild.getStyle());
                                node.classList = lastChild.classList;
                            }
                        }
                    }
                }
            }),
            editor.registerNodeTransform(ClassnameTextNode, (node) => {
                if (!node.getStyle().includes("--level")) {
                    node.setMediaClass(null);
                } else {
                    const level = node.getStyle().split(";").find((value) => value.includes("--level"))?.split(":")[1].replace(";", "").trim();
                    node.setMediaClass(level as never);
                }
            })
        )
    }, [$updateToolbar, editor]);


    const toolbarTabs = useToolbarTabs(editor);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const removeClass = useEditorClasses((state) => state.removeClass);
    const translations = useTranslations("editor");

    return (
        <Stack direction="row" className="w-full">
            <Stack className="w-full gap-4">
                <Tabs value={currentTab} onChange={handleChange}>
                    {
                        toolbarTabs.map((tab, index) => (
                            <Tab key={index} label={translations((tab.title + ".title") as never)} id={`tab-${index}`}
                                 aria-controls={`tabcontrol-${index}`}/>
                        ))
                    }
                </Tabs>
                {
                    <Stack direction="row" spacing={1} aria-labelledby={`tab-${currentTab}`}
                           id={`tabcontrol-${currentTab}`} className="w-full h-fit items-center"
                           onMouseLeave={() => removeClass("invisible-selection")}> { /* ensure selection is visible */}
                        {toolbarTabs[currentTab].tools.map((item, index) =>
                            item.__type__ === "custom" ? <CustomToolbarItem key={index} supplier={item.supplier}/> :
                                <ToolbarItem key={index} {...item} />
                        )}
                    </Stack>
                }
            </Stack>
            <IconButton onClick={() => editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined)} className="self-end">
                <Clear/>
            </IconButton>
        </Stack>
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

export function undoIfNeeded(editor: LexicalEditor, clicked: boolean, setClicked: (value: (((prevState: boolean) => boolean) | boolean)) => void, allowEmptySelection = false) {
    let shouldUndo = true;
    const setAwaitEvict = useHistory.getState().setAwaitEvict;
    if (!allowEmptySelection) {
        editor.update(() => {
            const selection = $getSelection();
            if (selection?.getTextContent().length === 0 ?? true) {
                shouldUndo = false;
            }
        });
    }
    if (!clicked && shouldUndo) {
        editor.dispatchCommand(UNDO_COMMAND, undefined);
        setAwaitEvict(true);
        editor.dispatchCommand(REDO_COMMAND, undefined);
    }
    setClicked(false);
}