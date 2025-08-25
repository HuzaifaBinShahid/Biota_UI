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


export default function ReplaceOrganicForm() {
  return (
    <>
    <div className="bg-[#F8F8F8] w-full  rounded-lg p-6 border border-[#E2E8F0]">
     
      <h3 className="text-xl font-semibold text-[#111827] mb-1">Replace Inorganic with organic?</h3>
      <p className="text-sm text-gray-500 mb-6">
        What type of fertilizers do you want to use?
      </p>

      <hr className="mb-5 text-signin-green" />

      <div className="space-y-5">
        {/*  Nitrate */}
        <div>
          <Label className="mb-2  text-[#718096]">Nitrate (combine with Calcium, Potassium)</Label>
          <Select>
            <SelectTrigger className="w-full rounded-sm border border-[#F1F2F4] !h-[46px] ">
              <SelectValue placeholder="liquid" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="liquid">Liquid</SelectItem>
              <SelectItem value="solid">Solid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/*Potassium */}
        <div>
          <Label className="mb-2 text-[#718096]">Potassium (combine with Nitrate, Phosphate)</Label>
          <Select>
            <SelectTrigger className="w-full rounded-sm border border-[#F1F2F4] !h-[46px]">
              <SelectValue placeholder="liquid" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="liquid">Liquid</SelectItem>
              <SelectItem value="solid">Solid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Calcium */}
        <div>
          <Label className="mb-2 text-[#718096]">calcium</Label>
          <Select>
            <SelectTrigger className="w-full rounded-sm border border-[#F1F2F4] !h-[46px]">
              <SelectValue placeholder="Monopotassium Phosphate (MKP)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mkp">Monopotassium Phosphate (MKP)</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          {/* Disabled Input */}
          <Input
            type="text"
            value="Missing Fe, Mn, Zn, B, Cu, Mo"
            disabled
            className="mt-2 text-[#E0A50D] bg-[#FCF6E7] border border-[#E0A50D] font-medium"
          />
        </div>

        {/* Magnesium  */}
        <div>
          <Label className="mb-2 text-[#718096]">Magnesium</Label>
          <Select>
            <SelectTrigger className="w-full rounded-sm border border-[#F1F2F4] !h-[46px]">
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
          <Label className="mb-2 text-[#718096]">Polyphosphate (combine with Potassium)</Label>
          <Select>
            <SelectTrigger className="w-full rounded-sm border border-[#F1F2F4] !h-[46px]">
              <SelectValue placeholder="Custom Selection" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom">Custom Selection</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Trace Elements */}
        <div>
          <Label className="mb-2 text-[#718096]">Trace Elements</Label>
          <Select>
            <SelectTrigger className="w-full rounded-sm border border-[#F1F2F4] !h-[46px]">
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
    </>
  );
}