import {Stack} from "@mui/material";
import {TextAndFunded} from "@/app/[locale]/_slogan/text-and-funded";
import {DigiuniLoading} from "@/app/[locale]/_slogan/digiuni-loading";
import {Social} from "@/app/[locale]/_slogan/social";

export default async function Main() {
    return (
        <Stack direction="row"
               className="items-center justify-center h-full w-full pt-[2%]">
            <Stack direction="row"
                   className="items-center justify-around h-full w-full
                   bg-digipattern-secondary bg-contain bg-no-repeat ml-[3%] pr-[4%] lg:gap-[2%]"
                   sx={{
                       backgroundPosition: "95% 95%"
                   }}>
                <TextAndFunded/>
                <DigiuniLoading/>
            </Stack>
            <Social/>
        </Stack>
    );
}


