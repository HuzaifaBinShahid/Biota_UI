"use client";

import NumberOne from "../../../components/ui/svgs/NumberOne";
import NumberTwo from "../../../components/ui/svgs/NumberTwo";
import NumberThree from "../../../components/ui/svgs/NumberThree";
import NumberFour from "../../../components/ui/svgs/NumberFour";
import { ShareIcon } from "../../../components/ui/svgs/ShareIcon";
import ShieldIcon from "../../../components/ui/svgs/ShieldIcon";
import { InfoIcon } from "../../../components/ui/svgs/InfoIcon";

import { useModule } from "../context/ModuleContext";

export default function Sidebar() {
  const { activeStep, setActiveStep } = useModule();

  const steps = [
    { id: 1, label: "Cultivation", isActive: activeStep === 1 },
    { id: 2, label: "Step 2", isActive: activeStep === 2 },
    { id: 3, label: "Step 3", isActive: activeStep === 3 },
    { id: 4, label: "Step 4", isActive: activeStep === 4 },
    { id: 5, label: "Share", icon: ShareIcon, isActive: activeStep === 5 },
    { id: 6, label: "Download", icon: ShieldIcon, isActive: activeStep === 6 },
    { id: 7, label: "Info", icon: InfoIcon, isActive: activeStep === 7 },
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  const renderNumberIcon = (id: number, isActive: boolean) => {
    const iconColor = isActive ? "white" : "#7E7B76";

    switch (id) {
      case 1:
        return <NumberOne fill={iconColor} />;
      case 2:
        return <NumberTwo fill={iconColor} />;
      case 3:
        return <NumberThree fill={iconColor} />;
      case 4:
        return <NumberFour fill={iconColor} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-20 bg-[#FBEDD8] rounded-full flex flex-col items-center py-4 shadow-lg">
      {/* Steps */}
      <div className="flex flex-col items-center space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center space-y-2">
            <button
              onClick={() => handleStepClick(step.id)}
              className={`group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                step.isActive
                  ? "bg-[#6AAF23] shadow-lg scale-110"
                  : "bg-[#FCF5EB] hover:bg-gray-100"
              }`}
            >
              {step.icon ? (
                <step.icon className="w-5 h-5 text-gray-600" />
              ) : (
                renderNumberIcon(step.id, step.isActive)
              )}
            </button>

            {/* Tooltip */}
            <div className="absolute bottom-full -left-24 mb-2 px-2 py-1 bg-[#111B21] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
