import colors from "@/resources/colors.json"
import {Breakpoint} from "@mui/material";
import screens from "@/resources/screens.json";

export const headerFont = "IBM Plex Serif";
export const body1Font = "IBM Plex Mono";
export const body2Font = "Inter";
const color = colors.gray.darkest;

const themeObj = {
    palette: colors,
    typography: {
        h1: {
            fontFamily: headerFont,
            fontSize: "9dvw",
            fontWeight: 600,
            lineHeight: 1.2,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.02rem",

            [`@media (min-width: ${screens.sm})`]: {
                fontSize: 36
            },
            [`@media (min-width: ${screens.md})`]: {
                fontSize: 46
            },
            [`@media (min-width: ${screens.lg})`]: {
                fontSize: 49
            },
            color
        },
        h2: {
            fontFamily: headerFont,
            fontSize: 30,
            fontWeight: 500,
            lineHeight: 1.3,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.01rem",

            [`@media (min-width: ${screens.sm})`]: {
                fontSize: 32
            },
            [`@media (m-width: ${screens.md})`]: {
                fontSize: 34
            },
            [`@media (min-width: ${screens.lg})`]: {
                fontSize: 36
            },
            color
        },
        h3: {
            fontFamily: headerFont,
            fontSize: 22,
            fontWeight: 500,
            lineHeight: 1.3,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.01rem",

            [`@media (min-width: ${screens.lg})`]: {
                fontSize: 32
            },
            color
        },
        h4: {
            fontFamily: headerFont,
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.01rem",
            color
        },
        h5: {
            fontFamily: headerFont,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.03rem",
            color
        },
        h6: {
            fontFamily: headerFont,
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.1,
            whiteSpace: "pre-wrap",
            letterSpacing: 0,
            color
        },
        body1: {
            fontFamily: body1Font,
            lineHeight: 1.5,
            fontSize: 18,
            fontWeight: 400,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.03rem",
        },
        body2: {
            fontFamily: body2Font,
            lineHeight: 1.5,
            fontSize: 16,
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.03rem",
            color
        },
        caption: {
            fontFamily: body1Font,
            fontSize: 14,
            whiteSpace: "pre-wrap",
            lineHeight: 1.1,
            letterSpacing: "-0.03rem",
            color
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
                    color: (Number(`0x1${colors.primary.main}`) ^ 0xFFFFFF).toString(16).substring(1).toUpperCase()
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
                    marginTop: "0 !important",
                    lineHeight: 1.4,
                    color: "black",
                    paddingLeft: "0.75rem !important",
                    paddingRight: "0.75rem !important",
                    paddingTop: "0.5rem !important",
                    paddingBottom: "calc(0.5rem + 0.4dvw) !important",
                    "&::after": {
                        borderColor: colors.blue + " !important",
                        borderBottomWidth: "1px !important"
                    },
                    '& *': {
                        padding: "0 !important"
                    },
                    [`@media (max-width: ${screens.xs})`]: {
                        paddingLeft: "0.5rem !important",
                        paddingRight: "0.5rem !important",
                    }
                },
                multiline: {
                    paddingBottom: "calc(0.5rem + 0.4dvw + 10px) !important",
                    height: "auto !important"
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    paddingTop: "0 !important",
                    lineHeight: "1.42857 !important",
                    letterSpacing: "normal !important",
                    "& *": {
                        lineHeight: "1.42857 !important",
                        letterSpacing: "normal !important",
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                fontSize: "22px !important",
                asterisk: {
                    display: "none"
                },
                root: {
                    paddingLeft: "0.75rem !important",
                    paddingRight: "0.75rem !important",
                    paddingTop: "0.5rem !important",
                    paddingBottom: "calc(0.5rem + 0.4dvw) !important",
                    [`@media (max-width: ${screens.xs})`]: {
                        paddingLeft: "0.5rem !important",
                        paddingRight: "0.5rem !important",
                    },
                    "&::after": {
                        content: "'(optional)'",
                        marginLeft: "0.5rem",
                        transition: "opacity 0.25s ease-in-out, width 0s 0.25s ease-in-out",
                    },
                    transform: "none !important",
                    "&.Mui-required": {
                        "&::after": {
                            opacity: 0,
                            width: 0
                        }
                    },
                    "&.MuiFormLabel-filled": {
                        display: "none !important"
                    },
                    "&.Mui-focused": {
                        "&::after": {
                            opacity: 0,
                            width: 0
                        }
                    }
                }
            }
        }
    },
    breakpoints: {
        keys: Object.keys(screens) as Breakpoint[],
        values: {
            ...Object.entries(screens).map(([key, value]) => ({
                [key as Breakpoint]: parseInt(value)
            })).reduce((acc, val) => ({...acc, ...val}), {}) as Record<Breakpoint, number>
        }
    }
}


export default themeObj;


declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        "2xl": true;
        "3xl": true;
        "4xl": true;
    }
}