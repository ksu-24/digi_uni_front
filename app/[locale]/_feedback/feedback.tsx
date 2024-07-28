import {BaseWrapper} from "@/app/_util/components/base-wrapper";
import {SectionTitle} from "@/app/_util/components/section-title";
import FeedbackForm from "@/app/_util/components/feedback/feedback-form";
import {ContentWrapper} from "@/app/[locale]/_about (main)/erasmus";

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