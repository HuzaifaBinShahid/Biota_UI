"use client";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "@/components/ui/SortableItem";

interface NPKItem {
  id: string;
  name: string;
}

export default function NPKsInMix() {
  const [items, setItems] = useState<NPKItem[]>([
    { id: "1", name: "4-2-8" },
    { id: "2", name: "5-2-5" },
    { id: "3", name: "7-2-3" },
    { id: "4", name: "Vegaline 1 v2" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="border-2 border-dashed border-signin-green p-4 rounded-lg bg-[#F8F8F8]">
      <h2 className="text-lg font-medium text-gray-900 mb-4">NPKs in mix</h2>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={({ active, over }) => {
          if (over && active.id !== over.id) {
            setItems((prev) => {
              const oldIndex = prev.findIndex((i) => i.id === active.id);
              const newIndex = prev.findIndex((i) => i.id === over.id);
              return arrayMove(prev, oldIndex, newIndex);
            });
          }
        }}
      >
        <SortableContext
          items={items.map((i) => i.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id} name={item.name} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}