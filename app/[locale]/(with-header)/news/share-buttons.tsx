'use client'

import { useEffect, useState } from 'react';
import { Stack, Typography } from "@mui/material";

export default function ShareButtons({ shareLabel }: { shareLabel: string }) {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentUrl)}`;
    const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(currentUrl)}`;

    return (
        <Stack className="py-[2.5dvw] mb-[2.5dvw] px-[3dvw] justify-between xs:!bg-themed-light-gray
        max-xs:gap-[22px] max-xs:py-[6dvw]
        max-md:mt-[12dvw]
        max-lg:!px-0
        3xl:p-[2dvw] 3xl:mb-[2dvw]
        " direction="row">
            <Typography variant="h5" letterSpacing={"-0.01rem"} lineHeight={1.4}>{shareLabel}:</Typography>
            <Stack className="gap-[2dvw] justify-start
            max-xs:gap-[7dvw]
            3xl:gap-[1dvw]
            " direction="row">
                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-200 hover:opacity-[0.8]">
                    <img src="/images/commons/X.svg" alt="X"/>
                </a>
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-200 hover:opacity-[0.8]">
                    <img src="/images/commons/facebook-2.svg" alt="Facebook"/>
                </a>
            </Stack>
        </Stack>
    )
}