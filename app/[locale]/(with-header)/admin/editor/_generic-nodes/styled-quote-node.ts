import {$createQuoteNode, QuoteNode} from "@lexical/rich-text";
import {EditorConfig, NodeKey, SerializedElementNode} from "lexical";

export default class StyledQuoteNode extends QuoteNode {

    constructor(key?: NodeKey) {
        super(key);
    }

    public static getType() {
        return "styled-quote";
    }

    static importJSON(json: SerializedElementNode): StyledQuoteNode {
        const node = $createStyledQuoteNode();
        node.setFormat(json.format);
        node.setIndent(json.indent);
        node.setDirection(json.direction);
        return node;
    }

    static clone(node: StyledQuoteNode) {
        const result = $createQuoteNode();
        result.setIndent(node.getIndent());
        result.__format = node.getFormat();
        result.setDirection(node.getDirection());
        result.getChildren().push(...node.getChildren());
        return result;
    }

    createDOM(config: EditorConfig): HTMLElement {
        const base = super.createDOM(config);
        base.classList.add("quote", "quote-border");
        return base;
    }

    updateDOM(prevNode: QuoteNode, dom: HTMLElement): boolean {
        if (dom.style.border || dom.style.borderLeft || (dom.firstElementChild?.hasAttribute("style")
            && (dom.firstElementChild as HTMLElement).style.borderLeft || (dom.firstElementChild as HTMLElement).style.border)) {
            dom.classList.remove("quote-border");
        }
        return super.updateDOM(prevNode, dom);
    }

    exportJSON(): SerializedElementNode {
        return {
            ...super.exportJSON(),
            type: StyledQuoteNode.getType()
        }
    }
}

export function $createStyledQuoteNode() {
    return new StyledQuoteNode();
}