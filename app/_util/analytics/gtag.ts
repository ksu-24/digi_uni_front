export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-YQXG71QKH1";

type GtagCommand = "js" | "config" | "event" | "set";

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (command: GtagCommand, ...args: unknown[]) => void;
    }
}

export function pageview(url: string) {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "page_view", {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title
    });
}

export function event(name: string, params?: Record<string, unknown>) {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", name, params ?? {});
}
