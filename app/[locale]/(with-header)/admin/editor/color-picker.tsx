import {useTranslations} from "next-intl";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import React, {useEffect, useState} from "react";
import {$getSelection, $isRangeSelection} from "lexical";
import {$patchStyleText} from "@lexical/selection";
import themeObj from "@/app/_theme/theme-obj";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    FormControl,
    InputLabel,
    Stack,
    TextField
} from "@mui/material";
import {ChromePicker} from "react-color";
import {useToolbarState} from "@/app/[locale]/(with-header)/admin/editor/toolbar";

export function ColorPicker(
    {
        styleProp
    }: {
        styleProp: string
    }
) {
    const translations = useTranslations("editor.textFormating");
    const [editor] = useLexicalComposerContext();
    const [prevColors, setPrevColors] = React.useState<string[]>([]);
    const stylePropInCamelCase = styleProp.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const initialValue = useToolbarState((state) => state[stylePropInCamelCase as never]) as string
    const [current, setCurrent] = useState(initialValue.toUpperCase());

    const setCurrentAndUpdate = (color: string) => {
        setCurrent(color);
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $patchStyleText(selection, {
                    [styleProp]: color
                });
            }
        });
    }

    useEffect(() => {
        setCurrent(initialValue.toUpperCase());
    }, [initialValue]);

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
        <Accordion elevation={0} sx={{
            "& .MuiCollapse-root": {
                position: "absolute",
                backgroundColor: "white"
            },
            "& .Mui-expanded": {
                minHeight: "0 !important"
            },
            "::before": {
                display: "none"
            },
        }} className="!m-0 h-full">
            <AccordionSummary sx={{
                "& > .Mui-expanded": {
                    margin: "0 !important"
                },
                "& > .MuiAccordionSummary-content": {
                    margin: 0,
                    flexGrow: 0,
                    flexShrink: 2,
                    flexDirection: "column"
                },
            }} className="min-h-0 h-full flex flex-col items-center justify-center gap-1 !px-0 mx-4">
                <FormControl className="w-fit !cursor-pointer">
                    <InputLabel shrink required htmlFor="textcolor">{translations(styleProp as never)}</InputLabel>
                    <TextField sx={{
                        ".MuiInputBase-root > *:first-child": {
                            cursor: "pointer",
                            backgroundColor: current,
                            backgroundClip: "content-box",
                            padding: 0,
                            marginTop: "6px",
                        }
                    }} name="textcolor" variant="standard" className="w-40"/>
                </FormControl>
            </AccordionSummary>
            <AccordionDetails className="w-fit h-fit">
                <Stack direction="row" className="w-fit gap-2">
                    <ChromePicker
                        color={current}
                        styles={{
                            default: {
                                picker: {
                                    boxShadow: "0"
                                }
                            }
                        }}
                        onChange={(e) => setCurrent(e.hex)}
                        onChangeComplete={(e) => {
                            setPrevColors([e.hex, ...prevColors].slice(0, 5));
                            setCurrentAndUpdate(e.hex)
                        }}>
                    </ChromePicker>
                    <Stack className="gap-1">
                        {
                            Array.from(themedColorsMapping.entries()).map(([key, value]) => (
                                <Box key={key}
                                     className="w-4 h-4 bg-black rounded-full border-[1px] cursor-pointer"
                                     style={{backgroundColor: value}}
                                     onClick={() => setCurrentAndUpdate(value)}/>
                            ))
                        }
                    </Stack>
                    <Stack className="gap-1 min-w-4">
                        {
                            prevColors.map((color) => (
                                <Box key={color}
                                     className="w-4 h-4 bg-black rounded-full border-[1px] cursor-pointer"
                                     style={{backgroundColor: color}}
                                     onClick={() => setCurrentAndUpdate(color)}/>
                            ))
                        }
                    </Stack>
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}