"use client";

import NPKsInMix from "./NpksInMix";
import NPKsNotInMix from "./NpksNotInMix";


export default function ChangeNPKsForm() {
  return (
    <div className="bg-[#F8F8F8] w-full rounded-lg p-6 border border-[#E2E8F0]">
      <h3 className="text-xl font-semibold text-[#111827] mb-1">Change NPKs</h3>
      <p className="text-sm text-gray-500 mb-6">
        Drag and drop to change which NPKs are in your mix. Indicate your
        preference by putting your favourite NPK higher on the list.
      </p>

      <hr className="mb-5 text-signin-green" />

      <div className="space-y-5">
        <NPKsInMix />

        <NPKsNotInMix />
      </div>
    </div>
  );
}