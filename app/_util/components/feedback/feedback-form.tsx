import {Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {Social} from "@/app/_util/components/social";
import Form from "@/app/_util/components/feedback/form";


export default async function FeedbackForm(
    {
        captionVariant
    } : {
        captionVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    }
) {
    return (
        <Stack className="w-full h-full items-start gap-[20%] justify-between" direction="row">
            <Caption variant={captionVariant}/>
            <Form/>
        </Stack>
    )
}

async function Caption(
    {
        variant = "h3"
    } : {
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    }
) {
    const translations = await getTranslations("feedbackForm");
    return (
        <Stack className="w-full h-full items-start gap-16">
            <Typography variant={variant}>{translations("title")}</Typography>
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