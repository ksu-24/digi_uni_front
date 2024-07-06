"use client"

import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function useGet(url: string, options?: RequestInit, params?: any, condition?: boolean) {
    return useSWR(() => condition ? `${API_URL}${url}?${Object.entries(params).map(entry => `${entry[0]}=${entry[1]}`).join('&')}` : null, async (url: string) => {
        const res = await fetch(url, options);
        return res.json();
    }, { suspense: true });
}

export function usePost(url: string, options?: RequestInit, params?: any) {
    return useSWR(`${API_URL}${url}?${Object.entries(params).map(entry => `${entry[0]}=${entry[1]}`).join(',')}`, async (url: string) => {
        const res = await fetch(url, { ...options, method: 'POST' });
        return res.json();
    }, { suspense: true });
}