"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";

interface SortableItemProps {
  id: string;
  name: string;
  bgColor?: string; 
}

export default function SortableItem({ id, name, bgColor }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "flex items-center justify-between p-3 rounded-md cursor-grab transition-all duration-200",
        bgColor ?? "bg-orange-100 hover:bg-orange-200 hover:shadow-sm", 
        isDragging && "opacity-60 scale-95 shadow-lg rotate-1 z-10",
        isOver && "border-2 border-green-400 border-dashed bg-green-50 scale-105"
      )}
    >
      <span className="text-gray-900 font-medium select-none">{name}</span>

    
      <div className="flex flex-col gap-1">
        <div className="w-4 h-0.5 rounded-full bg-gray-600"></div>
        <div className="w-4 h-0.5 rounded-full bg-gray-600"></div>
        <div className="w-4 h-0.5 rounded-full bg-gray-600"></div>
      </div>
    </div>
  );
}