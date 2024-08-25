"use client"

import {isLoggedIn} from "@/app/_util/auth";
import Login from "@/app/[locale]/(with-header)/news/editor/login";

export default function AuthOnly({children}: { children: React.ReactNode }) {
    if (!isLoggedIn()) {
        return <Login/>;
    }
    return <>{children}</>;
}