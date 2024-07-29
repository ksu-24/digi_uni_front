import {List} from "@mui/material";

export function ListBase(
    {
        children,
    }: {
        children?: React.ReactNode
    }
) {
    return (
        <List className="flex flex-col !p-0 gap-[1.5dvw]
                    max-xs:!gap-[5dvw]
                    max-lg:gap-[2dvw]
                    3xl:gap-[1dvw]
                    ">
            {children}
        </List>
    )
}