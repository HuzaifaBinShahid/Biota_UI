"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/Select";
import { Input } from "../../../components/ui/Input";

export default function GreenForm() {
  return (
    <div className="bg-[#EFFAF5] rounded-lg p-6 border border-[#F1F2F4]">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-PrimaryText mb-4">
          Cultivation Details
          <label className="block text-sm font-medium text-[#718096] my-1">
            What type of fertilizers do you want to use?
          </label>
        </h3>

        <div className="space-y-4">
          <div>
            <Select>
              <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inorganic">inorganic only</SelectItem>
                <SelectItem value="organic">organic only</SelectItem>
                <SelectItem value="mixed">mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select>
              <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">standard Advice</SelectItem>
                <SelectItem value="custom">custom</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Input type="text" placeholder="Enter EC value" />
          </div>
        </div>
      </div>

      <div className="border border-[#6AAF23] my-5"></div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-primaryText mb-4">
          Fertilization System
          <label className="block text-sm font-medium text-[#718096] my-1">
            What type of system do you have?
          </label>
        </h3>

        <div className="space-y-4">
          <div>
            <Select>
              <SelectTrigger className="w-full !h-[58px] rounded-[4px] gap-[10px] px-3 py-3 border border-[#F1F2F4] bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ab-tanks">A/B Tanks</SelectItem>
                <SelectItem value="single-tank">Single Tank</SelectItem>
                <SelectItem value="multi-tank">Multi-Tank</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#718096] my-2">
              Fertilizer Tanks
            </label>
            <div className="grid grid-cols-2 gap-4 my-3">
              <div>
                <Input type="number" placeholder="Volume" />
              </div>
              <div>
                <Input type="number" placeholder="Concentration" />
              </div>
            </div>
          </div>

          <div className=" border border-[#6AAF23] rounded-lg p-4 border-2px">
            <p className="text-sm text-[#6AAF23]">
              For Biota recipes it is advised to mix your tanks at a lower
              concentration. If you choose to set a higher concentration, make
              sure you prepare a test batch before filling your tanks to check
              for any unwanted reactions.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-[#6AAF23] my-5"></div>

      {/* Drainage */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-primaryText my-1">Drainage</h3>
        <label className="block text-sm font-medium text-[#718096] mb-2">
            Drainage percentage
          </label>

        <div>

          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="30"
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-medium text-gray-700 w-12">30%</span>
          </div>
        </div>
      </div>

      <div className="border border-[#6AAF23] my-5"></div>

      {/* Save Changes Button */}
      <button className="w-full bg-[#6AAF23] text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-colors">
        Save Changes
      </button>
    </div>
  );
}
