import {DOMExportOutput, EditorConfig, LexicalEditor, LexicalNode, SerializedTextNode, TextNode} from "lexical";
import {TextLevel} from "@/app/[locale]/(with-header)/admin/editor/preset-button";

export default class ClassnameTextNode extends TextNode {
    // first position is reserved for media class
    protected readonly __classList: string[] = [];

    public constructor(text: string, key?: string, _classList: string[] = []) {
        super(text, key);
        this.__classList.push(..._classList);
    }

    public get classList() {
        return this.__classList;
    }

    public set classList(value: string[]) {
        this.__classList.splice(0, this.__classList.length, ...value);
    }

    public static getType() {
        return "custom-text";
    }

    static clone(node: ClassnameTextNode) {
        return new ClassnameTextNode(node.getTextContent(), node.getKey(), node.__classList);
    }

    public static importJSON(json: SerializedClassnameTextNode): ClassnameTextNode {
        const node = super.importJSON(json) as ClassnameTextNode;
        node.__classList.push(...json._classList);
        return node;
    }

    /**
     * Add a media class of the given level to the node
     * @param level The level of the media class to add or null to remove media class
     */
    public setMediaClass(level: TextLevel | null) {
        if ((new RegExp(`(${Object.values(TextLevel).map(v => `(${v})`).join("|")})-media`).test(this.__classList[0]))) {
            this.__classList.splice(0, 1);
        }
        if (level) {
            this.__classList.splice(0, 0, `${level}-media`);
        }
    }

    public override updateDOM(prevNode: ClassnameTextNode, dom: HTMLElement, config: EditorConfig): boolean {
        dom.classList.remove(...prevNode.__classList);
        dom.classList.add(...this.__classList);
        return super.updateDOM(prevNode, dom, config);
    }

    public override createDOM(config: EditorConfig, editor?: LexicalEditor): HTMLElement {
        const result = super.createDOM(config, editor);
        result.classList.add(...this.__classList);
        return result;
    }

    public override isSimpleText(): boolean {
        return this.__mode == 0;
    }

    public override exportJSON(): SerializedClassnameTextNode {
        return {
            ...super.exportJSON(),
            type: ClassnameTextNode.getType(),
            _classList: this.__classList
        }
    }

    public override exportDOM(editor: LexicalEditor): DOMExportOutput {
        const domExport = super.exportDOM(editor) as ClassnameDOMExportOutput;
        domExport.element.classList.add(...this.__classList);
        return domExport;
    }


}

type ClassnameDOMExportOutput = DOMExportOutput & {
    element: HTMLElement;
}

export type SerializedClassnameTextNode = SerializedTextNode & {
    _classList: string[];
}

export function $isClassNameTextNode(node: LexicalNode | null): node is ClassnameTextNode {
    return node instanceof ClassnameTextNode;
}

export function $creatClassnameTextNode(text: string) {
    return new ClassnameTextNode(text);
}