import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./app/_localization/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
