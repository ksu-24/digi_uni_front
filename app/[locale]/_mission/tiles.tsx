import {Box} from "@mui/material";

export default function Tiles() {
    return (
        <Box className="px-[2dvw] pt-[1dvw] pb-[6dvw]">
            <img src="/images/main/about/digipattern-info.svg" alt="tiles" width="100%" className="max-xs:hidden"/>
            <img src="/images/main/about/digipattern-info-xs.svg" alt="tiles" width="100%"
                 className="hidden max-xs:block"/>
        </Box>
    )
}