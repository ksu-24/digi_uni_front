import {FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, LexicalEditor, REDO_COMMAND, UNDO_COMMAND} from "lexical";
import {useEditorClasses} from "@/app/[locale]/(with-header)/news/editor/editor";
import {Stack} from "@mui/material";
import {PresetButton, TextLevel} from "@/app/[locale]/(with-header)/news/editor/preset-button";
import {
    FormatAlignCenter,
    FormatAlignJustify,
    FormatAlignLeft,
    FormatAlignRight,
    FormatBold,
    FormatItalic,
    FormatUnderlined,
    Redo,
    StrikethroughS,
    Undo
} from "@mui/icons-material";
import {AutocompleteToolbarItem} from "@/app/[locale]/(with-header)/news/editor/autocomplete-toolbarItem";
import fonts from "@/resources/fonts.json";
import themeObj from "@/app/_theme/theme-obj";
import React from "react";
import {clearLevel, useToolbarState} from "@/app/[locale]/(with-header)/news/editor/toolbar";

export const useToolbarTabs = (editor: LexicalEditor) => {
    const state = useToolbarState((state) => state);
    return [
        {
            title: "Presets",
            tools: [
                {
                    supplier: () => {
                        const removeClass = useEditorClasses((state) => state.removeClass);
                        return (
                            <Stack direction="row" className="gap-4 overflow-x-scroll" onMouseLeave={() => {
                                removeClass("invisible-selection");
                            }}>
                                {
                                    // @ts-ignore
                                    Object.keys(TextLevel).map((level: keyof typeof TextLevel) => (
                                        <PresetButton key={level} level={level}/>
                                    ))}
                            </Stack>
                        );
                    }
                }
            ]
        },
        {
            title: "Text formatting",
            tools: [
                {
                    title: 'Bold',
                    icon: <FormatBold fontSize="small"/>,
                    onClick: () => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
                    },
                    active: state.isBold
                },
                {
                    title: 'Italic',
                    icon: <FormatItalic fontSize="small"/>,
                    onClick: () => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
                    },
                    active: state.isItalic
                },
                {
                    title: 'Underline',
                    icon: <FormatUnderlined fontSize="small"/>,
                    onClick: () => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
                    },
                    active: state.isUnderline
                },
                {
                    title: 'Strikethrough',
                    icon: <StrikethroughS fontSize="small"/>,
                    onClick: () => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
                    },
                    active: state.isStrikethrough
                },
                {
                    title: 'Left Align',
                    icon: <FormatAlignLeft fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')
                },
                {
                    title: 'Center Align',
                    icon: <FormatAlignCenter fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')
                },
                {
                    title: 'Right Align',
                    icon: <FormatAlignRight fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')
                },
                {
                    title: 'Justify Align',
                    icon: <FormatAlignJustify fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify')
                },
                {
                    title: 'Undo',
                    icon: <Undo fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(UNDO_COMMAND, undefined),
                    onMouseLeave: () => editor.dispatchCommand(REDO_COMMAND, undefined),
                    disabled: !state.canUndo
                },
                {
                    title: 'Redo',
                    icon: <Redo fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(REDO_COMMAND, undefined),
                    onMouseLeave: () => editor.dispatchCommand(UNDO_COMMAND, undefined),
                    disabled: !state.canRedo
                },
                {
                    supplier: () => (
                        <AutocompleteToolbarItem
                            label="Font"
                            autocompleteProps={{
                                options: fonts,
                                defaultValue: fonts[0]
                            }}
                            cssProperty="font-family"
                        />
                    )
                },
                {
                    supplier: () => (
                        <AutocompleteToolbarItem
                            label="Text Size"
                            cssProperty="font-size"
                            autocompleteProps={{
                                options: ["1", "2", "4", "6", "8", "10", "12", "14", "16", "18",
                                    "20", "24", "28", "32", "36", "40", "48", "56", "64", "72"],
                                freeSolo: true,
                                defaultValue: "14"
                            }}
                            afterUpdate={() => {
                                clearLevel(editor);
                            }}
                            valuePreprocessor={(value) => value + "px"}
                        />
                    )
                },
                {
                    supplier: () => {
                        const themedColorsMapping = new Map(Object.entries({
                            "primary": themeObj.palette.primary.main,
                            "secondary": themeObj.palette.secondary.main,
                            "ternary": themeObj.palette.info.main,
                            "dark gray": themeObj.palette.gray.darkest,
                            "darker gray": themeObj.palette.gray.darker,
                            "gray": themeObj.palette.gray.default,
                            "light gray": themeObj.palette.gray.light
                        }));
                        return (
                            <AutocompleteToolbarItem
                                label="Text Color"
                                cssProperty="color"
                                autocompleteProps={{
                                    options: [
                                        "primary", "secondary", "ternary", "dark gray", "darker gray", "gray", "light gray",
                                        "red", "green", "blue", "black", "white", "yellow", "purple", "orange", "pink", "brown", "gray"
                                    ],
                                    groupBy: (option) => themedColorsMapping.has(option) ? "Themed Colors" : "Custom Colors",
                                    freeSolo: true,
                                    defaultValue: "black"
                                }}
                                validator={(value) => /^#[0-9A-F]{6}$/i.test(value)}
                            />
                        )
                    }
                }
            ]
        }
    ]
}

export function getCssValue(payload: "bold" | "italic" | "underline" | "strikethrough") {
    let cssValue: string;
    switch (payload) {
        case 'bold':
            cssValue = '500'
            break;
        case 'italic':
            cssValue = "italic"
            break;
        case 'underline':
            cssValue = "underline"
            break;
        case 'strikethrough':
            cssValue = "line-through"
            break;
        default:
            throw new Error("Unknown payload");
    }
    return cssValue;
}

export function getCssProp(payload: "bold" | "underline" | "strikethrough" | "italic" | "highlight" | "code" | "subscript" | "superscript") {
    let cssProp: string;
    switch (payload) {
        case 'bold':
            cssProp = 'font-weight';
            break;
        case 'italic':
            cssProp = 'font-style';
            break;
        case 'underline':
            cssProp = 'text-decoration';
            break;
        case 'strikethrough':
            cssProp = 'text-decoration';
            break;
        default:
            throw new Error("Unknown payload");
    }
    return cssProp;
}