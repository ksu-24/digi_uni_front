import EnterAnimation from "@/app/_util/components/enter-animation";

export function Logo(
    {
        className = ""
    }: {
        className?: string
    }
) {
    return (
        <EnterAnimation direction="right" offset={20} duration={500}>
            <img
                src="/images/commons/digiuni.svg"
                alt="DigiUni"
                className={className + ` w-[15dvw]
                max-xs:!w-[44dvw]
                max-md:!w-[26dvw]
                max-lg:w-[23dvw]
                xl:w-[13dvw]
                3xl:w-[9dvw]
            `}/>
        </EnterAnimation>
    );
}