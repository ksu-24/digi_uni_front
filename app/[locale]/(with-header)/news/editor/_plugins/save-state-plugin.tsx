import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";

export default function SaveStatePlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        if (localStorage.getItem("editorState")) {
            editor.update(() => {
                editor.setEditorState(
                    editor.parseEditorState(localStorage.getItem("editorState") as string)
                );
            });
        }
    }, []);

    return <OnChangePlugin onChange={(editorState) => {
        localStorage.setItem("editorState", JSON.stringify(editorState));
    }}/>
}