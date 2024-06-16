import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales} from "@/app/_localization/i18n";

export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation({locales});