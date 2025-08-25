"use client";

export default function MetricsSummary() {
  return (
    <>
      <div className="text-center flex-1 my-4">
        <h1 className="text-2xl font-bold text-Primarytext mb-2">
          Biota Report, NA (Tomato)
        </h1>
        <p className="text-sm text-signin-green font-medium">Drainage: 0% | Water: 84%</p>
      </div>
      <div className="bg-[#F8F8F8] rounded-lg p-6 mb-6 border border-[#DDDDDD]">
        <div className="grid grid-cols-3 gap-6">
          {/* Tank Volume */}
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Tank Volume
            </h3>
            <p className="text-2xl font-medium text-[#718096]">1000 L</p>
          </div>

          {/* Tank Concentration */}
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Tank concentration
            </h3>
            <p className="text-2xl font-medium text-[#718096]">1x</p>
          </div>

          {/* Total Water Volume */}
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Total Water Volume
            </h3>
            <p className="text-2xl font-medium text-[#718096]">1000 L</p>
          </div>
        </div>
      </div>
    </>
  );
}
