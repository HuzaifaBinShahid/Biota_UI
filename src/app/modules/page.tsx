"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/useAuth";
import { useRouter } from "next/navigation";

import GreenForm from "./components/GreenForm";
import ModuleOne from "./components/ModuleOne/ModuleOne";
import ModuleTwo from "./components/ModuleTwo/ModuleTwo";
import ModuleThree from "./components/ModuleThree/ModuleThree";
import ModuleFour from "./components/ModuleFour/ModuleFour";
import { useModule } from "./context/ModuleContext";

export default function ModulesPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const { activeStep } = useModule();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/sign-in");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  const renderModuleContent = () => {
    switch (activeStep) {
      case 1:
        return <ModuleOne />;
      case 2:
        return <ModuleTwo />;
      case 3:
        return <ModuleThree />;
      case 4:
        return <ModuleFour />;
      default:
        return <ModuleOne />;
    }
  };

  return <div className="w-full">{renderModuleContent()}</div>;
}
