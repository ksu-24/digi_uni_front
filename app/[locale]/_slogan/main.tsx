import {Box, Stack} from "@mui/material";
import {TextAndFunded} from "@/app/[locale]/_slogan/text-and-funded";
import {DigiuniLoading} from "@/app/[locale]/_slogan/digiuni-loading";
import {Social} from "@/app/_util/components/social";

export default async function Main() {
    return (
        <Stack direction="row"
               className="items-center justify-center h-full w-full pt-[2%] px-[8dvw] xs:px-[12dvw] lg:px-0">
            <Stack direction="row"
                   className="items-center justify-stretch h-full w-full
                   bg-digipattern-secondary bg-no-repeat xs:ml-[3%] xs:pr-[4%]"
                   sx={{
                       backgroundPosition: "95% 50%",
                       backgroundSize: "33dvw auto"
                   }}>
                <TextAndFunded/>
                <DigiuniLoading/>
            </Stack>
            <Box className="hidden xs:block">
                <Social/>
            </Box>
        </Stack>
    );
}


