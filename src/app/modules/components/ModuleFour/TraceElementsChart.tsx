"use client";

export default function TraceElementsChart() {
  const traceElements = [
    { name: "Si", value: 7.5, color: "#E0A50D" }, // Yellow
    { name: "Mn", value: 9.8, color: "#0D94E0" }, // Dark Blue
    { name: "Zn", value: 3.5, color: "#31CAEC" }, // Light Blue
    { name: "B", value: 8.5, color: "#40C754" }, // Light Green
    { name: "Cu", value: 7.0, color: "#E0A50D" }, // Yellow
    { name: "Si", value: 5.8, color: "#0D94E0" }, // Dark Blue
    { name: "EC", value: 9.5, color: "#31CAEC" }, // Light Blue
    { name: "Fe", value: 4.2, color: "#40C754" }, // Light Green
  ];

  const maxValue = 10;
  const chartWidth = 400;

  return (
    <div className="bg-white border-1 border-[#DDDDDD] rounded-lg p-6 mb-6">
      <div className="flex">
        <div
          className="flex flex-col justify-between mr-4 text-sm font-medium text-gray-700"
          style={{ height: `${traceElements.length * 32}px` }}
        >
          {traceElements.map((element, index) => (
            <div key={index} className="flex items-center h-8">
              {element.name}
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="flex-1">
          <div
            className="space-y-2"
            style={{ height: `${(traceElements.length - 1) * 32}px` }}
          >
            {traceElements.map((element, index) => (
              <div key={index} className="flex items-center h-6">
                <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                  <div
                    className="h-4 rounded-full transition-all duration-300"
                    style={{
                      width: `${(element.value / maxValue) * 100}%`,
                      backgroundColor: element.color,
                      minWidth: element.value > 0 ? "8px" : "0px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between mt-8 text-xs text-gray-500">
            <span>0</span>
            <span>02</span>
            <span>04</span>
            <span>06</span>
            <span>08</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
