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

interface NutrientAnalysisTableProps {
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
    parameter: "Water Analysis",
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
    parameter: "Total feed",
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
    parameter: "Fertilisers input",
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
];

export default function NutrientAnalysisTable({
  data = defaultData,
}: NutrientAnalysisTableProps) {
  const getRowBackgroundColor = (parameter: string): string => {
    switch (parameter) {
      case "Bell Pepper Drip":
        return "bg-[#E9F9F2]"; // Light green
      case "Drain (0%)":
        return "bg-[#F8F8F8]"; // Greyish
      case "Total feed":
        return "bg-[#E7F4FC]"; // Blue
      case "Fertilisers input":
        return "bg-[#FCF6E7]"; // Yellow
      default:
        return "bg-[#F8F8F8]"; // White for Water Analysis and Advice
    }
  };

  const formatValue = (value: number): string => {
    return value.toFixed(2);
  };

  const isSpecialValue = (
    parameter: string,
    value: number,
    column: string
  ): boolean => {
    return (
      parameter === "Bell Pepper Drip" && column === "nNo3" && value === 11.19
    );
  };

  return (
    <div className="bg-white rounded-lg  border-[#E2E2E5] border-2 overflow-hidden p-4">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-3 text-left text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23]">
                Parameter
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23] ">
                N Total
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23] ">
                N-NH4+
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23] ">
                K+
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23] ">
                Ca2+
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23] ">
                Mg+
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23] ">
                N-No3-
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23] ">
                Cl-
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-[#888D90] border-b-2 border-[#6AAF23] ">
                CO42-
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="group">
                <td colSpan={9} >
                  <div
                    className={`mx-3 my-1 rounded-full ${getRowBackgroundColor(
                      row.parameter
                    )}`}
                  >
                    <div className="grid grid-cols-9 gap-0">
                      <div className="pl-6 py-3 text-sm font-medium text-primaryText">
                        {row.parameter}
                      </div>
                      <div className=" py-3 text-sm text-center text-primaryText font-medium">
                        {formatValue(row.nTotal)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText font-medium">
                        {formatValue(row.nNh4)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText font-medium">
                        {formatValue(row.k)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText font-medium">
                        {formatValue(row.ca)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText font-medium">
                        {formatValue(row.mg)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center">
                        <span
                          className={
                            isSpecialValue(row.parameter, row.nNo3, "nNo3")
                              ? "text-red-500 font-semibold"
                              : "text-primaryText font-medium"
                          }
                        >
                          {formatValue(row.nNo3)}
                        </span>
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText font-medium">
                        {formatValue(row.cl)}
                      </div>
                      <div className="px-4 py-3 text-sm text-center text-primaryText font-medium">
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
