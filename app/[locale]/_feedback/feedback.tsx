import {BaseWrapper, ContentWrapper} from "@/app/_util/components/wrappers";
import FeedbackForm from "@/app/_util/components/feedback/feedback-form";
import {SectionTitle} from "@/app/_util/components/text-templates";

export default function Feedback() {
    return (
        <BaseWrapper className={`bg-info`} withPadding>
            <ContentWrapper className="
            max-lg:gap-[4.5dvw]
            ">
                <SectionTitle number={5} titleTranslationKey="main.feedback.enumerationCaption"/>
                <FeedbackForm className="mt-6"/>
            </ContentWrapper>
        </BaseWrapper>
    )
}