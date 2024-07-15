import {Autocomplete, AutocompleteProps, ListItem, TextField, Typography} from "@mui/material";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import React, {useEffect, useRef, useState} from "react";
import {$getSelection, $isRangeSelection, RangeSelection} from "lexical";
import {$patchStyleText} from "@lexical/selection";
import {useEditorClasses} from "@/app/[locale]/(with-header)/news/editor/editor";
import {undoIfNeeded} from "@/app/[locale]/(with-header)/news/editor/toolbar";
import {useTranslations} from "next-intl";

function PreviewListItem(
    {
        props,
        cssProperty,
        valuePreprocessor,
        option,
        afterUpdate,
        performOnSelection,
        undoOnEmptySelection
    }: {
        props: React.HTMLAttributes<HTMLLIElement>,
        cssProperty: string,
        valuePreprocessor: (value: string) => string,
        option: string,
        afterUpdate?: () => void,
        performOnSelection?: (selection: RangeSelection, value: string) => void,
        undoOnEmptySelection?: boolean
    }
) {
    const editor = useLexicalComposerContext()[0];
    const [clicked, setClicked] = useState(false);

    return (
        <ListItem {...props}
                  onClick={() => setClicked(true)}
                  onMouseEnter={() => {
                      editor.update(() => {
                          const selection = $getSelection();
                          if ($isRangeSelection(selection)) {
                              if (performOnSelection) {
                                  performOnSelection(selection, option);
                              } else {
                                  $patchStyleText(selection, {[cssProperty]: valuePreprocessor(option)});
                              }
                          }
                      });
                      if (afterUpdate) {
                          afterUpdate();
                      }
                  }} onMouseLeave={() => undoIfNeeded(editor, clicked, setClicked, undoOnEmptySelection)}>
            <Typography noWrap variant="body1">{option}</Typography>
        </ListItem>
    );
}

export const AutocompleteToolbarItem = (
    {
        label,
        cssProperty,
        autocompleteProps,
        validator,
        valuePreprocessor = (value) => value,
        afterUpdate,
        inputType = "number",
        performOnSelection,
        undoOnEmptySelection = false
    }: {
        label: string,
        cssProperty: string,
        validator?: (value: string) => boolean,
        valuePreprocessor?: (value: string) => string,
        autocompleteProps: Omit<AutocompleteProps<string, false, true, boolean | undefined>, "renderInput">,
        afterUpdate?: () => void,
        inputType?: "text" | "number",
        performOnSelection?: (selection: RangeSelection, value: string) => void,
        undoOnEmptySelection?: boolean
    }
) => {
    const editor = useLexicalComposerContext()[0];
    const [value, setValue] = useState(autocompleteProps.defaultValue ?? "");
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setValue(autocompleteProps.defaultValue ?? "");
    }, [autocompleteProps.defaultValue]);

    const handleChange = (_: React.SyntheticEvent, newValue: string | null) => {
        newValue = newValue ?? "";
        if (validator && !validator(newValue)) {
            return;
        }
        setValue(newValue);
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                if (performOnSelection) {
                    performOnSelection(selection, newValue);
                } else {
                    $patchStyleText(selection, {[cssProperty]: valuePreprocessor(newValue)});
                }
                $patchStyleText(selection, {"--level": null});
            }
        });
    };

    const {addClass, removeClass} = useEditorClasses((state) => {
        return {
            addClass: state.addClass,
            removeClass: state.removeClass
        }
    });
    const [open, setOpen] = useState(false);
    const translations = useTranslations("editor");

    console.log(value)

    return (
        <Autocomplete
            open={open}
            onMouseEnter={() => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
                setOpen(true);
            }}
            onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                    setOpen(false);
                    timeoutRef.current = null;
                }, 100);
            }}
            className="min-w-fit w-[10%]"
            {...autocompleteProps}
            disableClearable
            value={value}
            onChange={handleChange}
            renderInput={(params) => (
                <TextField {...params} label={translations(label as never)} variant="standard" required type={inputType}
                           value={value}/>
            )}
            renderOption={(props, option) => (
                <PreviewListItem
                    key={option}
                    props={props}
                    cssProperty={cssProperty}
                    valuePreprocessor={valuePreprocessor}
                    option={option}
                    afterUpdate={afterUpdate}
                    performOnSelection={performOnSelection}
                    undoOnEmptySelection={undoOnEmptySelection}
                />
            )}
            componentsProps={{
                paper: {
                    onMouseEnter: () => {
                        if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                            timeoutRef.current = null;
                        }
                        setOpen(true);
                        addClass("invisible-selection");
                    },
                    onMouseLeave: () => {
                        timeoutRef.current = setTimeout(() => {
                            removeClass("invisible-selection");
                            setOpen(false);
                            timeoutRef.current = null;
                        }, 200);
                    },
                    onClick: () => {
                        if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                            timeoutRef.current = null;
                        }
                        removeClass("invisible-selection");
                        setOpen(false);
                    }
                }
            }}
        />
    );
};