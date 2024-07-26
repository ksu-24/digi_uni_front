import React, {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";

export default function SaveStatePlugin(
    {
        key1,
        setEditorContent,
        restoreOnFirstRender
    } : {
        key1: string,
        setEditorContent: (content: string) => void,
        restoreOnFirstRender: boolean
    }
) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        if (localStorage.getItem(`editorState-${key1}`) && restoreOnFirstRender) {
            editor.update(() => {
                const state = editor.parseEditorState(localStorage.getItem(`editorState-${key1}`) as string);
                editor.setEditorState(state);
                setEditorContent(JSON.stringify(editor.getEditorState()));
            });
        }
    }, []);

    return <OnChangePlugin onChange={(editorState) => {
        localStorage.setItem(`editorState-${key1}`, JSON.stringify(editorState));
        setEditorContent(JSON.stringify(editorState));
    }}/>
}