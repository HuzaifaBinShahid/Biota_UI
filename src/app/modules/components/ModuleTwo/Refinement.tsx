"use client";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";

export default function RefinementForm() {
  return (
    <div className="bg-[#F8F8F8] w-full rounded-lg p-6 border border-[#E2E8F0] h-screen">
      <h3 className="text-xl font-semibold text-[#111827] mb-1">Refinement</h3>
      <p className="text-sm text-gray-500 mb-6">
        What type of fertilizers do you want to use?
      </p>

      <hr className="mb-5 text-signin-green" />

      <div className="space-y-5">
        {/* Ammonium Nitrate */}
        <div>
          <Label className="mb-1 text-[#718096]">Ammonium Nitrate</Label>
          <Select>
            <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
              <SelectValue placeholder="liquid" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="liquid">Liquid</SelectItem>
              <SelectItem value="solid">Solid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Calcium Chloride */}
        <div>
          <Label className="mb-1 text-[#718096]">Calcium Chloride</Label>
          <Select>
            <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
              <SelectValue placeholder="liquid" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="liquid">Liquid</SelectItem>
              <SelectItem value="solid">Solid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Calcium Nitrate */}
        <div>
          <Label className="mb-1 text-[#718096]">Calcium Nitrate</Label>
          <Select>
            <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
              <SelectValue placeholder="Monopotassium Phosphate (MKP)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mkp">Monopotassium Phosphate (MKP)</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          {/* Disabled Input instead of <p> */}
          <Input
            type="text"
            value="Missing Fe, Mn, Zn, B, Cu, Mo"
            disabled
            className="mt-2 bg-yellow-50 border border-yellow-200 text-yellow-700 font-medium"
          />
        </div>

        {/* Magnesium Nitrate */}
        <div>
          <Label className="mb-1 text-[#718096]">Magnesium Nitrate</Label>
          <Select>
            <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
              <SelectValue placeholder="Custom Selection" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom">Custom Selection</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Polyphosphate */}
        <div>
          <Label className="mb-1 text-[#718096]">Polyphosphate</Label>
          <Select>
            <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
              <SelectValue placeholder="Custom Selection" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom">Custom Selection</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Magnesium Sulfate */}
        <div>
          <Label className="mb-1 text-[#718096]">Magnesium Sulfate</Label>
          <Select>
            <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
              <SelectValue placeholder="Custom Selection" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom">Custom Selection</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Potassium Sulfate */}
        <div>
          <Label className="mb-1 text-[#718096]">Potassium Sulfate</Label>
          <Select>
            <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
              <SelectValue placeholder="Custom Selection" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom">Custom Selection</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Urea */}
        <div>
          <Label className="mb-1 text-[#718096]">Urea</Label>
          <Select>
            <SelectTrigger className="w-full h-[58px] rounded-[4px] gap-[10px] px-3 py-6 border border-[#F1F2F4] bg-white">
              <SelectValue placeholder="Custom Selection" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom">Custom Selection</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}