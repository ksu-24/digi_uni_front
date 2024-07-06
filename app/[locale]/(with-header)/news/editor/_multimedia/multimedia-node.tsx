import {
    DecoratorNode,
    DOMExportOutput,
    EditorConfig,
    LexicalEditor,
    NodeKey,
    SerializedLexicalNode,
    Spread
} from "lexical";
import React, {JSX} from "react";
import {renderToStaticMarkup} from "react-dom/server";

export default abstract class MultimediaNode extends DecoratorNode<JSX.Element> {
    readonly __src: string;
    readonly __altText: string;
    __width: "inherit" | number | undefined;
    __height: "inherit" | number | undefined;
    readonly __type: string;
    readonly __initialWidth: "inherit" | number | undefined;
    readonly __initialHeight: "inherit" | number | undefined;

    protected constructor(src: string,
                          altText: string,
                          type: string,
                          width?: "inherit" | number,
                          height?: "inherit" | number,
                          key?: NodeKey,
                          initialWidth?: "inherit" | number,
                          initialHeight?: "inherit" | number) {
        super(key);
        this.__src = src;
        this.__altText = altText;
        this.__width = width;
        this.__height = height;
        this.__type = type;
        this.__initialWidth = initialWidth ?? width;
        this.__initialHeight = initialHeight ?? height;
    }

    override exportJSON(): SerializedMultimediaNode {
        return {
            type: this.__type,
            src: this.__src,
            altText: this.__altText,
            width: this.__width,
            height: this.__height,
            initialWidth: this.__initialWidth,
            initialHeight: this.__initialHeight,
            version: 0
        };
    }

    override exportDOM(editor: LexicalEditor): DOMExportOutput {
        const base = this.createDOM(undefined as never);
        base.innerHTML = renderToStaticMarkup(this.decorate(editor, undefined as never));
        return {
            element: base
        }
    }

    override createDOM(_: EditorConfig): HTMLElement {
        return document.createElement("span");
    }

    override updateDOM(): false {
        return false;
    }
}

export type SerializedMultimediaNode = Spread<
    {
        altText: string;
        height?: number | "inherit";
        src: string;
        width?: number | "inherit";
        initialWidth?: number | "inherit";
        initialHeight?: number | "inherit";
        type: string
    },
    SerializedLexicalNode
>;

export function $isMultimediaNode(node: any): node is MultimediaNode {
    return node instanceof MultimediaNode;
}