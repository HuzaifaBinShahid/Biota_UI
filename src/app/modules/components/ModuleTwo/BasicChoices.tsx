"use client";

import { Input } from "@/components/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import ReplaceOrganicForm from "./ReplaceOgranic";


export default function BasicChoicesForm() {
  return (
    <div className="bg-[#F8F8F8] rounded-lg p-6 border border-[#F1F2F4] w-full">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-PrimaryText mb-4">
          Basic Choices
          <label className="block text-sm font-medium text-[#718096] my-1">
            What type of fertilizers do you want to use?
          </label>
        </h3>
        <div className="border border-[#6AAF23] my-5"></div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#718096] my-1">
              Solid or Liquid package?
            </label>
            <Select>
              <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="liquid">Liquid</SelectItem>
                <SelectItem value="solid">Solid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#718096] my-1">
              Choose a form of chloride
            </label>
            <Select>
              <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="liquid">Liquid</SelectItem>
                <SelectItem value="solid">Solid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#718096] my-1">
              choose a form of solid phosphate
            </label>
            <Select>
              <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MKP">
                  Monopotassium Phosphate (MKP)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#6AAF23] my-1">
              Added:
            </label>
            <Input
              className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border-1 border-gray-200 bg-[#E9F9F2] text-[#6AAF23]"
              type="text"
              value="Missing Fe, Mn, Zn, B, Cu, Mo"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#718096] my-1">
              Choose trace elements
            </label>
            <Select>
              <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Custom Selection</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

   
    </div>
  );
}