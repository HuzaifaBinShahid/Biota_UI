"use client";

import NotificationIcon from "@/components/ui/NotificationsIcon";
import SettingsIcon from "@/components/ui/SettingsIcon";
import { UserProfile } from "@/components/ui/UserProfile";
import Image from "next/image";
import BiotaLogo from "../../../../public/Biota-Logo.svg"

interface HeaderProps {
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

export function Header({
  currentStep,
  onNextStep,
  onPrevStep,
  canGoNext,
  canGoPrev,
}: HeaderProps) {

  return (
    <header className="bg-[#001D18] px-4 py-4">
      <div className="max-w-[90%] mx-auto flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <Image src={BiotaLogo} alt="Biota Logo" />
        </div>

        <div className="flex items-center space-x-4 ml-6">
          <NotificationIcon />
          <SettingsIcon />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
