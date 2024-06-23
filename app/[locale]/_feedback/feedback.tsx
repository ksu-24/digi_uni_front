import {DefaultContainer} from "@/app/_util/components/default-container";
import {SectionTitle} from "@/app/_util/components/section-title";
import FeedbackForm from "@/app/_util/components/feedback-form";

export default function Feedback() {
    return (
        <DefaultContainer className="min-h-dvh bg-info pt-[16dvh]">
            <SectionTitle number={5} titleTranslationKey="main.feedback.enumerationCaption"/>
            <FeedbackForm/>
        </DefaultContainer>
    )
}