"use client"

import {Stack, TextField, Typography} from "@mui/material";

import {PrimaryButton} from "@/app/_util/components/buttons";
import {post} from "@/app/_util/fetching";
import FormWrapper, {FormFieldsValidationError} from "@/app/_util/components/form-wrapper";
import {useTranslations} from "next-intl";

export default function SubscribeForm() {
    const translations = useTranslations("news.subscribeForm");

    return (
        <FormWrapper formProps={{
            bgcolor: "secondary.main",
            direction: "column",
            className: "mb-[7dvw] w-full px-[5dvw] pt-[24dvw] pb-[20dvw] xs:py-[4.5rem] xs:px-20 xs:gap-[7dvw] min-h-[33dvh] md:!flex-row"
        }} onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const formData = new FormData(form);
            const response = await post("/subscribers", Object.fromEntries(formData));

            if (!response.ok) {
                throw FormFieldsValidationError.ofProblemDetails(await response.json());
            }

            form.reset();
        }} messageOverrides={{
            success: translations("success")
        }}
        >
            <Stack className="gap-6 w-full">
                <Typography variant="h2">{translations("wantToBeUpdated")}</Typography>
                <Typography variant="body2">{translations("subscribeToNews")}</Typography>
            </Stack>
            <Stack className="gap-14 w-full">
                <TextField label={translations("email")} variant="standard" fullWidth type="email" name="email"
                           required/>
                <PrimaryButton props={{
                    className: "self-end w-full xs:w-auto",
                    type: "submit"
                }}>{translations("subscribeButton")}</PrimaryButton>
            </Stack>
        </FormWrapper>
    )
}