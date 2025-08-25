"use client";

export default function NutrientChart() {
  const nutrients = [
    { name: "N_Total", value: 0.6, color: "#E0A50D" }, 
    { name: "Nh4_N", value: 0.5, color: "#0D94E0" }, 
    { name: "K", value: 0.5, color: "#31CAEC" }, 
    { name: "Na", value: 0.3, color: "#40C754" }, 
    { name: "Ca", value: 0.4, color: "#E0A50D" }, 
    { name: "Mg", value: 0.68, color: "#0D94E0" }, 
    { name: "NO3_N", value: 0.27, color: "#31CAEC" },
    { name: "Cl", value: 0.12, color: "#40C754" },
    { name: "SO4", value: 0.62, color: "#E0A50D" },
    { name: "P", value: 0.78, color: "#0D94E0" }, 
    { name: "Urea", value: 0.6, color: "#31CAEC" }, 
    { name: "N_Org", value: 0.29, color: "#40C754" }, 
    { name: "H", value: 0.57, color: "#E0A50D" }, 
    { name: "OH", value: 0.76, color: "#0D94E0" }, 
  ];

  const maxValue = 1.0; 
  const chartHeight = 300;

  return (
    <div className="bg-white border-1 border-[#DDDDDD] rounded-lg p-6 mb-6">
      <div className="relative" style={{ height: chartHeight }}>
        <div className="absolute inset-0">
          {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map((value) => (
            <div
              key={value}
              className="absolute w-full border-t border-dashed border-gray-200"
              style={{
                top: `${(1 - value) * chartHeight}px`,
              }}
            />
          ))}
        </div>

        <div
          className="flex items-end justify-center space-x-3 relative z-10 ml-10"
          style={{ height: chartHeight }}
        >
          {nutrients.map((nutrient, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-6 rounded-t transition-all duration-300"
                style={{
                  height: `${(nutrient.value / maxValue) * chartHeight}px`,
                  backgroundColor: nutrient.color,
                  minHeight: nutrient.value > 0 ? "4px" : "0px",
                }}
              />
              <span className="text-xs text-gray-600 mt-3 text-center w-14">
                {nutrient.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
          <span>10</span>
          <span>08</span>
          <span>06</span>
          <span>04</span>
          <span>02</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
