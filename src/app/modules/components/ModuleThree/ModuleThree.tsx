"use client";

import TargetEcForm from "./TargetECForm";
import ResultForm from "./ResultsForm";
import FertilizerMix from "./FertilizerMix";
import ChangeNPKsForm from "./ChaneNpks";
import Fertilizers from "./Fertilizers";
import InputEC from "./InputEC";

export default function ModuleThree() {
  return (
    <div className="w-full flex gap-6">
      {/* Left Side - 4 Components (50% width) */}
      <div className="w-1/2 flex flex-col gap-6">
        <TargetEcForm />
        <ResultForm />
        <FertilizerMix />
        <ChangeNPKsForm />
      </div>

      {/* Right Side - 2 Components (50% width) */}
      <div className="w-1/2 flex flex-col gap-6">
        <Fertilizers />
        <InputEC />
      </div>
    </div>
  );
}
