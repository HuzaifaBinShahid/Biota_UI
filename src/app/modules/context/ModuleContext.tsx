"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModuleContextType {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const ModuleContext = createContext<ModuleContextType | undefined>(undefined);

export function useModule() {
  const context = useContext(ModuleContext);
  if (context === undefined) {
    throw new Error("useModule must be used within a ModuleProvider");
  }
  return context;
}

interface ModuleProviderProps {
  children: ReactNode;
}

export function ModuleProvider({ children }: ModuleProviderProps) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <ModuleContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </ModuleContext.Provider>
  );
}
