import {Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {Social} from "@/app/_util/components/social";
import Form from "@/app/_util/components/feedback/form";
import EnterAnimation from "@/app/_util/components/enter-animation";


export default async function FeedbackForm(
    {
        captionVariant,
        captionTextClassName = "",
        captionContainerClassName = "",
        className = ""
    }: {
        captionVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
        className?: string,
        captionTextClassName?: string,
        captionContainerClassName?: string
    }
) {
    return (
        <Stack className={className + ` h-full max-w-full lg:!flex-row gap-[4%] w-[84dvw] justify-between items-start
        max-xs:!gap-[24dvw]
        max-lg:w-full max-lg:gap-[10dvw]
        xl:gap-[6%] xl:w-[80dvw]
        3xl:gap-[10%] 3xl:-mt-[0.7rem]
        `
        }>
            <Caption variant={captionVariant} textClassName={captionTextClassName}
                     containerClassName={captionContainerClassName}/>
            <Form/>
        </Stack>
    )
}

async function Caption(
    {
        variant = "h2",
        textClassName = "",
        containerClassName = ""
    }: {
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
        textClassName?: string,
        containerClassName?: string
    }
) {
    const translations = await getTranslations("feedbackForm");
    return (
        <Stack className={containerClassName + ` h-full w-[65%] items-start justify-start gap-[5dvw]
        max-xs:!gap-[9dvw]
        max-md:!w-full
        max-lg:w-[92%] max-lg:gap-[8dvw]
        xl:w-[54%] xl:max-w-[50dvw]
        2xl:w-[50%] 2xl:max-w-[44dvw]
        3xl:gap-[2dvw]
        `}>
            <EnterAnimation direction="up" offset={20} fadeDuration={400} duration={1000}>
                <Typography variant={variant} className={textClassName + ` text-[38px]
                max-lg:text-[30px]
                `
                }>{translations("title")}</Typography>
            </EnterAnimation>
            <EnterAnimation delay={200} fadeDuration={400} duration={1000} offset={20} direction="up">
                <Stack className="gap-10 items-start">
                    <OrganizerInfo name={translations("kseniia")} email="email_name@kpi.kharkov.ua"/>
                    <Social direction="row" size={24} className="!gap-5"/>
                </Stack>
            </EnterAnimation>
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
        <Stack className="gap-1.5">
            <Typography variant="body2" fontWeight={500} letterSpacing="initial" className="
            max-xs:!text-[19px]
            ">{name}</Typography>
            <Typography variant="body2" letterSpacing="initial"
                        className="!text-themed-darker-gray">{email}</Typography>
        </Stack>
    )
}