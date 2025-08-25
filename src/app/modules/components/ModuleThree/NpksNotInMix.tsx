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
  color?: string;
}

export default function NPKsNotInMix() {
  const [items, setItems] = useState<NPKItem[]>([
    { id: "1", name: "Vegaline 2 V2", color: "bg-[#DBFCE7]" },
    { id: "2", name: "3-0-9", color: "bg-[#DBFCE7]" },
    { id: "3", name: "4-1-5 High Organic", color: "bg-[#E7F4FC]" },
    { id: "4", name: "4-2-8 + 0.5 MgO", color: "bg-[#E7F4FC]" },
    { id: "5", name: "5-2-2 High Organic", color: "bg-[#DBFCE7]" },
    { id: "6", name: "3-2-6 Bloeiende Planten" },
    { id: "7", name: "5-2-5 Groene Planten" },
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
        onDragEnd={({ active, over }:any) => {
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
              <SortableItem
                key={item.id}
                id={item.id}
                name={item.name}
                bgColor={item.color}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}