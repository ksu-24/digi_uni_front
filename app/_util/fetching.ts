const buildURL = (url: string) => `${typeof window === "undefined" ?
    process.env.SERVER_API_URL : process.env.NEXT_PUBLIC_API_URL!}${url}`;

export async function get(url: string, params?: any) {
    return await fetch(`${buildURL(url)}${params ? `?${Object.entries(params).map(entry => `${entry[0]}=${entry[1]}`).join('&')}` : ""}`, {
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            ...authHeader()
        }
    });
}

export async function post(url: string, data: any | any[], headers?: HeadersInit) {
    return await fetch(`${buildURL(url)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
            ...authHeader()
        },
        credentials: 'include',
        body: JSON.stringify(data)
    });
}

export async function patch(url: string, data: any | any[]) {
    return await fetch(`${buildURL(url)}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            ...authHeader()
        },
        credentials: 'include',
        body: JSON.stringify(data)
    });
}

export async function del(url: string) {
    return await fetch(`${buildURL(url)}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            ...authHeader()
        }
    });
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
