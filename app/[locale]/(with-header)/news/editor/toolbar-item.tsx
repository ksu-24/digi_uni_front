import React, {JSX, useEffect, useState} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {useEditorClasses} from "@/app/[locale]/(with-header)/news/editor/editor";
import {IconButton, Tooltip} from "@mui/material";
import {undoIfNeeded, useToolbarState} from "@/app/[locale]/(with-header)/news/editor/toolbar";
import {useTranslations} from "next-intl";

export type ToolbarItemProps = {
    __type__: "default"
    title: string,
    icon: React.ReactNode,
    onClick: () => void,
    disabled?: boolean,
    active?: boolean,
    onMouseLeave?: () => void,
    undoOnEmptySelection?: boolean,
    disablePreview?: boolean,
    appendAfter?: () => JSX.Element
};

export const ToolbarItem = (
    {
        title,
        icon,
        onClick,
        onMouseLeave,
        appendAfter,
        disabled = false,
        active = false,
        undoOnEmptySelection = false,
        disablePreview = false
    }: ToolbarItemProps
) => {
    const [editor] = useLexicalComposerContext();
    const {addClass, removeClass} = useEditorClasses((state) => {
        return {
            addClass: state.addClass,
            removeClass: state.removeClass
        };
    });
    const translations = useTranslations("editor");
    const [disabledState, setDisabledState] = useState(disabled);
    const [isHovered, setIsHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const {setSharedSelectionBackgroundTimeout, clearSelectionBackgroundTimeout} = useToolbarState((state) => {
        return {
            setSharedSelectionBackgroundTimeout: state.setSharedSelectionBackgroundTimeout,
            clearSelectionBackgroundTimeout: state.clearSelectionBackgroundTimeout
        };
    });

    useEffect(() => {
        if (!isHovered || clicked) {
            setDisabledState(disabled);
        }
    }, [disabled, isHovered, clicked]);

    return (
        <>
            <Tooltip title={translations(title as never)} placement="top" arrow>
                <IconButton onClick={() => {
                    if (clicked || disablePreview) {
                        console.log("clicked");
                        onClick();
                        removeClass("invisible-selection");
                    }
                    setClicked(true);
                }} disabled={disabledState} className={active ? 'active' : ''}
                            onMouseEnter={disablePreview ? undefined : () => {
                                setIsHovered(true);
                                clearSelectionBackgroundTimeout();
                                addClass("invisible-selection");
                                onClick();
                            }}
                            onMouseLeave={disablePreview ? undefined : (onMouseLeave ? (() => {
                                if (!clicked) {
                                    onMouseLeave();
                                }
                                setClicked(false);
                                setIsHovered(false);
                            }) : (() => {
                                setSharedSelectionBackgroundTimeout(setTimeout(() => {
                                    removeClass("invisible-selection");
                                }, 200));
                                undoIfNeeded(editor, clicked, setClicked, undoOnEmptySelection);
                                setIsHovered(false);
                            }))}>
                    {icon}
                </IconButton>
            </Tooltip>
            {appendAfter && appendAfter()}
        </>
    );
}