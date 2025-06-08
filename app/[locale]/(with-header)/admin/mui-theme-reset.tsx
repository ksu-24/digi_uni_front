import {ThemeProvider} from "@mui/system";
import React from "react";

import {createTheme} from "@mui/material/styles";
import themeObj, {body2Font} from "@/app/_theme/theme-obj";

const resetInputsTheme = createTheme({
    ...themeObj,
    components: {
        ...themeObj.components,
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: body2Font,
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    fontFamily: body2Font,
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontFamily: body2Font,
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontFamily: body2Font,
                }
            }
        }
    },
});

export function MuiInputThemeReset(
    {
        children,
    }: {
        children: React.ReactNode;
    }
) {
    return (
        <ThemeProvider theme={resetInputsTheme}>
            {children}
        </ThemeProvider>
    );
}