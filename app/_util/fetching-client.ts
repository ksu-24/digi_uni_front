"use client"

import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export function useGet(url: string, options?: RequestInit, params?: any, condition: boolean = true) {
    return useSWR(() => condition ? `${API_URL}${url}?${Object.entries(params).map(entry =>
            typeof entry[1] === "boolean" ? entry[0] : `${entry[0]}=${entry[1]}`).join('&')}` : null,
        async (url: string) => {
            const res = await fetch(url, {
                credentials: 'include',
                ...options,
                ...authHeader()
            });
            return res.json();
        }, {suspense: true});
}

function authHeader(): HeadersInit {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
            return {Authorization: `Bearer ${token.split(";")[0]}`};
        }
    }
    return {};
}