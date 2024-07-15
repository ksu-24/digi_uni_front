"use client"

import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {Stack, Tab, Tabs} from "@mui/material";
import ToolbarPlugin from "@/app/[locale]/(with-header)/news/editor/toolbar";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import StyledQuoteNode, {
    $createStyledQuoteNode
} from "@/app/[locale]/(with-header)/news/editor/_generic-nodes/styled-quote-node";
import themeObj from "@/app/_theme/theme-obj";
import {create} from "zustand";
import ClassnameTextNode, {
    $creatClassnameTextNode
} from "@/app/[locale]/(with-header)/news/editor/_generic-nodes/classname-text-node";
import {TextNode} from "lexical";
import HistoryPlugin from "@/app/[locale]/(with-header)/news/editor/_plugins/history-plugin";
import {AutoLinkNode} from "@lexical/link";
import {AutoLinkPlugin, createLinkMatcherWithRegExp} from "@lexical/react/LexicalAutoLinkPlugin";
import {ClearEditorPlugin} from "@lexical/react/LexicalClearEditorPlugin";
import ImagePlugin from "@/app/[locale]/(with-header)/news/editor/_multimedia/image-plugin";
import ImageNode from "@/app/[locale]/(with-header)/news/editor/_multimedia/image-node";
import SavePlugin from "@/app/[locale]/(with-header)/news/editor/_plugins/save-plugin";
import SaveProgressPlugin from "@/app/[locale]/(with-header)/news/editor/_plugins/save-state-plugin";
import PreviewForm from "@/app/[locale]/(with-header)/news/editor/preview-form";
import ClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin";
import React from "react";
import {locales} from "@/app/_localization/i18n";

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

export default function Editor() {
    const className = useEditorClasses((state) => state.className);
    const [currentLocaleIdx, setCurrentLocaleIdx] = React.useState(0);

    const publicationsRef = React.useRef(new Map<string, {
        preview: {
            title: string,
            summary: string,
            image: string
        },
        content: string
    }>(locales.map((locale) =>
        [locale, {
            preview: {
                title: "",
                summary: "",
                image: ""
            },
            content: ""
        }]
    )));

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
                    <Stack className="gap-6 items-center my-10" component="form" role="tabpanel"
                           aria-labelledby={`tab-${locale}`} id={`tab-${locale}`} key={locale}>
                        <LexicalComposer initialConfig={initialConfig}>
                            <HistoryPlugin/>
                            <SaveProgressPlugin key1={locale} setEditorContent={(content) => {
                                publicationsRef.current.get(locale)!.content = content
                            }}/>
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
                            <PreviewForm key1={locale.toString()} setPreview={(preview) => {
                                publicationsRef.current.get(locale)!.preview = preview
                            }}/>
                            <SavePlugin localizations={publicationsRef.current}
                                        stateKeys={locales.map((_, idx) => idx.toString())}/>
                        </LexicalComposer>
                    </Stack>
            })
        }
    </>;
}

export function ReadOnlyEditor(
    {editorStateJson} : {editorStateJson: string}
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
                    className={"w-full h-fit min-h-dvh quote-container"}
                    style={{
                        // @ts-ignore
                        ...themeObj.typography.body1
                    }}/>}
                placeholder={<></>}
                ErrorBoundary={LexicalErrorBoundary}
            />
        </LexicalComposer>
    )
}