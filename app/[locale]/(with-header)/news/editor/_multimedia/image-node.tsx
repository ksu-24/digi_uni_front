import MultimediaNode, {
    SerializedMultimediaNode
} from "@/app/[locale]/(with-header)/news/editor/_multimedia/multimedia-node";
import {NodeKey} from "lexical";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Box} from "@mui/material";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import useWindow from "@/app/_util/use-window";

// TODO: refactor this whole thing to something more readable

export type ImagePayload = {
    src: string;
    altText: string;
    width?: "inherit" | number;
    height?: "inherit" | number;
};

function ResizePoint(
    {
        replaceNode,
        xPos,
        yPos,
        setWidth,
        setHeight,
        XYRatio,
        parentRect
    }: {
        replaceNode: () => void,
        xPos: "left" | "right" | "none",
        yPos: "top" | "bottom" | "none",
        setWidth: (callbackFn: (width: number) => void) => void,
        setHeight: (callbackFn: (height: number) => void) => void,
        XYRatio: number,
        parentRect: DOMRect
    }) {
    const xMultiplier = xPos === "none" ? 0 : xPos === "left" ? -1 : 1;
    const yMultiplier = yPos === "none" ? 0 : yPos === "top" ? -1 : 1;
    const mouseDownRef = React.useRef(false);
    const speed = 1;

    const onMouseMove = (e: React.MouseEvent) => {
        if (!mouseDownRef.current) return;

        const movementVector = {
            x: e.movementX / Math.sqrt(e.movementX ** 2 + e.movementY ** 2),
            y: e.movementY / Math.sqrt(e.movementX ** 2 + e.movementY ** 2)
        }
        const normalVector = {
            x: xPos === "left" ? 1 : -1,
            y: yPos === "top" ? 1 : -1
        }

        const angle =
            Math.acos((movementVector.x * normalVector.x + movementVector.y * normalVector.y)
                / (Math.sqrt(movementVector.x ** 2 + movementVector.y ** 2) * Math.sqrt(normalVector.x ** 2 + normalVector.y ** 2))
            ) % (2 * Math.PI);
        console.log(angle, movementVector, normalVector);

        const moveDirection = (angle > Math.PI / 2 ? 1 : -1) * Math.sqrt(e.movementX ** 2 + e.movementY ** 2) / 2;

        const xShift = speed * XYRatio * (xPos !== "none" && yPos !== "none" ? moveDirection : e.movementX * xMultiplier);
        const yShift = speed * (yPos !== "none" && xPos !== "none" ? moveDirection : e.movementY * yMultiplier);

        setWidth((width) => width + xShift);
        setHeight((height) => height + yShift);
    };

    let cursor;

    switch (xPos + " " + yPos) {
        case "left top":
        case "right bottom":
            cursor = "cursor-nwse-resize";
            break;
        case "right top":
        case "left bottom":
            cursor = "cursor-nesw-resize";
            break;
        case "left none":
        case "right none":
            cursor = "cursor-ew-resize";
            break;
        case "none top":
        case "none bottom":
            cursor = "cursor-ns-resize";
            break;
    }

    const xPosMultiplier = xPos === "left" ? 0 : xPos == "right" ? 1 : 0.5;
    const yPosMultiplier = yPos === "top" ? 0 : yPos == "bottom" ? 1 : 0.5;
    const x = parentRect.left + xPosMultiplier * parentRect.width - 4;
    const y = parentRect.top + yPosMultiplier * parentRect.height - 4;

    return (
        <Box
            onMouseDown={(e) => {
                e.preventDefault()
                mouseDownRef.current = true
                window.addEventListener("mousemove", onMouseMove as never);

                function onMouseUp() {
                    mouseDownRef.current = false;
                    replaceNode();
                    window.removeEventListener("mousemove", onMouseMove as never);
                    window.removeEventListener("mouseup", onMouseUp);
                }

                window.addEventListener("mouseup", onMouseUp);
            }}
            className={`absolute w-2 h-2 bg-gray-400 border-[1px] border-black ${cursor}`}
            style={{
                left: x,
                top: y
            }}
        />
    );
}

function ImageNodeComponent(props: {
    key1: string,
    src: string,
    alt: string,
    width: "inherit" | number | undefined,
    height: "inherit" | number | undefined
}) {
    const [currentWidth, setCurrentWidth] = useState(typeof props.width === "number" ? props.width : undefined);
    const [currentHeight, setCurrentHeight] = useState(typeof props.height === "number" ? props.height : undefined);
    const [boundingRect, setBoundingRect] = useState<DOMRect | null>(null);
    const [clicked, setClicked] = useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    let editor = null;
    try {
        [editor] = useLexicalComposerContext();
    } catch (ignored) {
    }

    const currentWidthHolder = useRef(currentWidth);
    const currentHeightHolder = useRef(currentHeight);

    useEffect(() => {
        currentWidthHolder.current = currentWidth;
        currentHeightHolder.current = currentHeight;
    }, [currentWidth, currentHeight]);

    function updateBoundingRect() {
        if (containerRef.current) {
            setBoundingRect(new DOMRect(
                containerRef.current.offsetLeft,
                containerRef.current.offsetTop,
                containerRef.current.offsetWidth,
                containerRef.current.offsetHeight
            ));
        }
    }

    const window1 = useWindow();

    useEffect(() => {
        updateBoundingRect();
    }, [currentWidth, currentHeight, window1.innerWidth, window1.innerHeight]);

    const posCombinations = ["left", "right", "none"].flatMap(xPos => ["top", "bottom", "none"].map(yPos => [xPos, yPos])).filter(([xPos, yPos]) => xPos !== "none" || yPos !== "none");

    return (
        <Box ref={containerRef} className="w-fit h-fit" onResize={updateBoundingRect} onClick={(e) => {
            e.stopPropagation();
            setClicked(true);
            const setClickedFalse = () => {
                setClicked(false);
                window.removeEventListener("click", setClickedFalse)
            };
            containerRef.current?.addEventListener("click", setClickedFalse);
        }}>
            <img
                onLoad={(e) => {
                    if (currentWidth === undefined) {
                        setCurrentWidth(e.currentTarget.width);
                    }
                    if (currentHeight === undefined) {
                        setCurrentHeight(e.currentTarget.height);
                    }
                }}
                className="inline"
                style={{
                    height: currentHeight + "px"
                }}
                src={props.src}
                alt={props.alt}
                width={currentWidth}
                height={currentHeight}
            />
            {boundingRect && currentWidth && currentHeight && clicked && editor?.isEditable() && posCombinations.map(([xPos, yPos]) => (
                <ResizePoint
                    replaceNode={() => {
                        editor!.update(() => {
                            let thiz = null as null | ImageNode;
                            for (const node of editor!.getEditorState()._nodeMap.values()) {
                                if (node instanceof ImageNode && node.__key === props.key1) {
                                    thiz = node;
                                }
                            }
                            thiz!.replace($createImageNode({
                                src: thiz!.__src,
                                altText: thiz!.__altText,
                                width: currentWidthHolder.current,
                                height: currentHeightHolder.current
                            }));
                        });
                    }}
                    key={`${xPos}-${yPos}`}
                    xPos={xPos as "left" | "right" | "none"}
                    yPos={yPos as "top" | "bottom" | "none"}
                    setWidth={setCurrentWidth as any}
                    setHeight={setCurrentHeight as any}
                    XYRatio={currentWidth / currentHeight}
                    parentRect={boundingRect}
                />
            ))}
        </Box>
    );
}

export default class ImageNode extends MultimediaNode {

    constructor(src: string, altText: string, width?: "inherit" | number, height?: "inherit" | number, key?: NodeKey,
                initialWidth?: number | "inherit", initialHeight?: number | "inherit") {
        super(src, altText, ImageNode.getType(), width, height, key, initialWidth, initialHeight);
    }

    static getType(): string {
        return "image-node";
    }

    static clone(node: ImageNode): ImageNode {
        return new ImageNode(node.__src, node.__altText, node.__width, node.__height, node.getKey());
    }

    static importJSON(json: SerializedImageNode): ImageNode {
        return new ImageNode(json.src, json.altText, json.width, json.height, undefined, json.initialWidth, json.initialHeight);
    }


    decorate(): React.JSX.Element {
        return <ImageNodeComponent key1={this.getKey()} src={this.__src} alt={this.__altText} width={this.__width}
                                   height={this.__height}/>
    }
}

type SerializedImageNode = SerializedMultimediaNode;

export function $createImageNode({src, altText, width, height}: ImagePayload): ImageNode {
    return new ImageNode(src, altText, width, height);
}