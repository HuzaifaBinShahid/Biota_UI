"use client";
import MarkIcon from "@/components/ui/svgs/MarkIcon";
import { useState } from "react";

export default function FertilizerMix() {
  const fertilizers = [
    "Biota NPK + Signle",
    "Biota Single",
    "Biota NPK",
    "Recalculate",
    "Reset",
  ];
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="bg-[#F8F8F8] w-full  rounded-lg p-6 border border-[#E2E8F0] ">
      <h3 className="text-xl font-semibold text-[#111827] mb-1">
        Choose a fertilizer mix
      </h3>
      <p className="text-sm text-gray-500 mb-6">Demo Data</p>

      <hr className="mb-5 text-signin-green" />

      <div className="flex flex-wrap gap-3">
        {fertilizers.map((e) => {
          const isActive = selected === e;
          return (
            <button
              key={e}
              onClick={() => setSelected(e)}
              className={`flex items-center gap-2 rounded-md py-[12px] px-[16px] cursor-pointer transition-colors border ${
                isActive
                  ? "bg-[#EFFAF5] border-[#6AAF23] text-[#303030]"
                  : "text-[#303030] border-[#9F9F9F] hover:bg-[#F1F2F4]"
              }`}
            >
              <span>{e}</span>
              {isActive && (
                <div className="w-fit bg-[#6AAF23] rounded-full p-[8px] flex items-center justify-center">
                  <MarkIcon />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}