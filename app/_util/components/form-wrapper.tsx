import React from "react";
import {Alert, Input, Snackbar, Stack, StackProps, TextField} from "@mui/material";
import {useTranslations} from "next-intl";

export class FormFieldsValidationError extends Error {
    private readonly _errors: Record<string, string>[];

    constructor(errors: Record<string, string>[]) {
        super("Form fields validation failed");
        this._errors = errors;
    }

    get errors() {
        return this._errors;
    }

    static ofProblemDetails(problemDetails: {
        detail: string,
        properties: Record<string, string>
    }[]) {
        return new FormFieldsValidationError(
            problemDetails.map(({detail, properties}) => ({
                [Object.keys(properties)[0]]: detail
            }))
        );
    }
}

export default function FormWrapper(
    {
        children,
        onSubmit,
        messageOverrides = {},
        formProps = {}
    }: {
        children: React.ReactNode,
        onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
        formProps?: StackProps,
        messageOverrides?: {
            success?: string,
            error?: string
        }
    }
) {
    const [errors, setErrors] = React.useState([] as Record<string, string>[]);
    const [sendingState, setSendingState] = React.useState(null as "success" | "error" | null);
    const translations = useTranslations("form");

    function provideErrors(currentChild: any): React.ReactElement<any, string | React.JSXElementConstructor<any>> {

        if (currentChild.children) {
            currentChild.children = React.Children.toArray(currentChild.children).map((child: any) => provideErrors(child));
        }

        if (currentChild.type === TextField || currentChild.type === Input) {
            const error = errors.find(e => Object.keys(e)[0] === currentChild.props.name);
            if (error) {
                return React.cloneElement(currentChild, {
                    error: true,
                    helperText: Object.values(error)[0],
                    onChange: (e: React.ChangeEvent) => {
                        if (currentChild.props.onChange) {
                            currentChild.props.onChange(e);
                        }
                        setErrors(errors.filter(e => Object.keys(e)[0] !== currentChild.props.name));
                    }
                });
            }
        }

        return currentChild;
    }

    const childrenArray =  React.Children.toArray(children).map((child) => provideErrors(child)).map((child, index) => (
        React.cloneElement(child, {
            key: index
        })
    ));

    return (
        // @ts-ignore
        <Stack onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            try {
                await onSubmit(e);
                setSendingState("success")
            } catch (error) {
                if (!(error instanceof FormFieldsValidationError)) {
                    throw error;
                }
                setSendingState("error");
                setErrors(error.errors);
            }
        }} {...formProps} component="form">
            {childrenArray.map((child, index) => child)}
            <Snackbar open={sendingState === "success"} onClose={() => setSendingState(null)}>
                <Alert severity="success" variant="filled"
                       onClose={() => setSendingState(null)}>{messageOverrides.success ?? translations("success")}</Alert>
            </Snackbar>
            <Snackbar open={sendingState === "error"} onClose={() => setSendingState(null)}>
                <Alert severity="error" variant="filled"
                       onClose={() => setSendingState(null)}>{messageOverrides.error ?? translations("error")}</Alert>
            </Snackbar>
        </Stack>
    )
}