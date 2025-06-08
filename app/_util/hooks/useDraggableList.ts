import React, { useState, useCallback } from "react";
import { patch } from "@/app/_util/fetching";

interface Entity {
    id: number;
    priority: number;
}

interface UseDraggableListOptions<T extends Entity> {
    items: T[];
    setItems: (items: T[]) => void;
    updateEndpoint: (id: number) => string;
    onError: (error: string) => void;
    fetchItems: () => Promise<void>;
}

export function useDraggableList<T extends Entity>(
    {
        items,
        setItems,
        updateEndpoint,
        onError,
        fetchItems,
    }: UseDraggableListOptions<T>
) {
    const [draggedItemId, setDraggedItemId] = useState<number | null>(null);

    const handleDragStart = useCallback((id: number) => {
        setDraggedItemId(id);
    }, []);

    const handleDragOver = useCallback(
        (e: React.DragEvent<HTMLDivElement>, targetId: number) => {
            e.preventDefault();
            if (draggedItemId == null || draggedItemId === targetId) return;

            const fromIdx = items.findIndex(i => i.id === draggedItemId);
            const toIdx   = items.findIndex(i => i.id === targetId);
            if (fromIdx === -1 || toIdx === -1) return;

            const liveOrder = Array.from(items);
            const [moved] = liveOrder.splice(fromIdx, 1);
            liveOrder.splice(toIdx, 0, moved);

            setItems(liveOrder);
        },
        [draggedItemId, items, setItems]
    );

    const handleDrop = useCallback(
        async () => {
            if (draggedItemId == null) return;

            const updated: T[] = items.map((item, idx) => ({
                ...item,
                priority: items.length - idx,
            })) as T[];

            setItems(updated);
            setDraggedItemId(null);

            try {
                await Promise.all(
                    updated.map(item =>
                        patch(updateEndpoint(item.id), { priority: item.priority })
                    )
                );
            } catch (err) {
                onError(
                    `Error updating priorities: ${
                        err instanceof Error ? err.message : String(err)
                    }`
                );
                await fetchItems();
            }
        },
        [draggedItemId, items, setItems, updateEndpoint, onError, fetchItems]
    );

    return {
        draggedItemId,
        handleDragStart,
        handleDragOver,
        handleDrop,
    };
}
