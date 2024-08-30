import {isLoggedIn as isLoggedInClient} from "@/app/_util/auth-client";

export function isLoggedIn() {
    return document.cookie.includes("BearerTail") || isLoggedInClient();
}