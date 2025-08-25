"use client";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export default function TargetEcForm() {
  return (
    <div className="bg-[#F8F8F8] w-full  rounded-lg p-6 border border-[#E2E8F0]">
     
      <h3 className="text-xl font-semibold text-[#111827] mb-1">Target EC</h3>
      <p className="text-sm text-gray-500 mb-6">
        What type of fertilizers do you want to use?
      </p>

      <hr className="mb-5 text-signin-green" />

      <div className="space-y-5">
      
        <div>
          <Label className="mb-2  text-[#718096]">Target EC</Label>
          <Input
            type="text"
            placeholder="Enter Target EC value"
            className="mt-2 bg-white border border-[#F1F2F4] text-[#111827] font-medium"
          />
        </div>

        <p className="text-sm h-[42px] text-[#E0A50D] bg-[#FCF6E7] border border-[#E0A50D] rounded-md px-3 py-2 mt-2"> Original advice EC: 1.02 </p>
      </div>
    </div>
  );
}