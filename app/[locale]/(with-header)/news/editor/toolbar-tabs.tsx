import {
    $getSelection,
    $isParagraphNode,
    $isRangeSelection,
    $isTextNode,
    FORMAT_ELEMENT_COMMAND,
    FORMAT_TEXT_COMMAND,
    LexicalEditor,
    ParagraphNode,
    REDO_COMMAND,
    UNDO_COMMAND
} from "lexical";
import {useEditorClasses} from "@/app/[locale]/(with-header)/news/editor/editor";
import {Backdrop, Box, Stack} from "@mui/material";
import {PresetButton, TextLevel} from "@/app/[locale]/(with-header)/news/editor/preset-button";
import {
    FormatAlignCenter,
    FormatAlignJustify,
    FormatAlignLeft,
    FormatAlignRight,
    FormatBold,
    FormatItalic,
    FormatQuote,
    FormatUnderlined,
    ImageRounded,
    Redo,
    StrikethroughS,
    Undo
} from "@mui/icons-material";
import {AutocompleteToolbarItem} from "@/app/[locale]/(with-header)/news/editor/autocomplete-toolbarItem";
import fonts from "@/resources/fonts.json";
import React from "react";
import {clearLevel, useToolbarState} from "@/app/[locale]/(with-header)/news/editor/toolbar";
import {ToolbarItemProps} from "@/app/[locale]/(with-header)/news/editor/toolbar-item";
import {ImageDropzone} from "@/app/_util/components/image-dropzone";
import {INSERT_IMAGE_COMMAND} from "@/app/[locale]/(with-header)/news/editor/_multimedia/image-plugin";
import {$createQuoteNode, $isQuoteNode, QuoteNode} from "@lexical/rich-text";
import {ColorPicker} from "@/app/[locale]/(with-header)/news/editor/color-picker";
import {$createAutoLinkNode, $isAutoLinkNode, AutoLinkNode} from "@lexical/link";
import {$wrapNodeInElement} from "@lexical/utils";
import {$creatClassnameTextNode} from "@/app/[locale]/(with-header)/news/editor/_generic-nodes/classname-text-node";

export type CustomToolbarItemProps = {
    __type__: "custom"
    supplier: () => React.ReactNode
}

type ToolbarTabType = {
    title: string,
    tools: (CustomToolbarItemProps | ToolbarItemProps)[]
}

export enum OpenBackdrop {
    IMAGE = "image",
}

export const useToolbarTabs = (editor: LexicalEditor): ToolbarTabType[] => {
    const state = useToolbarState((state) => state);
    const [openBackdrop, setOpenBackdrop] = React.useState(null as OpenBackdrop | null);
    return [
        {
            title: "presets",
            tools: [
                {
                    __type__: "custom",
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
            title: "textFormating",
            tools: [
                {
                    __type__: "default",
                    title: 'textFormating.bold',
                    icon: <FormatBold fontSize="small"/>,
                    onClick: () => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
                    },
                    active: state.isBold
                },
                {
                    __type__: "default",
                    title: 'textFormating.italic',
                    icon: <FormatItalic fontSize="small"/>,
                    onClick: () => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
                    },
                    active: state.isItalic
                },
                {
                    __type__: "default",
                    title: 'textFormating.underline',
                    icon: <FormatUnderlined fontSize="small"/>,
                    onClick: () => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
                    },
                    active: state.isUnderline
                },
                {
                    __type__: "default",
                    title: 'textFormating.strikethrough',
                    icon: <StrikethroughS fontSize="small"/>,
                    onClick: () => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
                    },
                    active: state.isStrikethrough
                },
                {
                    __type__: "default",
                    title: "textFormating.quote",
                    icon: <FormatQuote fontSize="small"/>,
                    onClick: () => {
                        editor.update(() => {
                            const selection = $getSelection();
                            if ($isRangeSelection(selection)) {
                                const parents = selection.getNodes()
                                    .map(node => node.getParent())
                                    .filter(node => $isParagraphNode(node) || $isAutoLinkNode(node) || $isQuoteNode(node)) as (ParagraphNode | AutoLinkNode | QuoteNode)[];

                                const shouldRemoveQuote = parents.every(parent => $isQuoteNode(parent));

                                const parentsSet = new Set(parents);

                                if (shouldRemoveQuote) {
                                    parentsSet.forEach(parent => {
                                        const firstChild = parent.getFirstChild()

                                        const replacement = $isAutoLinkNode(firstChild) ?
                                            $createAutoLinkNode(firstChild.getURL()) :
                                            $creatClassnameTextNode(firstChild?.getTextContent() ?? "");

                                        parent.replace(replacement, true)
                                    })
                                } else {
                                    parentsSet.forEach(parent => {
                                        $wrapNodeInElement(parent, $createQuoteNode);
                                    })
                                }
                            }
                        })
                    },
                    active: true,
                    undoOnEmptySelection: true
                },
                {
                    __type__: "default",
                    title: 'textFormating.alignLeft',
                    icon: <FormatAlignLeft fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left'),
                    undoOnEmptySelection: true,
                    disablePreview: true
                },
                {
                    __type__: "default",
                    title: 'textFormating.alignCenter',
                    icon: <FormatAlignCenter fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center'),
                    undoOnEmptySelection: true,
                    disablePreview: true
                },
                {
                    __type__: "default",
                    title: 'textFormating.alignRight',
                    icon: <FormatAlignRight fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right'),
                    undoOnEmptySelection: true,
                    disablePreview: true
                },
                {
                    __type__: "default",
                    title: 'textFormating.alignJustify',
                    icon: <FormatAlignJustify fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify'),
                    undoOnEmptySelection: true,
                    disablePreview: true
                },
                {
                    __type__: "default",
                    title: 'textFormating.undo',
                    icon: <Undo fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(UNDO_COMMAND, undefined),
                    onMouseLeave: () => editor.dispatchCommand(REDO_COMMAND, undefined),
                    disabled: !state.canUndo
                },
                {
                    __type__: "default",
                    title: 'textFormating.redo',
                    icon: <Redo fontSize="small"/>,
                    onClick: () => editor.dispatchCommand(REDO_COMMAND, undefined),
                    onMouseLeave: () => editor.dispatchCommand(UNDO_COMMAND, undefined),
                    disabled: !state.canRedo
                },
                {
                    __type__: "custom",
                    supplier: () => {
                        const currentLineHeight = useToolbarState((state) => state.lineHeight);
                        return (
                            <AutocompleteToolbarItem
                                label="textFormatting.lineHeight"
                                cssProperty="line-height"
                                autocompleteProps={{
                                    options: ["1", "1.15", "1.5", "2", "2.5", "3"],
                                    freeSolo: true,
                                    defaultValue: (+currentLineHeight.toFixed(2)).toString(),
                                }}
                                performOnSelection={(selection, value) => {
                                    const parentBlocks = new Set(
                                        selection.getNodes().map(node =>
                                            node.getParent()).filter(node =>
                                            $isParagraphNode(node) || $isAutoLinkNode(node)) as (ParagraphNode | AutoLinkNode)[]
                                    );
                                    for (const block of parentBlocks) {
                                        block.getChildren().forEach(child => {
                                            if ($isTextNode(child)) {
                                                child.setStyle(child.getStyle().replaceAll(/line-height:\s*[\d.]+\s*%?;?/g, ''));
                                                child.setStyle(child.getStyle() + `line-height: ${parseFloat(value) * 100}%;`);
                                            }
                                        })
                                    }
                                }}
                                undoOnEmptySelection={true}
                                inputType="number"
                            />
                        )
                    }
                },
                {
                    __type__: "custom",
                    supplier: () => {
                        const currentFont = useToolbarState((state) => state.font);
                        return (
                            <AutocompleteToolbarItem
                                label="textFormating.fontFamily"
                                autocompleteProps={{
                                    options: fonts,
                                    defaultValue: currentFont,
                                }}
                                cssProperty="font-family"
                                inputType="text"
                            />
                        )
                    }
                },
                {
                    __type__: "custom",
                    supplier: () => {
                        const currentFontSize = useToolbarState((state) => state.fontSize);
                        return (
                            <AutocompleteToolbarItem
                                label="textFormating.fontSize"
                                cssProperty="font-size"
                                autocompleteProps={{
                                    options: ["1", "2", "4", "6", "8", "10", "12", "14", "16", "18",
                                        "20", "24", "28", "32", "36", "40", "48", "56", "64", "72"],
                                    freeSolo: true,
                                    defaultValue: currentFontSize.toString(),
                                }}
                                afterUpdate={() => {
                                    clearLevel(editor);
                                }}
                                valuePreprocessor={(value) => value + "px"}
                                inputType="number"
                            />
                        )
                    }
                },
                {
                    __type__: "custom",
                    supplier: () => <ColorPicker styleProp="color"/>
                },
                {
                    __type__: "custom",
                    supplier: () => <ColorPicker styleProp="background-color"/>
                }
            ]
        }, {
            title: "multimedia",
            tools: [
                {
                    __type__: "default",
                    title: 'multimedia.image',
                    icon: <ImageRounded fontSize="small"/>,
                    onClick: () => {
                        setOpenBackdrop(OpenBackdrop.IMAGE);
                    },
                    undoOnEmptySelection: true,
                    disablePreview: true,
                    appendAfter: () => {
                        return (
                            <Backdrop open={openBackdrop === OpenBackdrop.IMAGE} onClick={() => setOpenBackdrop(null)}>
                                <Box onClick={(e) => e.stopPropagation()}
                                     className="w-1/2 h-1/2 bg-white rounded-2xl border-black border-2">
                                    <ImageDropzone onPictureUpload={(picture) => {
                                        editor.dispatchCommand(INSERT_IMAGE_COMMAND, {src: picture, altText: "Image"});
                                        setOpenBackdrop(null);
                                    }} resetOnUpload/>
                                </Box>
                            </Backdrop>
                        );
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