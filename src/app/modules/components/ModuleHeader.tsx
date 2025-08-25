"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useModule } from "../context/ModuleContext";

export default function ModuleHeader() {
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
    <div className="flex items-center mb-8">
      {/* Left Side - Module Title */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Module {activeStep}:
        </h1>
      </div>

      <div className="flex space-x-3">
        <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg font-medium hover:bg-amber-200 transition-colors">
          Reset
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
          Calculate Analysis
        </button>
      </div>

      {/* Right Side - Navigation Buttons */}
      <div className="flex space-x-3">
        <button
          onClick={handlePrevious}
          disabled={!canGoPrevious}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            canGoPrevious
              ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="w-4 h-4 inline mr-1" />
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            canGoNext
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
          <ChevronRight className="w-4 h-4 inline ml-1" />
        </button>
      </div>
    </div>
  );
}
