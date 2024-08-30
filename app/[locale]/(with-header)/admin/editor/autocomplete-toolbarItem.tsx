import {Autocomplete, AutocompleteProps, ListItem, TextField, Typography} from "@mui/material";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import React, {useEffect, useRef, useState} from "react";
import {$getSelection, $isRangeSelection, RangeSelection} from "lexical";
import {$patchStyleText} from "@lexical/selection";
import {useTranslations} from "next-intl";

function PreviewListItem(
    {
        props,
        option,
        timeoutRef,
        close
    }: {
        props: React.HTMLAttributes<HTMLLIElement>,
        option: string,
        timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
        close: () => void
    }
) {
    return (
        <ListItem
            {...props}
            onMouseEnter={() => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
            }}
            onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                    close();
                    timeoutRef.current = null;
                }, 100);
            }}
        >
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
        inputType = "number",
        performOnSelection,
    }: {
        label: string,
        cssProperty: string,
        validator?: (value: string) => boolean,
        valuePreprocessor?: (value: string) => string,
        autocompleteProps: Omit<AutocompleteProps<string, false, true, boolean | undefined>, "renderInput">,
        inputType?: "text" | "number",
        performOnSelection?: (selection: RangeSelection, value: string) => void
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

    const [open, setOpen] = useState(false);
    const translations = useTranslations("editor");

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
                <TextField
                    {...params} label={translations(label as never)} variant="outlined" required type={inputType}
                    value={value} sx={{
                    "& > .MuiInputBase-root": {
                        paddingBottom: "calc(0.5rem + 0.4dvw - 6px) !important",
                    }
                }}/>
            )}
            renderOption={(props, option) => (
                <PreviewListItem
                    key={option}
                    props={props}
                    option={option}
                    timeoutRef={timeoutRef}
                    close={() => setOpen(false)}
                />
            )}
        />
    );
};