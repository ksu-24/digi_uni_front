import React, {JSX} from "react";
import {IconButton, Tooltip} from "@mui/material";
import {useTranslations} from "next-intl";

export type ToolbarItemProps = {
    __type__: "default"
    title: string,
    icon: React.ReactNode,
    onClick: () => void,
    disabled?: boolean,
    active?: boolean,
    appendAfter?: () => JSX.Element,
};

export const ToolbarItem = (
    {
        title,
        icon,
        appendAfter,
        disabled = false,
        active = false,
        onClick
    }: ToolbarItemProps
) => {
    const translations = useTranslations("editor");

    return (
        <>
            <Tooltip title={translations(title as never)} placement="top" arrow>
                <IconButton disabled={disabled} className={active ? 'active' : ''} onClick={onClick}>
                    {icon}
                </IconButton>
            </Tooltip>
            {appendAfter && appendAfter()}
        </>
    );
}