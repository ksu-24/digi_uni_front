import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$wrapNodeInElement, mergeRegister} from "@lexical/utils";
import ImageNode, {
    $createImageNode,
    ImagePayload
} from "@/app/[locale]/(with-header)/admin/editor/_multimedia/image-node";
import {$createParagraphNode, $insertNodes, $isRootOrShadowRoot, createCommand, LexicalCommand} from "lexical";
import {COMMAND_PRIORITY} from "@/app/[locale]/(with-header)/admin/editor/editor";

export type InsertImagePayload = Readonly<ImagePayload>;

export const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload> = createCommand(
    "INSERT_IMAGE_COMMAND"
);

export default function ImagePlugin() {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        if (!editor.hasNodes([ImageNode])) {
            throw new Error("ImagesPlugin: ImageNode not registered on editor");
        }

        return mergeRegister(
            editor.registerCommand<InsertImagePayload>(
                INSERT_IMAGE_COMMAND,
                (payload) => {
                    const imageNode = $createImageNode(payload);
                    $insertNodes([imageNode]);
                    if ($isRootOrShadowRoot(imageNode.getParentOrThrow())) {
                        $wrapNodeInElement(imageNode, $createParagraphNode).selectEnd();
                    }

                    return true;
                },
                COMMAND_PRIORITY
            )
        );
    }, [editor]);

    return null;
}