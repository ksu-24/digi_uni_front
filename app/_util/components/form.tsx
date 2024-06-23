"use client"

import {Stack, TextField, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {SecondaryButton} from "@/app/_util/components/buttons";

export function Form() {
    const translations = useTranslations("feedbackForm");
    const initialRows = 6;
    const [rows, setRows] = useState(initialRows);
    const [invert, setInvert] = useState(false);
    return (
        <Stack className="w-full h-full items-start gap-4" component="form">
            <TextField label={translations("name")} variant="standard" inputProps={{
                minLength: 1
            }} className="w-full"/>
            <TextField label={translations("email")} variant="standard" type="email" className="w-full"/>
            <TextField label={translations("message")} variant="standard" multiline className="w-full"
                       rows={rows}
                       onChange={(e) => {
                           setRows(Math.max(e.target.value.length / 47 + 1, initialRows));
                       }}
            />
            <SecondaryButton styles={{
                marginTop: "1.75rem",
                alignSelf: "end"
            }} props={{
                type: "submit",
                onMouseEnter: () => setInvert(true),
                onMouseLeave: () => setInvert(false)
            }}>
                <Stack className="w-full h-full items-center justify-center gap-4" direction="row">
                    <Typography fontSize="inherit" fontFamily="inherit">
                        {translations("send")}
                    </Typography>
                    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className={`${invert ? "invert" : ""}`}>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z" fill="white"/>
                    </svg>
                </Stack>
            </SecondaryButton>
        </Stack>
    )
}