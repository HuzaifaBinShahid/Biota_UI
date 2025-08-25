"use client";

import GreenForm from "./components/GreenForm";
import { Header } from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { ModuleProvider, useModule } from "./context/ModuleContext";
import ModuleFourGreenForm from "./components/ModuleFour/ModuleFourGreenForm";

function ModulesContent({ children }: { children: React.ReactNode }) {
  const { activeStep, setActiveStep } = useModule();

  const handleNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const canGoNext = activeStep < 4;
  const canGoPrev = activeStep > 1;

  return (
    <div className="h-screen bg-white flex flex-col">
      <Header
        currentStep={activeStep}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
        canGoNext={canGoNext}
        canGoPrev={canGoPrev}
      />

      <div className="flex justify-between mx-auto w-[79%] items-center py-6 bg-white">
        <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
          Module {activeStep}:
        </h1>

        <div className="flex space-x-4">
          {activeStep === 1 ? (
            <>
              <button className="text-sm px-8 py-4 bg-[#FBEDD8] text-PrimaryText rounded-xl font-semibold transition-all duration-200 hover:bg-[#F7E4C0]">
                Reset
              </button>
              <button className="px-6 py-4 bg-signin-green text-white rounded-xl font-semibold transition-all duration-200 hover:bg-[#5A9A1E]">
                Calculate Analysis
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handlePrevStep}
                disabled={!canGoPrev}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  canGoPrev
                    ? "bg-[#FBEDD8] text-PrimaryText hover:bg-[#F7E4C0]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!canGoNext}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  canGoNext
                    ? "bg-signin-green text-white hover:bg-[#5A9A1E]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex gap-8 max-w-[90%] w-full mx-auto py-8">
          <div className="flex items-center justify-center min-h-full">
            <Sidebar />
          </div>

          {/* Conditional GreenForm based on module */}
          <div className="w-1/4">
            <div className="sticky top-0 max-h-[calc(100vh-200px)] overflow-y-auto hide-scrollbar">
              <div className="pb-8">
                {activeStep === 4 ? <ModuleFourGreenForm /> : <GreenForm />}
              </div>
            </div>
          </div>

          <main className="w-2/3 overflow-y-auto pr-4 hide-scrollbar">
            <div className="pt-4 pb-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModuleProvider>
      <ModulesContent>{children}</ModulesContent>
    </ModuleProvider>
  );
}
