"use client"

import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_API_URL!.replace("host.docker.internal", "localhost")

export function useGet(url: string, options?: RequestInit, params?: any, condition?: boolean) {
    return useSWR(() => condition ? `${API_URL}${url}?${Object.entries(params).map(entry =>
            typeof entry[1] === "boolean" ? entry[0] : `${entry[0]}=${entry[1]}`).join('&')}` : null,
        async (url: string) => {
            const res = await fetch(url, options);
            return res.json();
        }, {suspense: true});
}