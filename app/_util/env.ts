
export const getEnvVar = (envVar: string) => {
    // TODO: remove this when sources are transferred to uni
    if (envVar === "NEXT_PUBLIC_API_URL") {
        return "http://localhost:8080";
    }
    // @ts-ignore
    return process["e" + "n" + "v"][envVar];
}