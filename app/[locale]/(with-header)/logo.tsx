import EnterAnimation from "@/app/_util/components/enter-animation";

export function Logo() {
    return (
        <EnterAnimation direction="right" offset={20} duration={500}>
            <img
                src="/images/header/digiuni.svg"
                alt="DigiUni"
                className="visible lg:invisible w-[19dvw]
                max-lg:w-auto
            "/>
        </EnterAnimation>
    );
}