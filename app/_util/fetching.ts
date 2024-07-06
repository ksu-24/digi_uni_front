const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function get(url: string, params?: any) {
    return await fetch(`${API_URL}${url}${params ? `?${Object.entries(params).map(entry => `${entry[0]}=${entry[1]}`).join('&')}` : ""}`);
}

export async function post(url: string, data: any) {
    return await fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}