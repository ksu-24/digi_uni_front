"use client"

import {Stack, TextField, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {PrimaryButton} from "@/app/_util/components/buttons";
import {post} from "@/app/_util/fetching";
import FormWrapper, {FormFieldsValidationError} from "@/app/_util/components/form-wrapper";

export default function FeedbackForm() {
    const translations = useTranslations("feedbackForm");
    const initialRows = 6;
    const [rows, setRows] = useState(initialRows);
    return (
        <FormWrapper formProps={{
            className: "min-w-1/2 w-full h-full items-start gap-4"
        }} onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const response = await post("/feedback", Object.fromEntries(formData));
            if (!response.ok) {
                throw FormFieldsValidationError.ofProblemDetails(await response.json());
            }
            form.reset();
            setRows(initialRows);
        }} messageOverrides={{
            success: translations("success"),
            error: translations("error")
        }}>
            <TextField name="username" required label={translations("name")} variant="standard" inputProps={{
                minLength: 1
            }} className="w-full"/>
            <TextField name="email" required label={translations("email")} variant="standard" type="email"
                       className="w-full bg-none" inputProps={{
                minLength: 1
            }}/>
            <TextField name="message" id="message" label={translations("message")} variant="standard" multiline
                       className="w-full"
                       rows={rows}
                       required={true}
                       onChange={(e) => {
                           setRows(Math.max(e.target.value.length / 47 + 1, initialRows));
                       }}
                       inputProps={{
                           minLength: 1
                       }}
            />
            <PrimaryButton props={{
                type: "submit",
                style: {
                    marginTop: "1.75rem",
                    alignSelf: "end"
                },
                className: "w-full xs:w-auto"
            }}>
                <Stack className="w-full h-full items-center justify-center gap-4" direction="row">
                    <Typography fontSize="inherit" fontFamily="inherit">
                        {translations("send")}
                    </Typography>
                </Stack>
            </PrimaryButton>
        </FormWrapper>
    )
}