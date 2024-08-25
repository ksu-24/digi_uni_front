import {isLoggedIn as isLoggedInClient} from "@/app/_util/components/auth-client";

export function isLoggedIn() {
    return document.cookie.includes("BearerTail") || isLoggedInClient();
}