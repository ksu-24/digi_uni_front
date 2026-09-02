'use client'

import Script from "next/script";
import {useEffect, useRef} from "react";
import {usePathname} from "next/navigation";
import {GA_MEASUREMENT_ID, pageview} from "@/app/_util/analytics/gtag";

/**
 * Google tag (gtag.js) + відстеження переходів між сторінками.
 * Початковий page_view надсилає сам gtag('config', ...), а наступні
 * (client-side навігація в App Router не перезавантажує сторінку,
 * тому gtag сам їх не бачить) — ефект нижче.
 */
export default function GoogleAnalytics() {
    const pathname = usePathname();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        pageview(pathname);
    }, [pathname]);

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>
        </>
    );
}
