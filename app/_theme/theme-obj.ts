import colors from "@/resources/colors.json"
import {SvgIconTypeMap} from "@mui/material";
import {DefaultComponentProps} from "@mui/types";

export const headerFont = "IBM Plex Serif";
export const body1Font = "IBM Plex Mono";
export const body2Font = "Inter";

const themeObj = {
    palette: colors,
    typography: {
        // when changing media queries, also change in @/public.global.css
        h1: {
            fontFamily: headerFont,
            fontSize: 24,
            "@media (min-width:600px)": {
                fontSize: 28
            },
            "@media (min-width:960px)": {
                fontSize: 32
            },
            "@media (min-width:1280px)": {
                fontSize: 46
            },
            fontWeight: 500,
            lineHeight: 1.2,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.02rem"
        },
        // when changing media queries, also change in @/public.global.css
        h2: {
            fontFamily: headerFont,
            fontSize: 20,
            "@media (min-width:600px)": {
                fontSize: 24
            },
            "@media (min-width:960px)": {
                fontSize: 30
            },
            "@media (min-width:1280px)": {
                fontSize: 38
            },
            fontWeight: 500,
            lineHeight: 1.3,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.01rem"
        },
        // when changing media queries, also change in @/public.global.css
        h3: {
            fontFamily: headerFont,
            fontSize: 16,
            "@media (min-width:600px)": {
                fontSize: 20
            },
            "@media (min-width:960px)": {
                fontSize: 24
            },
            "@media (min-width:1280px)": {
                fontSize: 32
            },
            fontWeight: 500,
            lineHeight: 1.3,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.01rem"
        },
        h4: {
            fontFamily: headerFont,
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.01rem"
        },
        h5: {
            fontFamily: headerFont,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.03rem"
        },
        h6: {
            fontFamily: headerFont,
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.1,
            whiteSpace: "pre-wrap",
            letterSpacing: 0
        },
        body1: {
            fontFamily: body1Font,
            lineHeight: 1.5,
            fontSize: 18,
            fontWeight: 400,
            whiteSpace: "pre-wrap",
            letterSpacing: 0
        },
        body2: {
            fontFamily: body2Font,
            lineHeight: 1.5,
            fontSize: 16,
            whiteSpace: "pre-wrap",
            letterSpacing: 0
        },
        caption: {
            fontFamily: body1Font,
            fontSize: 14,
            whiteSpace: "pre-wrap",
            lineHeight: 1.1,
            letterSpacing: "-0.03rem"
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: body2Font,
                    borderRadius: Number.MAX_VALUE,
                    padding: "14px 32px 14px 32px",
                    textTransform: "capitalize",
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontFamily: body2Font,
                    fontSize: 16,
                    lineHeight: 1.4,
                    color: "black",
                    paddingLeft: 10,
                    "&.Mui-focused": {
                        paddingLeft: 0
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: body2Font,
                    fontSize: 16,
                    lineHeight: 1.4,
                    color: "black"
                }
            }
        },
    }
}

export default themeObj;

export const iconProps = {
    style: {
        fontSize: "1.67rem"
    }
} as DefaultComponentProps<SvgIconTypeMap<{}, "svg">>