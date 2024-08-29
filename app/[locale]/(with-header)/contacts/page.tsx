import FeedbackForm from "@/app/_util/components/feedback/feedback-form";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import screens from "@/resources/screens.json";
import {Stack} from "@mui/material";
import Breadcrumbs from "@/app/_util/components/breadcrumbs";
import {locales} from "@/app/_localization/i18n";
import {unstable_setRequestLocale} from "next-intl/server";

export default function ContactsPage(
    {
        params
    }: {
        params: {
            locale: string
        }
    }
) {

    unstable_setRequestLocale(params.locale);

    return (
        <BaseWrapper className="3xl:!w-[60dvw]">
            <Stack className="w-full
            max-xs:gap-[4dvw]
            xl:pt-[12dvw] xl:pb-[4dvw]
            3xl:pt-[9dvw] 3xl:pb-[3dvw]
            " sx={{
                paddingTop: "13dvw",
                [`@media (max-width: ${screens.xl})`]: {
                    paddingTop: "24dvw"
                },
                [`@media (max-width: ${screens.md})`]: {
                    paddingTop: "18dvw",
                    paddingBottom: "16dvw"
                },
                [`@media (max-width: ${screens.xs})`]: {
                    paddingTop: "24dvw"
                },
            }}>
                <Stack className="
                max-xs:pt-[10dvw] max-xs:pb-[20dvw]
                ">
                    <Breadcrumbs/>
                    <FeedbackForm captionVariant="h1" className="!mt-6 pb-[12dvw] justify-start
                    2xl:pb-[10dvw]
                    3xl:pb-[7dvw] 3xl:w-[58dvw]
                    " captionTextClassName="text-[43px] tracking-[-0.01rem]
                    xl:!text-[45px]
                    max-xs:!text-[33px]
                    max-md:text-[38px]
                    "/>
                </Stack>
            </Stack>
        </BaseWrapper>
    )
}

export async function generateStaticParams() {
    return locales.map(locale => ({
        params: {
            locale
        }
    }));
}