"use client";

import ReportHeader from "./ReportHeader";
import MetricsSummary from "./MetricsSummary";
import NutrientAnalysisTable from "./NutrientAnalysisTable";
import NutrientChart from "./NutrientChart";
import TraceElementsTable from "./TraceElementsTable";
import TraceElementsChart from "./TraceElementsChart";
import RecipeTable from "./RecipeTable";
import Guide from "./Guide";
import Footer from "./Footer";

export default function PDFDesign() {
  return (
    <div className="w-full border border-[#DDDDDD] rounded-lg">
      <div className=" p-6">
        <ReportHeader />

        <MetricsSummary />

        <NutrientAnalysisTable />

        <NutrientChart />

        <div className="flex gap-6">
          <div className="w-1/2">
            <TraceElementsTable />
          </div>

          <div className="w-1/2">
            <TraceElementsChart />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-1/2">
            <RecipeTable />
          </div>

          <div className="w-1/2 mt-24">
            <Guide />
          </div>
        </div>

        {/* Footer */}
      </div>
      <Footer />
    </div>
  );
}
