"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/useAuth";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if we're not loading and have a definitive auth state
    if (!isLoading) {
      if (isAuthenticated) {
        router.push("/modules");
      } else {
        router.push("/auth/sign-in");
      }
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading while checking auth state
  return (
    <div className="min-h-screen bg-mint-cream flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-signin-green mx-auto mb-4"></div>
        <p className="text-gray-600">Checking authentication...</p>
      </div>
    </div>
  );
}
