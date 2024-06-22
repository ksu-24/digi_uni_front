import {ReactNode} from "react";
import {Button, ButtonProps} from "@mui/material";

export function PrimaryButton(
    {
        children,
        props
    }: {
        children?: ReactNode,
        props?: ButtonProps
    }) {
    props = props ?? {};
    return (
        <Button {...props} className="bg-button-primary capitalize hover:bg-button-tertiary">
            {children}
        </Button>
    )
}

export function SecondaryButton(
    {
        children,
        className,
        type,
        props
    }: {
        children?: ReactNode,
        className?: string,
        type?: "button" | "submit" | "reset",
        props?: ButtonProps
    }) {
    props = props ?? {};
    return (
        <Button {...props}
                type={type}
                className={`bg-button-secondary capitalize text-white hover:bg-button-primary hover:text-black ${className}`}>
            {children}
        </Button>
    )
}

