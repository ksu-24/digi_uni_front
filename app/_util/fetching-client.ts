"use client"

import useSWR from "swr";
import {getEnvVar} from "@/app/_util/env";

const API_URL = getEnvVar("NEXT_PUBLIC_API_URL");

export function useGet(url: string, options?: RequestInit, params?: any, condition: boolean = true) {
    return useSWR(() => condition ? `${API_URL}${url}?${Object.entries(params).map(entry =>
            typeof entry[1] === "boolean" ? entry[0] : `${entry[0]}=${entry[1]}`).join('&')}` : null,
        async (url: string) => {
            const res = await fetch(url, {
                credentials: 'include',
                ...options
            });
            return res.json();
        }, {suspense: true});
}