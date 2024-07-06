import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {Button, Typography} from "@mui/material";
import {post} from "@/app/_util/fetching";
import {$generateHtmlFromNodes} from "@lexical/html";
import {useRouter} from "@/app/_localization/navigation";

export default function SavePlugin() {
    const [editor] = useLexicalComposerContext();
    const router = useRouter();

    return (
        <Button className="w-1/5 text-black hover:text-white" variant="contained" onClick={() => {
            editor.update(async () => {
                console.log($generateHtmlFromNodes(editor).replaceAll(/<\/?((html)|(body)|(head))>/g, ""))
                const response = await post("/publications?type=NEWS", {
                    language: "UK",
                    preview: {
                        topic: "Topic",
                        description: "123",
                        image: null
                    },
                    content: $generateHtmlFromNodes(editor).replaceAll(/<\/?((html)|(body)|(head))>/g, "")
                });
                if (!response.ok) {
                    console.error(response.status + " " + await response.text());
                }
                localStorage.removeItem("editorState");
                const id = (await response.json()).id;
                router.push("/news/" + id);
            });
        }}>
            <Typography>Save</Typography>
        </Button>
    )
}