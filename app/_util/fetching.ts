const API_URL = process.env.NEXT_PUBLIC_API_URL!;

const buildURL = (url: string) => `${typeof window === "undefined" ? API_URL : API_URL.replace("host.docker.internal", "localhost")}${url}`;

export async function get(url: string, params?: any) {
    return await fetch(`${buildURL(url)}${params ? `?${Object.entries(params).map(entry => `${entry[0]}=${entry[1]}`).join('&')}` : ""}`, {
        cache: 'no-cache'
    });
}

export async function post(url: string, data: any | any[]) {
    return await fetch(`${buildURL(url)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}