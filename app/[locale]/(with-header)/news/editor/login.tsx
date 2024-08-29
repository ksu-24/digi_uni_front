"use client"

import FormWrapper, {FormFieldsValidationError} from "@/app/_util/components/form-wrapper";
import {NoSsr, TextField, Typography} from "@mui/material";
import {PrimaryButton} from "@/app/_util/components/buttons";
import {post} from "@/app/_util/fetching";
import {useRouter} from "next/navigation";

export default function Login() {
    const router = useRouter();
    return (
        <NoSsr>
            <FormWrapper onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const response = await post("/login", {}, {
                    "Authorization": "Basic " + btoa(`${formData.get("username")}:${formData.get("password")}`)
                });

                if (!response.ok) {
                    console.log(await response.text());
                    throw FormFieldsValidationError.ofProblemDetails(await response.json());
                }

                if (process.env.NODE_ENV === "development") {
                    const token = await response.text();
                    localStorage.setItem("token", token);
                }

                router.refresh();
            }} formProps={{
                className: "h-[80dvh] items-center justify-center pt-[10dvh] gap-4 " +
                    "px-[25dvw] md:px-[40dvw] 3xl:px-[30dvw]"
            }} disableSuccessSnackbar>
                <TextField name="username" label="Username" variant="outlined" fullWidth required/>
                <TextField name="password" label="Password" variant="outlined" fullWidth type="password" required/>
                <PrimaryButton props={{
                    type: "submit",
                    className: "mt-6"
                }}>
                    <Typography variant="body2">Login</Typography>
                </PrimaryButton>
            </FormWrapper>
        </NoSsr>
    )
}