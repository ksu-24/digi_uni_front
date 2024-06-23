import {Typography, TypographyProps} from "@mui/material";

export default function Timestamp(
    {
        date,
        format,
        textProps
    }: {
        date: Date | string,
        format?: Intl.DateTimeFormatOptions,
        textProps?: TypographyProps
    }) {
    format = format || {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
    return (
        <time dateTime={date.toString()}>
            <Typography variant="body1" fontSize="14px"
                        lineHeight="15px" {...textProps}>{new Intl.DateTimeFormat('en-GB', format).format(new Date(date))}</Typography>
        </time>
    )
}