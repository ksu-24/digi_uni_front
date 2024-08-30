"use client"

import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {Skeleton, Stack, Tab, Tabs} from "@mui/material";
import ToolbarPlugin from "@/app/[locale]/(with-header)/admin/editor/toolbar";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import StyledQuoteNode, {
    $createStyledQuoteNode
} from "@/app/[locale]/(with-header)/admin/editor/_generic-nodes/styled-quote-node";
import themeObj from "@/app/_theme/theme-obj";
import {create} from "zustand";
import ClassnameTextNode, {
    $creatClassnameTextNode
} from "@/app/[locale]/(with-header)/admin/editor/_generic-nodes/classname-text-node";
import {TextNode} from "lexical";
import {AutoLinkNode} from "@lexical/link";
import {AutoLinkPlugin, createLinkMatcherWithRegExp} from "@lexical/react/LexicalAutoLinkPlugin";
import {ClearEditorPlugin} from "@lexical/react/LexicalClearEditorPlugin";
import ImagePlugin from "@/app/[locale]/(with-header)/admin/editor/_multimedia/image-plugin";
import ImageNode from "@/app/[locale]/(with-header)/admin/editor/_multimedia/image-node";
import SavePlugin from "@/app/[locale]/(with-header)/admin/editor/_plugins/save-plugin";
import SaveProgressPlugin from "@/app/[locale]/(with-header)/admin/editor/_plugins/save-state-plugin";
import PreviewForm from "@/app/[locale]/(with-header)/admin/editor/preview-form";
import ClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin";
import React, {useEffect} from "react";
import {locales} from "@/app/_localization/i18n";
import GalleryInput from "@/app/[locale]/(with-header)/admin/editor/gallery-input";
import {useLexicalIsTextContentEmpty} from "@lexical/react/useLexicalIsTextContentEmpty";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";

const theme: InitialConfigType = {
    // @ts-ignore
    text: {
        italic: 'italic',
        underline: 'underline',
        strikethrough: 'line-through',
        underlineStrikethrough: 'underline-strike'
    },
    link: "styled-autolink",
    nodes: [ClassnameTextNode, AutoLinkNode, ImageNode, QuoteNode, StyledQuoteNode, {
        replace: TextNode,
        with: (node) => {
            const n = $creatClassnameTextNode(node.getTextContent());
            n.__parent = node.__parent;
            return n;
        },
        withKlass: ClassnameTextNode
    }, {
        replace: QuoteNode,
        with: (node) => {
            const n = $createStyledQuoteNode();
            n.__parent = node.__parent;
            return n;
        },
        withKlass: StyledQuoteNode
    }]
}

function onError(error: any) {
    console.error(error);
}

export const COMMAND_PRIORITY = 1;

const URL_MATCHER =
    /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)/;

export type Localization = {
    preview: {
        title: string,
        image: string
    },
    gallery: (string | null)[],
    content: string
}

export const useEditorClasses = create<{
    className: string;
    addClass: (className: string) => void;
    removeClass: (className: string) => void;
}>((set, getState) => ({
    className: "",
    addClass: (className: string) => {
        if (getState().className.includes(className)) return;
        set((state) => ({className: state.className + " " + className}))
    },
    removeClass: (className: string) => set((state) => ({className: state.className.replace(className, "")}))
}));

const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [HeadingNode, QuoteNode, ClassnameTextNode, AutoLinkNode, ImageNode, StyledQuoteNode, {
        replace: TextNode,
        with: (node: TextNode) => $creatClassnameTextNode(node.getTextContent()),
        withKlass: ClassnameTextNode
    }, {
        replace: QuoteNode,
        with: () => $createStyledQuoteNode(),
        withKlass: StyledQuoteNode
    }]
};

export default function Editor(
    {
        initialState,
        id
    }: {
        initialState?: Map<typeof locales[number], Localization>,
        id?: number
    }
) {
    const className = useEditorClasses((state) => state.className);
    const [currentLocaleIdx, setCurrentLocaleIdx] = React.useState(0);
    const [galleries, setGalleries] =
        React.useState<Map<string, (string | null)[]>>(
            new Map(locales.map((locale) => [locale,
                initialState?.get(locale)?.gallery ?? (localStorage.getItem(`gallery-${locale}`) ?
                    JSON.parse(localStorage.getItem(`gallery-${locale}`)!) : [])]
            )));

    const [publications, setPublications] = React.useState(new Map<string, Localization>(
        locales.map((locale) =>
            [locale, {
                preview: {
                    title: initialState?.get(locale)?.preview.title ?? "",
                    image: initialState?.get(locale)?.preview.image ?? ""
                },
                gallery: galleries.get(locale)!,
                content: initialState?.get(locale)?.content ?? ""
            }]
        )));

    useEffect(() => {
        setPublications(new Map(locales.map((locale) =>
            [locale, {
                preview: {
                    title: initialState?.get(locale)?.preview.title ?? "",
                    image: initialState?.get(locale)?.preview.image ?? ""
                },
                gallery: galleries.get(locale)!,
                content: initialState?.get(locale)?.content ?? ""
            }]
        )));
    }, [galleries, initialState]);

    return <>
        <Tabs onChange={(_, value) => setCurrentLocaleIdx(value)} value={currentLocaleIdx}>
            {
                locales.map((locale) => (
                    <Tab key={locale} label={locale} aria-controls={`tab-${locale}`} id={`tab-${locale}`}/>
                ))
            }
        </Tabs>
        {
            locales.map((locale) => {
                return locale === locales[currentLocaleIdx] &&
                    <Stack className="gap-6 items-center mb-10 mt-4" role="tabpanel"
                           aria-labelledby={`tab-${locale}`} id={`tab-${locale}`} key={locale}>
                        <LexicalComposer initialConfig={{
                            ...initialConfig,
                            editorState: initialState?.get(locale)?.content
                        }}>
                            <HistoryPlugin/>
                            <SaveProgressPlugin key1={locale} setEditorContent={(content) => {
                                publications.get(locale)!.content = content
                            }} restoreOnFirstRender={initialState?.get(locale)?.content === undefined}/>
                            <ImagePlugin/>
                            <ClearEditorPlugin/>
                            <AutoLinkPlugin matchers={[
                                createLinkMatcherWithRegExp(URL_MATCHER, (text) => {
                                    return text.startsWith("www.") ? "https://" + text : text;
                                })]}
                            />
                            <ToolbarPlugin/>
                            <ClickableLinkPlugin/>
                            <RichTextPlugin
                                contentEditable={<ContentEditable
                                    contentEditable={true}
                                    className={"w-full h-fit min-h-dvh border-[1px] border-black p-4 quote-container " + className}
                                    style={{
                                        // @ts-ignore
                                        ...themeObj.typography.body1
                                    }}/>}
                                placeholder={<></>}
                                ErrorBoundary={LexicalErrorBoundary}
                            />
                            <GalleryInput
                                images={galleries.get(locale)!}
                                setImages={(images) => {
                                    setGalleries((galleries) => {
                                        if (images instanceof Array) {
                                            galleries.set(locale, images);
                                        } else {
                                            galleries.set(locale, images(galleries.get(locale)!));
                                        }
                                        try {
                                            localStorage.setItem(`gallery-${locale}`, JSON.stringify(galleries.get(locale)!));
                                        } catch (e) {
                                            console.log(e)
                                        }
                                        return new Map(galleries);
                                    })
                                }}
                            />
                            <PreviewForm key1={locale.toString()} setPreview={(preview) => {
                                publications.get(locale)!.preview = preview
                            }} initialState={{
                                title: initialState?.get(locale)?.preview.title,
                                image: initialState?.get(locale)?.preview.image,
                            }}/>
                            <SavePlugin localizations={publications}
                                        id={id}
                                        stateKeys={locales.map((_, idx) => idx.toString())}/>
                        </LexicalComposer>
                    </Stack>
            })
        }
    </>;
}

function PlaceholderPlugin() {
    const [editor] = useLexicalComposerContext();
    const isTextContentEmpty = useLexicalIsTextContentEmpty(editor);
    const [isLoaded, setIsLoaded] = React.useState(isTextContentEmpty);

    useEffect(() => {
        if (!isLoaded && !isTextContentEmpty) {
            setIsLoaded(true);
        }
    }, [isTextContentEmpty]);

    return !isLoaded && <Stack className="gap-6">
        {
            Array.from({length: 10}).map((_, idx) => (
                <React.Fragment key={idx}>
                    <Skeleton variant="text" width="100%"/>
                    <Skeleton variant="text" width="100%"/>
                    <Skeleton variant="text" width="100%"/>
                    <Skeleton variant="text" width={`${Math.round(Math.random() * 100)}%`}/>
                </React.Fragment>
            ))
        }
    </Stack>;
}

export function ReadOnlyEditor(
    {editorStateJson}: { editorStateJson: string }
) {
    const thisInitialConfig = {
        ...initialConfig,
        editorState: editorStateJson,
        editable: false
    }

    return (
        <LexicalComposer initialConfig={thisInitialConfig}>
            <RichTextPlugin
                contentEditable={<ContentEditable
                    contentEditable={false}
                    className={"w-full h-fit quote-container flex flex-col"}
                    style={{
                        // @ts-ignore
                        ...themeObj.typography.body1
                    }}/>}
                placeholder={<></>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <PlaceholderPlugin/>
        </LexicalComposer>
    )
}