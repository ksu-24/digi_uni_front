
// if server api url not using https, may be problems with auth, but currently no such use cases
import {getEnvVar} from "@/app/_util/env";

const buildURL = (url: string) => `${typeof window === "undefined" ?
    getEnvVar("SERVER_API_URL") : getEnvVar("NEXT_PUBLIC_API_URL")!}${url}`;

export async function get(url: string, params?: any) {
    return await fetch(`${buildURL(url)}${params ? `?${Object.entries(params).map(entry => `${entry[0]}=${entry[1]}`).join('&')}` : ""}`, {
        cache: 'no-cache',
        credentials: 'include'
    });
}

export async function post(url: string, data: any | any[], headers?: HeadersInit) {
    return await fetch(`${buildURL(url)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        credentials: 'include',
        body: JSON.stringify(data)
    });
}

export async function patch(url: string, data: any | any[]) {
    return await fetch(`${buildURL(url)}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    });
}