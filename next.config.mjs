import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./app/_localization/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    // TODO: remove when app router build bugs are fixed
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default withNextIntl(nextConfig);
