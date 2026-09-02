import type {Metadata} from "next";
import {locales} from "@/app/_localization/i18n";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://digiuni.org").replace(/\/$/, "");

export const SITE_NAME = "DigiUni";

/**
 * Будує canonical-посилання та hreflang-альтернативи для сторінки.
 * @param locale поточна локаль
 * @param path шлях без префікса локалі, з провідним "/" (наприклад "/news/5")
 */
export function buildAlternates(locale: string, path: string): Metadata["alternates"] {
    const normalizedPath = path === "/" ? "" : path;
    return {
        canonical: `${SITE_URL}/${locale}${normalizedPath}`,
        languages: {
            ...Object.fromEntries(
                locales.map(l => [l, `${SITE_URL}/${l}${normalizedPath}`])
            ),
            "x-default": `${SITE_URL}/uk${normalizedPath}`
        }
    };
}

/**
 * Видобуває плейн-текст із JSON-стану Lexical-редактора (content новини),
 * щоб використати його як description для метатегів.
 */
export function extractTextFromEditorState(editorStateJson: string, maxLength: number = 200): string {
    try {
        const state = JSON.parse(editorStateJson);
        const parts: string[] = [];

        const walk = (node: any) => {
            if (!node || parts.join(" ").length > maxLength * 2) return;
            if (typeof node.text === "string") parts.push(node.text);
            if (Array.isArray(node.children)) node.children.forEach(walk);
        };
        walk(state?.root ?? state);

        const text = parts.join(" ").replace(/\s+/g, " ").trim();
        if (text.length <= maxLength) return text;
        return `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}…`;
    } catch {
        return "";
    }
}
