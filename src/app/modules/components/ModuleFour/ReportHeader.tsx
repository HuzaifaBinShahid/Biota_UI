"use client";

import Image from "next/image";
import BiotaLogo from "../../../../../public/Biota-Logo.svg";

export default function ReportHeader() {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start">
          <Image src={BiotaLogo} alt="BiotaLogo" />
        </div>

        <div className="text-right text-sm text-gray-600 space-y-1">
          <p>
            <span className="text-primaryText font-semibold">Issue Date:</span> 25 Aug 2025
          </p>
          <p>
            <span className="text-primaryText font-semibold">Information:</span> info@biota.nu
          </p>
          <p>
            {" "}
            <span className="text-primaryText font-semibold">Orders:</span> order@biota.nu
          </p>
        </div>
      </div>
    </div>
  );
}
