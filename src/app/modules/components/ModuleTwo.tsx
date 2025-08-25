"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useModule } from "../context/ModuleContext";
import BasicChoicesForm from "./ModuleTwo/BasicChoices";
import ReplaceOrganicForm from "./ModuleTwo/ReplaceOgranic";
import RefinementForm from "./ModuleTwo/Refinement";


export default function ModuleTwo() {
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
    <div className="bg-white rounded-lg shadow-lg px-8">
      {/* Navigation Buttons */}
      <div className="flex justify-end mb-6">
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

      {/* Module Content - Three Forms Layout */}
      <div className="flex gap-6 items-start">
        {/* Left Column - Single Green Container with Stacked Forms */}
        <div className="flex-1">
          <div className="bg-[#E9F9F2] rounded-lg p-6">
            <div className="space-y-4">
              <BasicChoicesForm />
              <ReplaceOrganicForm />
            </div>
          </div>
        </div>

        {/* Right Column - Single Form */}
        <div className="flex-1">
          <RefinementForm />
        </div>
      </div>
    </div>
  );
}
