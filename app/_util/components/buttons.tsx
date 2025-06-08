import {ReactNode} from "react";
import {Button, ButtonProps} from "@mui/material";
import colors from "@/resources/colors.json";

export function PrimaryButton(
    {
        children,
        props = {},
        ...rest
    }: {
        children?: ReactNode,
        props?: ButtonProps
    } & ButtonProps
) {
    return (
        <Button {...props} {...rest}
                className={`${props?.className ?? ""} !bg-button-primary 
                !capitalize hover:!bg-button-hover-primary 
                [&>*]:!text-white 
                !px-12 !h-14 gap-4 !py-0`}
                sx={{
                    "&:hover > svg": {
                        transform: "translateX(4px)"
                    }
                }}
        >
            {children}
            <svg height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="transition-transform ease-linear duration-200">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z"
                      fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z" fill="white"/>
            </svg>
        </Button>
    )
}

export function SecondaryButton(
    {
        children,
        props = {}
    }: {
        children?: ReactNode,
        props?: ButtonProps
    }) {
    return (
        <Button {...props}
                sx={{
                    "&:hover": {
                        backgroundColor: colors.button["hover-primary"] + ' !important',
                        color: "black"
                    },
                    "& > *": {
                        transition: "all 0.3s"
                    },
                    backgroundColor: colors.gray.darkest + ' !important',
                    color: "white",
                    ...props?.style
                }}
                className="gap-3"
        >
            {children}
            <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z"
                      fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z" fill="white"/>
            </svg>
        </Button>
    )
}

