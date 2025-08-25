"use client";

export default function RecipeTable() {
  const recipeData = [
    {
      fertiliser: "Biota Calcium 7% + Te",
      unit: "Itr",
      tankA: 10,
      tankB: 0,
    },
    {
      fertiliser: "Biota Nitro (N15)",
      unit: "Itr",
      tankA: 0,
      tankB: 0,
    },
    {
      fertiliser: "Biota Iron 5%",
      unit: "Itr",
      tankA: 5,
      tankB: 0,
    },
    {
      fertiliser: "Biota NPK 4-2-8",
      unit: "Itr",
      tankA: 0,
      tankB: 6,
    },
    {
      fertiliser: "Biota Mag 5%",
      unit: "Itr",
      tankA: 0,
      tankB: 0,
    },
    {
      fertiliser: "Biota Manganese 6%",
      unit: "Itr",
      tankA: 0,
      tankB: 0,
    },
    {
      fertiliser: "Biota Cupper 5%",
      unit: "Itr",
      tankA: 0,
      tankB: 0,
    },
    {
      fertiliser: "Biota Boron 4.1%",
      unit: "Itr",
      tankA: 0,
      tankB: 3,
    },
  ];

  return (
    <div className="bg-white ] rounded-lg p-6 mb-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Recipe</h3>
        <p className="text-sm text-green-600 font-medium">
          Recipe is 96% complete
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-1 border-[#CBD5E1] rounded-2xl">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left font-semibold text-gray-900 p-3 bg-[#F8FAFC]">
                Fertiliser
              </th>
              <th className="text-center font-semibold text-gray-900 bg-[#F8FAFC] p-3">
                Unit
              </th>
              <th className="text-center font-semibold text-gray-900 bg-[#F8FAFC] p-3">
                Tank A
              </th>
              <th className="text-center font-semibold text-gray-900 bg-[#F8FAFC] p-3">
                Tank B
              </th>
            </tr>
          </thead>
          <tbody>
            {recipeData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 px-3 font-medium text-gray-800">
                  {row.fertiliser}
                </td>
                <td className="py-3 px-3 text-center text-gray-600">
                  {row.unit}
                </td>
                <td className="py-3 px-3 text-center text-gray-800">
                  {row.tankA}
                </td>
                <td className="py-3 px-3 text-center text-gray-800">
                  {row.tankB}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
