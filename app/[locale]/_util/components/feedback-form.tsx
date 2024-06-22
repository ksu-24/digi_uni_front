import {Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {Social} from "@/app/[locale]/_util/components/social";
import {Form} from "@/app/[locale]/_util/components/form";


export default async function FeedbackForm() {
    return (
        <Stack className="w-full h-full items-start gap-[20%] justify-between" direction="row">
            <Caption/>
            <Form/>
        </Stack>
    )
}

async function Caption() {
    const translations = await getTranslations("feedbackForm");
    return (
        <Stack className="w-full h-full items-start gap-16">
            <Typography variant="h3">{translations("title")}</Typography>
            <Stack className="gap-10 items-start">
                <OrganizerInfo name={translations("oleh")} email="email_name@kpi.kharkov.ua"/>
                <OrganizerInfo name={translations("kseniia")} email="email_name@kpi.kharkov.ua"/>
                <Social direction="row"/>
            </Stack>
        </Stack>
    )
}

function OrganizerInfo(
    {
        name,
        email
    }: {
        name: string
        email: string
    }
) {
    return (
        <Stack className="w-full h-full items-start">
            <Typography variant="body2" fontWeight={500}>{name}</Typography>
            <Typography variant="body2">{email}</Typography>
        </Stack>
    )
}