"use client"

import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {Stack, Typography} from "@mui/material";
import ToolbarPlugin from "@/app/[locale]/(with-header)/news/editor/toolbar";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import themeObj from "@/app/_theme/theme-obj";
import {create} from "zustand";
import ClassnameTextNode, {
    $creatClassnameTextNode
} from "@/app/[locale]/(with-header)/news/editor/classname-text-node";
import {TextNode} from "lexical";
import HistoryPlugin, {useHistory} from "@/app/[locale]/(with-header)/news/editor/history-plugin";
import {AutoLinkNode} from "@lexical/link";
import {AutoLinkPlugin, createLinkMatcherWithRegExp} from "@lexical/react/LexicalAutoLinkPlugin";
import SaveStatePlugin from "@/app/[locale]/(with-header)/news/editor/save-state-plugin";
import {ClearEditorPlugin} from "@lexical/react/LexicalClearEditorPlugin";
import {useState} from "react";

const theme: InitialConfigType = {
    // @ts-ignore
    text: {
        italic: 'italic',
        underline: 'underline',
        strikethrough: 'line-through',
        underlineStrikethrough: 'underline-strike'
    },
    nodes: [ClassnameTextNode, AutoLinkNode, {
        replace: TextNode,
        with: (node) => {
            const n = $creatClassnameTextNode(node.getTextContent());
            n.__parent = node.__parent;
            return n;
        },
        withKlass: ClassnameTextNode
    }]
}

function onError(error: any) {
    console.error(error);
}

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

export default function Editor() {
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
        nodes: [HeadingNode, QuoteNode, ClassnameTextNode, AutoLinkNode, {
            replace: TextNode,
            with: (node: TextNode) => $creatClassnameTextNode(node.getTextContent()),
            withKlass: ClassnameTextNode
        }]
    };

    const className = useEditorClasses((state) => state.className);

    return (
        <Stack className="gap-6">
            <LexicalComposer initialConfig={initialConfig}>
                <HistoryPlugin/>
                {/*<SaveStatePlugin/>*/}
                <ClearEditorPlugin/>
                <AutoLinkPlugin matchers={[
                    createLinkMatcherWithRegExp(URL_MATCHER, (text) => {
                        return text.startsWith("www.") ? "https://" + text : text;
                    })
                ]}/>
                <ToolbarPlugin/>
                <RichTextPlugin
                    contentEditable={<ContentEditable className={"w-full h-fit min-h-dvh border-[1px] border-black p-4 " + className}
                                                      style={{
                                                          ...themeObj.typography.body1
                                                      }}/>}
                    placeholder={<Typography variant="body1">Enter some text...</Typography>}
                    ErrorBoundary={LexicalErrorBoundary}
                />
            </LexicalComposer>
        </Stack>
    );
}