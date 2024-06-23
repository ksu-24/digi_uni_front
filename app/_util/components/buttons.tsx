import {CSSProperties, ReactNode} from "react";
import {Button, ButtonProps} from "@mui/material";
import colors from "@/resources/colors.json";

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
        <Button {...props} className="!bg-button-primary !capitalize hover:!bg-button-hover-primary">
            {children}
        </Button>
    )
}

export function SecondaryButton(
    {
        children,
        styles,
        props
    }: {
        children?: ReactNode,
        styles?: CSSProperties,
        props?: ButtonProps
    }) {
    props = props ?? {};
    return (
        <Button {...props}
                sx={{
                    "&:hover": {
                        backgroundColor: colors.button["hover-primary"] + ' !important',
                        color: "black"
                    },
                    backgroundColor: colors.gray.darkest + ' !important',
                    color: "white",
                    ...styles
                }}>
            {children}
        </Button>
    )
}

