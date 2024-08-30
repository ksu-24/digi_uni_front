import {$getSelection, $isRangeSelection, RangeSelection} from "lexical";
import {$patchStyleText} from "@lexical/selection";
import themeObj from "@/app/_theme/theme-obj";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import React from "react";
import {Button, Typography} from "@mui/material";
import {$isClassNameTextNode} from "@/app/[locale]/(with-header)/admin/editor/_generic-nodes/classname-text-node";

export enum TextLevel {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    BODY1 = 'body1',
    BODY2 = 'body2',
    CAPTION = 'caption'
}

export const jsxToCss = (jsxKey: string) => jsxKey.replace(/([A-Z])/g, "-$1").toLowerCase();

const $applyTextStyles = (selection: RangeSelection, level: TextLevel) => {
    for (const style of ["font-weight", "font-style", "text-decoration", "font-family", "font-size", "color", "background-color"]) {
        $patchStyleText(selection, {[style]: null});
    }
    for (const [key, value] of Object.entries(themeObj.typography[level])) {
        if (typeof value === 'string' || key !== 'fontSize' && !key.startsWith("@")) {
            $patchStyleText(selection, {
                [jsxToCss(key)]: value.toString()
            });
        } else if (key === 'fontSize') {
            $patchStyleText(selection, {
                [jsxToCss(key)]: value.toString() + 'px'
            });
        }
    }
    $patchStyleText(selection, {
        '--level': level
    });
};

const textLevelToOption = (level: TextLevel) => {
    switch (level) {
        case TextLevel.H1:
            return 'Heading 1';
        case TextLevel.H2:
            return 'Heading 2';
        case TextLevel.H3:
            return 'Heading 3';
        case TextLevel.H4:
            return 'Heading 4';
        case TextLevel.H5:
            return 'Heading 5';
        case TextLevel.H6:
            return 'Heading 6';
        case TextLevel.BODY1:
            return 'Body 1';
        case TextLevel.BODY2:
            return 'Body 2';
        case TextLevel.CAPTION:
            return 'Caption';
    }
};

export function PresetButton(
    {
        level
    }: {
        level: keyof typeof TextLevel

    }) {
    const editor = useLexicalComposerContext()[0];

    function applyStylesToSelection() {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $applyTextStyles(selection, TextLevel[level]);
            }
        });

        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                selection.getNodes().forEach((node) => {
                    if ($isClassNameTextNode(node)) {
                        node.setMediaClass(TextLevel[level]);
                    }
                });
            }
        });
    }

    return (
        <Button className="min-w-fit" onClick={applyStylesToSelection}>
            <Typography variant={level.toLowerCase() as never}>
                {textLevelToOption(TextLevel[level])}
            </Typography>
        </Button>
    );
}