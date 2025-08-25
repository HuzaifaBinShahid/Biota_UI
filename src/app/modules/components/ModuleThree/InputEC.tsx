"use client";
import React from "react";

const COLORS = {
  waterInput: "#0D94E0",
  waterExcess: "#F54900",
  fertilizerInput: "#6AAF23",
  fertilizerExcess: "#E0A50D",
};

const MAX_VALUE = 25;

const DATA = [
  { label: "N Total", type: "fertilizerInput", value: 5.0 },
  { label: "K+", type: "waterInput", value: 22.5 },
  { label: "Ca 2 +", type: "waterInput", value: 15.75 },
  { label: "SO42 -", type: "waterExcess", value: 2.1 },
  { label: "Ca2+", type: "fertilizerExcess", value: 18.0 },
  { label: "N-Org", type: "waterInput", value: 7.2 },
  { label: "Mg+", type: "waterInput", value: 12.3 },
  { label: "Cl-", type: "waterExcess", value: 19.8 },
  { label: "Urea", type: "fertilizerExcess", value: 3.5 },
  { label: "SO42 -", type: "fertilizerExcess", value: 8.9 },
  { label: "Mo", type: "waterInput", value: 24.0 },
  { label: "Si", type: "waterInput", value: 1.5 },
  { label: "Mn", type: "waterInput", value: 9.9 },
  { label: "Fe", type: "waterInput", value: 16.5 },
  { label: "OH-", type: "waterInput", value: 20.2 },
  { label: "N-Org", type: "waterInput", value: 11.0 },
  { label: "N Total", type: "waterInput", value: 6.8 },
  { label: "N Total", type: "waterInput", value: 14.4 },
  { label: "N Total", type: "fertilizerInput", value: 23.0 },
  { label: "N Total", type: "fertilizerInput", value: 4.5 },
];

const InputEC = () => {
  return (
    <>
      <div className="bg-[#F8F8F8] rounded-lg p-6 border border-[#F1F2F4] w-full">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-PrimaryText mb-4">
            Input at EC: 1.02
            <label className="block text-sm font-medium text-[#718096] my-1">
              N-Org is a combination of: N-Org, Urea, N-NO3, N-NH4
            </label>
          </h3>
          <div className="border border-[#6AAF23] my-5"></div>
          <div className="space-y-4">
            {DATA.map((item, index) => {
              const widthPercentage = (item.value / MAX_VALUE) * 100;
              const barColor = COLORS[item.type as keyof typeof COLORS];

              return (
                <div key={index} className="flex items-center">
                  <div className="w-1/4 text-gray-700">{item.label}</div>
                  <div className="flex-1 ml-4 relative h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${widthPercentage}%`,
                        backgroundColor: barColor,
                      }}
                    ></div>
                  </div>
                  <div className="ml-4 w-12 text-right text-gray-700">
                    {item.value}
                  </div>
                </div>
              );
            })}
            <div className="border border-[#6AAF23] my-5"></div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center space-x-2">
                <span
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: COLORS.waterInput }}
                ></span>
                <span>Water Input</span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: COLORS.waterExcess }}
                ></span>
                <span>Water Excess</span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: COLORS.fertilizerInput }}
                ></span>
                <span>Fertilizer Input</span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: COLORS.fertilizerExcess }}
                ></span>
                <span>Fertilizer Excess</span>
              </div>
            </div>
            <div className="grid gap-2 mb-4">
              <div>
                <h2 className="font-bold mt-2 mb-1">
                  Result:{" "}
                  <span className="text-[#718096]">K:Ca = 1.57 N:K = 2.05</span>
                </h2>
              </div>
              <div>
                <h2 className="font-bold mt-2 mb-1">
                  Advice:{" "}
                  <span className="text-[#718096]">K:Ca = 1.57 N:K = 2.05</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputEC;