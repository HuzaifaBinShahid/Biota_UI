"use client";

export default function NutrientAnalysisTable() {
  const nutrientData = [
    {
      advice: "Tomaat Standaard",
      nTotal: 14,
      nh4N: 1,
      k: 10,
      na: 0,
      ca: 6,
      mg: 2,
      no3N: 14,
      cl: 2,
      so4: 4,
      p: 2,
      h: 10,
      urea: 0,
    },
    {
      advice: "Drain (0%)",
      nTotal: 0,
      nh4N: 0,
      k: 0,
      na: 0,
      ca: 0,
      mg: 0,
      no3N: 0,
      cl: 0,
      so4: 0,
      p: 0,
      h: 0,
      urea: 0,
    },
    {
      advice: "Water Analysis",
      nTotal: 0,
      nh4N: 0,
      k: 0,
      na: 0,
      ca: 0,
      mg: 0,
      no3N: 0,
      cl: 0,
      so4: 0,
      p: 0,
      h: 0,
      urea: 0,
    },
    {
      advice: "Manual Adjustment",
      nTotal: 0,
      nh4N: 0,
      k: 0,
      na: 0,
      ca: 0,
      mg: 0,
      no3N: 0,
      cl: 0,
      so4: 0,
      p: 0,
      h: 0,
      urea: 0,
    },
    {
      advice: "Total Application (mmol/L)",
      nTotal: 14,
      nh4N: 1,
      k: 10,
      na: 0,
      ca: 6,
      mg: 2,
      no3N: 14,
      cl: 2,
      so4: 4,
      p: 2,
      h: 10,
      urea: 0,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-primaryText mb-4">Advice</h3>
      <p className="text-lg font-medium text-signin-green mb-4">Drainage: 0% | Water: 84%</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm ">
          <thead>
            <tr className="border-1 border-[#CBD5E1] ">
              <th className="text-left font-semibold text-primaryText p-3 bg-[#F8FAFC]">
                Advice
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                N_Total
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                NH4_N
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                K
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Na
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Ca
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Mg
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                NO3_N
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Cl
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                SO4
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                P
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                H
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Urea
              </th>
            </tr>
          </thead>
          <tbody>
            {nutrientData.map((row, index) => (
              <tr key={index} className="border-1 border-[#CBD5E1]">
                <td className="py-3 px-2 font-medium text-primaryText">
                  {row.advice}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.nTotal}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.nh4N}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">{row.k}</td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.na}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.ca}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.mg}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.no3N}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.cl}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.so4}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">{row.p}</td>
                <td className="py-3 px-2 text-center text-[#718096]">{row.h}</td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.urea}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
