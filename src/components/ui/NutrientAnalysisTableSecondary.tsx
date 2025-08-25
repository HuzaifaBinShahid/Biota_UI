import React from "react";

interface NutrientData {
  parameter: string;
  nTotal: number;
  nNh4: number;
  k: number;
  ca: number;
  mg: number;
  nNo3: number;
  cl: number;
  co4: number;
}

interface NutrientAnalysisTableSecondaryProps {
  data?: NutrientData[];
}

const defaultData: NutrientData[] = [
  {
    parameter: "Bell Pepper Drip",
    nTotal: 0.0,
    nNh4: 0.49,
    k: 5.69,
    ca: 0.0,
    mg: 0.0,
    nNo3: 11.19,
    cl: 0.0,
    co4: 0.0,
  },
  {
    parameter: "Drain (0%)",
    nTotal: 0.0,
    nNh4: 0.49,
    k: 5.69,
    ca: 0.0,
    mg: 0.0,
    nNo3: 0.0,
    cl: 0.0,
    co4: 0.0,
  },
  {
    parameter: "Water analysis",
    nTotal: 0.0,
    nNh4: 0.49,
    k: 5.69,
    ca: 0.0,
    mg: 0.0,
    nNo3: 0.0,
    cl: 0.0,
    co4: 0.0,
  },
  {
    parameter: "Advice",
    nTotal: 0.0,
    nNh4: 0.49,
    k: 5.69,
    ca: 0.0,
    mg: 0.0,
    nNo3: 0.0,
    cl: 0.0,
    co4: 0.0,
  },
  {
    parameter: "Fertilizers input",
    nTotal: 0.0,
    nNh4: 0.49,
    k: 5.69,
    ca: 0.0,
    mg: 0.0,
    nNo3: 0.0,
    cl: 0.0,
    co4: 0.0,
  },
];

export default function NutrientAnalysisTableSecondary({
  data = defaultData,
}: NutrientAnalysisTableSecondaryProps) {
  const formatValue = (value: number): string => value.toFixed(2);

  return (
    <div className="bg-white rounded-lg border-2 border-[#E2E2E5] overflow-hidden p-4">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-white w-[90%]">
              <th className="px-4 py-3 text-left text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                Parameter
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                N Total
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                N-NH4+
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                K+
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                Ca2+
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                Mg+
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                N-No3-
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                Cl-
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                CO42-
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="group">
                <td colSpan={9} className="p-1">
                  <div className="mx-3 my-1 rounded-full bg-[#F8F8F8]">
                    <div className="grid grid-cols-9 gap-0">
                      <div className="pl-6 py-3 text-sm font-medium text-primaryText">
                        {row.parameter}
                      </div>
                      <div className="py-3 text-sm text-center text-primaryText">
                        {formatValue(row.nTotal)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText">
                        {formatValue(row.nNh4)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText">
                        {formatValue(row.k)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText">
                        {formatValue(row.ca)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText">
                        {formatValue(row.mg)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText">
                        {formatValue(row.nNo3)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText">
                        {formatValue(row.cl)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText">
                        {formatValue(row.co4)}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
