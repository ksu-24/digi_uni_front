import Title from "@/app/[locale]/about/title";
import {unstable_setRequestLocale} from "next-intl/server";
import AboutProject from "@/app/[locale]/about/about-project";
import Goal from "@/app/[locale]/about/goal";

export default async function AboutPage(
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
        <>
            <Title/>
            <section id="about-project">
                <AboutProject/>
            </section>
            <section id="goal">
                <Goal/>
            </section>
        </>
    )
}