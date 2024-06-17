import {Stack} from "@mui/material";
import Text from "@/app/[locale]/_erasmus/text";
import Cards from "@/app/[locale]/_erasmus/cards";

export default async function Erasmus() {
    return (
        <Stack className="gap-[10%] w-full">
            <Text />
            <Cards/>
        </Stack>
    )
}