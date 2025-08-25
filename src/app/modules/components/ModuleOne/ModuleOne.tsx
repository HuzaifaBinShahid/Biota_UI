"use client";

import { Edit, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { useModule } from "../../context/ModuleContext";
import NutrientAnalysisTable from "@/components/ui/NutrientAnalysisTable";
import NutrientAnalysisTableSecondary from "@/components/ui/NutrientAnalysisTableSecondary";

export default function ModuleOne() {
  const { activeStep, setActiveStep } = useModule();

  const handlePrevious = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const canGoPrevious = activeStep > 1;
  const canGoNext = activeStep < 3;

  return (
    <div className="bg-white rounded-lg">
      {/* Navigation Buttons */}
      <div className="flex justify-end"></div>

      {/* Nutrient Analysis Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Nutrient Analysis (mmol/L):
        </h2>

        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 text-PrimaryText border border-[#E2E2E5] py-2 px-4 rounded-full hover:text-gray-800 transition-colors">
            <span>Edit</span>
            <Edit className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-2 text-PrimaryText border border-[#E2E2E5] py-2 px-4 rounded-full hover:text-gray-800 transition-colors">
            <span>Show Graphs</span>
            <BarChart3 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Nutrient Analysis Table */}
      <div className="mb-10">
        <NutrientAnalysisTable />
      </div>

      {/* Secondary Table Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Nutrient Analysis (μmol/L):
        </h2>

        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 text-PrimaryText border border-[#E2E2E5] py-2 px-4 rounded-full hover:text-gray-800 transition-colors">
            <span>Edit</span>
            <Edit className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-2 text-PrimaryText border border-[#E2E2E5] py-2 px-4 rounded-full hover:text-gray-800 transition-colors">
            <span>Show Graphs</span>
            <BarChart3 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Secondary Table */}
      <div className="mb-6">
        <NutrientAnalysisTableSecondary />
      </div>

      {/* Drainage/Water Info */}
      <div className="text-sm text-gray-500 text-center">
        Drainage: 0% | Water: 100%
      </div>
    </div>
  );
}
