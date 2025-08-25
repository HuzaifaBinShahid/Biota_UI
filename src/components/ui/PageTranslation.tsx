"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  // Show loading state when navigating to main page from auth
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      // Check if we're coming from auth page
      const referrer = document.referrer;
      const fromAuth =
        referrer.includes("/auth") ||
        sessionStorage.getItem("fromAuth") === "true";

      if (fromAuth) {
        setIsLoading(true);
        // Clear the flag
        sessionStorage.removeItem("fromAuth");
        // Simulate a brief loading state for smooth transition
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100"
        >
          <div className="text-center space-y-4">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-16 h-16 mx-auto"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-green-600"
              >
                <path
                  d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-green-700 font-medium"
            >
              Welcome to Biota Nutri
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-sm"
            >
              Loading your dashboard...
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.02 }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
