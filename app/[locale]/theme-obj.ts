import colors from "@/resources/colors.json"

const headerFont = "IBM Plex Serif";
const body1Font = "IBM Plex Mono";
const body2Font = "Inter";

const themeObj = {
    palette: colors,
    typography: {
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
            lineHeight: 1.2
        },
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
            lineHeight: 1.3
        },
        h3: {
            fontFamily: headerFont,
            fontSize: 16,
            "@media (min-width:600px)": {
                fontSize: 20,
                lineHeight: "36px"
            },
            "@media (min-width:960px)": {
                fontSize: 24,
                lineHeight: "40px"
            },
            "@media (min-width:1280px)": {
                fontSize: 32,
                lineHeight: "45px"
            },
            fontWeight: 500,
            lineHeight: 1.3
        },
        h4: {
            fontFamily: headerFont,
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.4
        },
        h5: {
            fontFamily: headerFont,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.4
        },
        h6: {
            fontFamily: headerFont,
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.1
        },
        body1: {
            fontFamily: body1Font,
            lineHeight: 1.5,
            fontSize: 18,
            fontWeight: 400
        },
        body2: {
            fontFamily: body2Font,
            lineHeight: 1.5,
            fontSize: 16
        },
        caption: {
            fontFamily: body2Font,
        }
    }
}

export default themeObj;