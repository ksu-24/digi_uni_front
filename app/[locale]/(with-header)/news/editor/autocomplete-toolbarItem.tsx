import {Autocomplete, AutocompleteProps, ListItem, TextField, Typography} from "@mui/material";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import React, {useRef, useState} from "react";
import {$getSelection, $isRangeSelection} from "lexical";
import {$patchStyleText} from "@lexical/selection";
import {useEditorClasses} from "@/app/[locale]/(with-header)/news/editor/editor";
import {undoIfNeeded} from "@/app/[locale]/(with-header)/news/editor/toolbar";

function PreviewListItem(
    {
        props,
        cssProperty,
        valuePreprocessor,
        option,
        afterUpdate
    }: {
        props: React.HTMLAttributes<HTMLLIElement>,
        cssProperty: string,
        valuePreprocessor: (value: string) => string,
        option: string,
        afterUpdate?: () => void
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
                              $patchStyleText(selection, {[cssProperty]: valuePreprocessor(option)});
                          }
                      });
                      if (afterUpdate) {
                          afterUpdate();
                      }
                  }} onMouseLeave={() => undoIfNeeded(editor, clicked, setClicked)}>
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
        afterUpdate
    }:
        {
            label: string,
            cssProperty: string,
            validator?: (value: string) => boolean,
            valuePreprocessor?: (value: string) => string,
            autocompleteProps: Omit<AutocompleteProps<string, false, true, boolean | undefined>, "renderInput">,
            afterUpdate?: () => void
        }
) => {
    const editor = useLexicalComposerContext()[0];
    const [value, setValue] = useState(autocompleteProps.defaultValue ?? "");
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleChange = (_: React.SyntheticEvent, newValue: string | null) => {
        newValue = newValue ?? "";
        if (validator && !validator(newValue)) {
            return;
        }
        setValue(newValue);
        editor.update(() => {
            const selection = $getSelection();
            if (selection) {
                $patchStyleText(selection, {[cssProperty]: valuePreprocessor(newValue)});
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
                <TextField {...params} label={label} variant="standard"/>
            )}
            renderOption={(props, option) => (
                <PreviewListItem
                    key={option}
                    props={props}
                    cssProperty={cssProperty}
                    valuePreprocessor={valuePreprocessor}
                    option={option}
                    afterUpdate={afterUpdate}
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