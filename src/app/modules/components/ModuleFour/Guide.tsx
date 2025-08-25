import GuideIcon from "@/components/ui/svgs/GuideIcon";
import React from "react";

const Guide = () => {
  return (
    <div className="bg-[#F8F8F8] p-5 border-1 border-[#DDDDDD] rounded-xl h-[400px] min-h-[100px] flex flex-col justify-center">
      <GuideIcon />
      <p className="text-[#323B49] text-lg font-normal w-[80%] my-3">
        This streamlined guide focuses on actionable steps and outcomes, helping
        you to quickly leverage Nexa's Marketing Insights for strategic
        decision-making and to enhance your marketing effectiveness.
      </p>
    </div>
  );
};

export default Guide;
