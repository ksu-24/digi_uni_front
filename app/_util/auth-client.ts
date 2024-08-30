"use client"

export function isLoggedIn() {
    return process.env.NODE_ENV === "development" && localStorage.getItem("token") !== null
    || document.cookie.includes("BearerTail");
}