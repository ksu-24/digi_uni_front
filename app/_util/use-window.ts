"use client"

import {useEffect, useState} from "react";

export default function useWindow() {
    const [windowSize, setWindowSize] = useState({
        innerWidth: 0,
        innerHeight: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            });
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}