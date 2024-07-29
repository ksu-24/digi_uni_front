import FeedbackForm from "@/app/_util/components/feedback/feedback-form";
import {BaseWrapper} from "@/app/_util/components/base-wrapper";
import screens from "@/resources/screens.json";
import {Stack} from "@mui/material";
import DynamicBackwardsNav from "@/app/_util/components/dynamic-backwards-nav";

export default function ContactsPage() {
    return (
        <BaseWrapper className="
        3xl:!px-[7.5dvw]
        ">
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
                    <DynamicBackwardsNav/>
                    <FeedbackForm captionVariant="h1" className="!mt-6 pb-[12dvw] justify-start
                    2xl:pb-[10dvw]
                    3xl:pb-[7dvw]
                    " captionTextClassName="text-[43px]
                    xl:!text-[45px]
                    max-xs:!text-[33px]
                    max-md:text-[38px]
                    "/>
                </Stack>
            </Stack>
        </BaseWrapper>
    )
}