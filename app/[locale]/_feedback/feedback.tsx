import {DefaultWrapper} from "@/app/_util/components/default-wrapper";
import {SectionTitle} from "@/app/_util/components/section-title";
import FeedbackForm from "@/app/_util/components/feedback/feedback-form";

export default function Feedback() {
    return (
        <DefaultWrapper className={`min-h-dvh bg-info`} withPadding>
            <SectionTitle number={5} titleTranslationKey="main.feedback.enumerationCaption"/>
            <FeedbackForm/>
        </DefaultWrapper>
    )
}