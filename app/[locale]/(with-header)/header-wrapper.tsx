'use client';

import {usePathname} from "@/app/_localization/navigation";
import Header from "@/app/[locale]/(with-header)/header";

export default function HeaderWrapper() {
    const pathname = usePathname();
    const isAboutPage = pathname.includes('/about');
    const isNewsOrContactsPage = pathname.includes('/news') || pathname.includes('/contacts');

    return <Header hideFundedByEU={isAboutPage} animateFundedByEU={isNewsOrContactsPage}/>;
}
