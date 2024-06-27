"use client"

import useSWR from "swr";

export function useGet(url: string, options?: RequestInit, params?: any) {
    return useSWR(`${url}?${Object.entries(params).map(entry => `${entry[0]}=${entry[1]}`).join(',')}`, async (url) => {
        const res = await fetch(url, options);
        return res.json();
    }, { suspense: true });
}