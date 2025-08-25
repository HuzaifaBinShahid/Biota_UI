"use client";
import { Label } from "@/components/ui/Label";

export default function ResultForm() {
  return (
    <div className="bg-[#F8F8F8] w-full  rounded-lg p-6 border border-[#E2E8F0]">
     
      <h3 className="text-xl font-semibold text-[#111827] mb-1">Result</h3>
      <p className="text-sm text-gray-500 mb-6">
        Demo Data
      </p>

      <hr className="mb-5 text-signin-green" />

      <div className="space-y-5">
      
        <div>
          <Label className="mb-2  text-[#718096]">Target EC</Label>
        </div>

        <p className="text-sm text-[#0D94E0] h-[42px] bg-[#E7F4FC] border border-[#0D94E0] rounded-md px-3 py-2 mt-2"> At this EC you can produce 500 L fertigation water. </p>
      </div>
    </div>
  );
}