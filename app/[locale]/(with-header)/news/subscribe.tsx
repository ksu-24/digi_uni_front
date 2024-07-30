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
            className: `w-full md:!flex-row my-[12dvw] px-[4.5dvw] p-[5dvw] translate-y-[-2dvw] justify-between
            xl:mt-[8dvw] xl:max-w-[80dvw] xl:py-[5dvw]
            2xl:mb-[10dvw] 2xl:px-[6dvw] 2xl:py-[5dvw]
            3xl:my-[7dvw] 3xl:px-[5dvw] 3xl:py-[4dvw]
            `
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
            <Stack className="gap-6 w-full
            xl:,max-w-[35dvw]
            2xl:max-w-[30dvw]
            3xl:max-w-[22dvw]
            ">
                <Typography variant="h2" lineHeight={1.2}>{translations("wantToBeUpdated")}</Typography>
                <Typography variant="body2">{translations("subscribeToNews")}</Typography>
            </Stack>
            <Stack className="w-full max-w-[30dvw] mb-[15px]
            3xl:max-w-[21dvw]
            ">
                <TextField
                    label={translations("email")} variant="standard" fullWidth type="email" name="email"
                    required
                    inputProps={{
                        style: {
                            fontSize: "1rem",
                            lineHeight: "1.5",
                            fontFamily: "IBM Plex Mono"
                        }
                    }}
                    sx={{
                        "& > *": {
                            paddingLeft: "0 !important",
                            paddingRight: "0 !important",
                            paddingTop: "0.8dvw !important",
                            paddingBottom: "0.4dvw !important"
                        },
                        '& > .MuiInputLabel-root': {
                            paddingTop: "0.8dvw !important",
                            paddingBottom: "0 !important"
                        }
                    }}/>
                <Typography variant="caption" lineHeight="20px" className="pt-[2dvw]
                3xl:py-[1dvw]
                ">
                    Натискаючи кнопку, ви автоматично погоджуєтесь на обробку персональних даних
                </Typography>
                <PrimaryButton props={{
                    className: `self-end w-full xs:w-auto h-14 mt-[3dvw] !px-[48px] gap-0
                    2xl:mt-[2dvw]
                    3xl:!px-8 3xl:py-[1dvw] 3xl:gap-4 3xl:mt-[1dvw]`,
                    type: "submit"
                }}>
                    <Typography variant="caption" className="text-white" letterSpacing={0}>
                        {translations("subscribeButton")}
                    </Typography>
                </PrimaryButton>
            </Stack>
        </FormWrapper>
    )
}