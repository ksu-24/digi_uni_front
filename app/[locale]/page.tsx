"use client"

import {useTranslations} from "next-intl";

export default function Main() {
    const translations = useTranslations();
    return (
        <p>{translations("Hello")}</p>
    );
}