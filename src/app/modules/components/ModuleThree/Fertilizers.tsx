import React from "react";

const fertilizerData = [
  { name: "Biota NPK 4-2-8", unit: "Kg/ha (10)" },
  { name: "Biota Calcium 8%", unit: "Kg/ha (10)" },
  { name: "Biota Mag 5%", unit: "Kg/ha (10)" },
  { name: "Biota Kalium 15%", unit: "Kg/ha (10)" },
  { name: "Biota NPK 4-2-8", unit: "Kg/ha (10)" },
  { name: "Biota NPK 4-2-8", unit: "Kg/ha (10)" },
  { name: "Biota Calcium 8%", unit: "Kg/ha (10)" },
  { name: "Biota NPK 4-2-8", unit: "Kg/ha (10)" },
  { name: "Biota Mag 5%", unit: "Kg/ha (10)" },
  { name: "Biota Calcium 8%", unit: "Kg/ha (10)" },
];

const Fertilizers = () => {
  return (
    <div className="bg-[#F8F8F8] rounded-lg p-6 border border-[#F1F2F4] w-full">
      <div className="mb-6">
        <div className="flex justify-between items-center py-2">
          <h3 className="text-xl font-semibold text-[#2D3748]">Fertilizers</h3>
          <h3 className="text-md font-medium text-[#718096]">Unit</h3>
        </div>

        <div className="border border-[#6AAF23] my-5"></div>
        <div>
          {fertilizerData.map((item, index) => (
            <div
              key={index}
              className="flex py-3 justify-between items-center text-[#2D3748] border-b border-gray-300"
            >
              <span className=" font-medium text-[14px]">{item.name}</span>
              <span className="text-md font-normal text-right text-[#718096]">
                {item.unit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fertilizers;