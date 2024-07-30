import {getTranslations} from "next-intl/server";
import {Stack, Typography} from "@mui/material";
import React from "react";
import {ContentWrapper} from "@/app/_util/components/wrappers";


function SectionHeading(props: { children: React.ReactNode }) {
    return <Typography variant="h2" className="max-w-[70dvw]
             max-xs:max-w-[88dvw]
             max-md:font-[2rem]
             max-lg:max-w-[76dvw]
             xl:max-w-[53dvw]
             2xl:text-[38px] 2xl:max-w-[46dvw]
             3xl:max-w-[40dvw]
             ">
        {props.children}
    </Typography>;
}

export default async function Text() {
    const translations = await getTranslations("main.about");
    return (
        <ContentWrapper className="max-w-[84dvw] max-lg:max-w-[90dvw] xl:max-w-[80dvw] 3xl:max-w-[58dvw]">
            <SectionHeading>
                {translations("title")}
            </SectionHeading>
            <Stack className="w-[95%]
                xl:w-[88%]
                2xl:w-[86%]
                gap-[2dvw]
                ">
                <Typography variant="body2" className="whitespace-pre-wrap">{translations("content")}</Typography>
            </Stack>
        </ContentWrapper>
    );
}