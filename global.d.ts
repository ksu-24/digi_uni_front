import en from '@/resources/dicts/en.json';

type Messages = typeof en;

declare global {
    interface IntlMessages extends Messages {}
}