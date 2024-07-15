import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./app/_localization/i18n.ts");

const API_URL_HOST = process.env.NEXT_PUBLIC_API_URL.replace("http://", "").replace("https://", "").split(":")[0];

/** @type {import('next').NextConfig} */
const nextConfig = {
    // TODO: remove when app router build bugs are fixed
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: [API_URL_HOST, API_URL_HOST.replace("host.docker.internal", "localhost")],
    }
};

export default withNextIntl(nextConfig);
