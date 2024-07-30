"use client"

import {Box, Stack, TextField, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {PrimaryButton} from "@/app/_util/components/buttons";
import {post} from "@/app/_util/fetching";
import FormWrapper, {FormFieldsValidationError} from "@/app/_util/components/form-wrapper";
import screens from "@/resources/screens.json";
import EnterAnimation from "@/app/_util/components/enter-animation";

export default function FeedbackForm() {
    const translations = useTranslations("feedbackForm");
    const initialRows = 6;
    const [rows, setRows] = useState(initialRows);
    const [isSubmitted, setIsSubmitted] = useState(false);
    return !isSubmitted ? (
        <EnterAnimation
            direction="up" offset={20} delay={0.4} fadeDuration={0.4} duration={1000}
            className="w-[40%] h-full max-lg:w-full">
            <Box>
                <FormWrapper formProps={{
                    className: ` h-full items-start shrink-0 gap-[2dvw]
                max-xs:gap-[1dvw]
                max-lg:w-full
                2xl:max-w-[38dvw] 2xl:gap-[1dvw]
                3xl:-mt-[0.6rem]
                `
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
                    setIsSubmitted(true);
                }} messageOverrides={{
                    success: translations("success"),
                    error: translations("error")
                }} disableSuccessSnackbar>
                    <TextField name="username" required label={translations("name")} variant="standard" inputProps={{
                        minLength: 1
                    }} className="w-full"/>
                    <TextField name="email" required label={translations("email")} variant="standard" type="email"
                               className="w-full bg-none" inputProps={{
                        minLength: 1,
                    }}/>
                    <TextField name="message" id="message" label={translations("message")} variant="standard" multiline
                               className="w-full !h-auto
                           max-xs:!pt-[3dvw]
                       "
                               rows={rows}
                               required={true}
                               onChange={(e) => {
                                   setRows(Math.max(e.target.value.length / 47 + 1, initialRows));
                               }}
                               inputProps={{
                                   minLength: 1
                               }}
                               sx={{
                                   [`@media (max-width: ${screens.xs})`]: {
                                       "& > .MuiInputBase-root": {
                                           minHeight: "64dvw",
                                           paddingTop: "0.5rem !important",
                                           paddingLeft: "0.5rem !important",
                                           paddingRight: "0.5rem !important",
                                       },
                                       "& > .MuiInputLabel-root": {
                                           paddingTop: "calc(0.5rem + 3dvw) !important",
                                           paddingLeft: "0.5rem !important",
                                           paddingRight: "0.5rem !important",
                                       }
                                   }
                               }}
                    />
                    <PrimaryButton props={{
                        type: "submit",
                        style: {
                            alignSelf: "end"
                        },
                        className: `w-full xs:w-auto mt-[1dvw]
                    max-xs:!mt-[12dvw]
                    max-lg:mt-[3dvw]
                    `
                    }}>
                        <Typography lineHeight={1.1} className="text-[16px] tracking-[-0.03rem]
                xl:text-[14px] xl:tracking-[0]
                ">
                            {translations("send")}
                        </Typography>
                    </PrimaryButton>
                </FormWrapper>
            </Box>
        </EnterAnimation>
    ) : (
        <Stack className="w-full items-center">
            <Box className="p-5 border-[1px] border-themed-darkgray w-fit shrink-0 h-fit">
                <Typography variant="body2" fontSize={18} className="w-fit h-fit">Thank you! Your submission has been
                    received!</Typography>
            </Box>
        </Stack>
    )
}