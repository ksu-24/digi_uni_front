import createMiddleware from 'next-intl/middleware';
import {locales} from "@/app/_localization/i18n";

export default createMiddleware({
    locales: locales,
    defaultLocale: 'uk'
});



export const config = {
    matcher:  ["/((?!api|public|.*\\..*|_next|favicon.ico|robots.txt).*)"]
};