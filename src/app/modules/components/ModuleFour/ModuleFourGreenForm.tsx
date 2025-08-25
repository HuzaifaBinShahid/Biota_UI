"use client";

import { Download } from "lucide-react";

export default function ModuleFourGreenForm() {
  return (
    <div className="w-full">
      <div className="flex gap-8">
        <div className="w-full">
          <div className="bg-[#E9F9F2] rounded-lg p-8 border border-[#E2E8F0]">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Report Options
            </h2>
            <p className="text-gray-600 mb-6">
              Download your personalised recipe!
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Report language
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer">
                    <option value="english">English</option>
                    <option value="dutch">Dutch</option>
                    <option value="french">French</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Report Style
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer">
                    <option value="standard">Standard</option>
                    <option value="detailed">Detailed</option>
                    <option value="summary">Summary</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#6AAF23] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#5A9A1E] transition-colors flex items-center justify-center gap-3">
                <Download className="w-5 h-5" />
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
