import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./app/_localization/i18n.ts");

const API_URL_HOST = process.env.NEXT_PUBLIC_API_URL.replace("http://", "").replace("https://", "").split(":");
const SERVER_URL_HOST = process.env.SERVER_API_URL.replace("http://", "").replace("https://", "").split(":");

/** @type {import('next').NextConfig} */
const nextConfig = {
    // TODO: remove when app router build bugs are fixed
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: API_URL_HOST[0],
                port: API_URL_HOST[1],
            },
            {
                protocol: "https",
                hostname: API_URL_HOST[0],
                port: API_URL_HOST[1],
            },
            {
                protocol: "http",
                hostname: SERVER_URL_HOST[0],
                port: SERVER_URL_HOST[1],
            },
            {
                protocol: "https",
                hostname: SERVER_URL_HOST[0],
                port: SERVER_URL_HOST[1],
            },
        ]
    }
};

export default withNextIntl(nextConfig);
