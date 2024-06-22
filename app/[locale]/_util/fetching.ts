
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

export async function get(url: string) {
    const response = await fetch(`${API_URL}${url}`);
    return response.json();
}