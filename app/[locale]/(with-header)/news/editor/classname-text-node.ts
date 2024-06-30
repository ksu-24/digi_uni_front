import {DOMExportOutput, EditorConfig, LexicalEditor, LexicalNode, SerializedTextNode, TextNode} from "lexical";
import {TextLevel} from "@/app/[locale]/(with-header)/news/editor/preset-button";

export default class ClassnameTextNode extends TextNode {
    // first position is reserved for media class
    private readonly _classList: string[] = [];

    constructor(text: string) {
        super(text);
    }

    static getType() {
        return "custom-text";
    }

    /**
     * Add a media class of the given level to the node
     * @param level The level of the media class to add or null to remove media class
     */
    setMediaClass(level: TextLevel | null) {
        // debugger
        if ((new RegExp(`(${Object.values(TextLevel).map(v => `(${v})`).join("|")})-media`).test(this._classList[0]))) {
            this._classList.splice(0, 1);
        }
        if (level) {
            this._classList.splice(0, 0, `${level}-media`);
        }
    }


    static clone(node: ClassnameTextNode) {
        const clone = new ClassnameTextNode(node.getTextContent());
        clone._classList.push(...node._classList);
        return clone;
    }

    updateDOM(prevNode: ClassnameTextNode, dom: HTMLElement, config: EditorConfig): boolean {
        dom.classList.remove(...prevNode._classList);
        dom.classList.add(...this._classList);
        return super.updateDOM(prevNode, dom, config);
    }

    exportJSON(): SerializedClassnameTextNode {
        const json = super.exportJSON() as SerializedClassnameTextNode;
        json._classList = this._classList;
        return json;
    }


    exportDOM(editor: LexicalEditor): DOMExportOutput {
        const domExport = super.exportDOM(editor) as ClassnameDOMExportOutput;
        domExport.element.classList.add(...this._classList);
        return domExport;
    }

    static importJSON(json: SerializedClassnameTextNode) {
        const node = super.importJSON(json);
        // @ts-ignore
        node._classList = json._classList;
        return node;
    }
}

type ClassnameDOMExportOutput = DOMExportOutput & {
    element: HTMLElement;
}

type SerializedClassnameTextNode = SerializedTextNode & {
    _classList: string[];
}

export function $isClassNameTextNode(node: LexicalNode): node is ClassnameTextNode {
    return node instanceof ClassnameTextNode;
}

export function $creatClassnameTextNode(text: string) {
    return new ClassnameTextNode(text);
}