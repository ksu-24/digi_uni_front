import React, {useState} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {useEditorClasses} from "@/app/[locale]/(with-header)/news/editor/editor";
import {IconButton, Tooltip} from "@mui/material";
import {clearLevel, undoIfNeeded, useToolbarState} from "@/app/[locale]/(with-header)/news/editor/toolbar";
import {useHistory} from "@/app/[locale]/(with-header)/news/editor/history-plugin";

export const ToolbarItem = (
    {title, icon, onClick, onMouseLeave, disabled = false, active = false}:
        {
            title: string,
            icon: React.ReactNode,
            onClick: () => void,
            disabled?: boolean,
            active?: boolean,
            onMouseLeave?: () => void
        }
) => {
    const editor = useLexicalComposerContext()[0];
    const evictRedo = useHistory((state) => state.evictRedo);
    const {addClass, removeClass} = useEditorClasses((state) => {
        return {
            addClass: state.addClass,
            removeClass: state.removeClass
        };
    });
    const [clicked, setClicked] = useState(false);
    const {setSharedSelectionBackgroundTimeout, clearSelectionBackgroundTimeout} = useToolbarState((state) => {
        return {
            setSharedSelectionBackgroundTimeout: state.setSharedSelectionBackgroundTimeout,
            clearSelectionBackgroundTimeout: state.clearSelectionBackgroundTimeout
        };
    });

    return (
        <Tooltip title={title} placement="top" arrow>
            <IconButton onClick={() => {
                setClicked(true);
                removeClass("invisible-selection");
            }} disabled={disabled} className={active ? 'active' : ''}
                        onMouseEnter={() => {
                            clearSelectionBackgroundTimeout();
                            addClass("invisible-selection");
                            onClick();
                        }}
                        onMouseLeave={onMouseLeave ? (() => {
                            if (!clicked) {
                                onMouseLeave();
                            }
                            setClicked(false);
                        }) : (() => {
                            setSharedSelectionBackgroundTimeout(setTimeout(() => {
                                removeClass("invisible-selection");
                            }, 200));
                            undoIfNeeded(editor, clicked, setClicked);
                        })}>
                {icon}
            </IconButton>
        </Tooltip>
    );
}