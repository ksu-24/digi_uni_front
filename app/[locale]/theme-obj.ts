const headerFont = "IBM Plex Serif";
const body1Font = "IBM Plex Mono";
const body2Font = "Inter";

const themeObj = {
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#FEFFE6"
        },
        info: {
            main: "#D5DAFF"
        }
    },
    typography: {
        h1: {
            fontFamily: headerFont
        },
        h2: {
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
            fontWeight: 500
        },
        h3: {
            fontFamily: headerFont,
            fontSize: 32,
            fontWeight: 500
        },
        h4: {
            fontFamily: headerFont
        },
        h5: {
            fontFamily: headerFont,
            fontSize: 24,
            fontWeight: 500
        },
        h6: {
            fontFamily: headerFont
        },
        body1: {
            fontFamily: body1Font,
            lineHeight: "24px",
            fontSize: 18,
            fontWeight: 400
        },
        body2: {
            fontFamily: body2Font,
            lineHeight: "24px",
            fontSize: 16
        },
        caption: {
            fontFamily: body2Font,
        }
    }
}

export default themeObj;