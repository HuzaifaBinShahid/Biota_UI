"use client";

export default function TraceElementsTable() {
  const traceData = [
    {
      advice: "Tomaat Standaard",
      fe: 14,
      mn: 1,
      zn: 10,
      b: 0,
      cu: 6,
      mo: 2,
      si: 14,
      ec: 0,
    },
    {
      advice: "Drain (0%)",
      fe: 0,
      mn: 0,
      zn: 0,
      b: 0,
      cu: 0,
      mo: 0,
      si: 0,
      ec: 0,
    },
    {
      advice: "Water Analysis",
      fe: 0,
      mn: 0,
      zn: 0,
      b: 0,
      cu: 0,
      mo: 0,
      si: 0,
      ec: 0,
    },
    {
      advice: "Manual Adjustment",
      fe: 0,
      mn: 0,
      zn: 0,
      b: 0,
      cu: 0,
      mo: 0,
      si: 0,
      ec: 0,
    },
    {
      advice: "Total Application (mmol/L)",
      fe: 14,
      mn: 1,
      zn: 10,
      b: 0,
      cu: 6,
      mo: 2,
      si: 14,
      ec: 0,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 mb-6">

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-1 border-[#CBD5E1]">
              <th className="text-left font-semibold text-primaryText p-3 bg-[#F8FAFC]">
                
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Fe
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Mn
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Zn
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                B
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Cu
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Mo
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                Si
              </th>
              <th className="text-center font-semibold text-primaryText bg-[#F8FAFC] p-3">
                EC
              </th>
            </tr>
          </thead>
          <tbody>
            {traceData.map((row, index) => (
              <tr key={index} className="border-1 border-[#CBD5E1]">
                <td className="py-3 px-2 font-medium text-primaryText">
                  {row.advice}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.fe}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.mn}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.zn}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.b}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.cu}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.mo}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.si}
                </td>
                <td className="py-3 px-2 text-center text-[#718096]">
                  {row.ec}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
