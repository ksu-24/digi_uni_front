import {DefaultContainer} from "@/app/[locale]/_util/components/default-container";
import {SectionTitle} from "@/app/[locale]/_util/components/section-title";
import FeedbackForm from "@/app/[locale]/_util/components/feedback-form";

export default function Feedback() {
    return (
        <DefaultContainer classes="min-h-dvh bg-info pt-[16dvh]">
            <SectionTitle number={5} titleTranslationKey="main.feedback.enumerationCaption"/>
            <FeedbackForm/>
        </DefaultContainer>
    )
}