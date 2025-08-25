"use client";

import type React from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Leaf,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/app/hooks/useToast";
import { useAuth } from "@/context/useAuth";
import { Input } from "@/components/ui/Input";
import Carousel from "@/components/ui/Carousel";
import BiotaLogo from "../../../../public/Biota-Logo.svg";
import Image from "next/image";

export default function AuthPage() {
  const { login, register, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const slides = [
    { src: "/images/img1.png", alt: "Plant lab 1" },
    { src: "/images/img2.png", alt: "Plant lab 2" },
    { src: "/images/img3.png", alt: "Plant lab 3" },
  ];

  // Leaf burst animation state (spawned from submit button)
  const submitWrapperRef = useRef<HTMLDivElement | null>(null);
  const leafIdCounterRef = useRef(0);
  const cleanupTimeoutsRef = useRef<number[]>([]);
  type LeafParticle = {
    id: number;
    left: number;
    top: number;
    rotation: number;
    scale: number;
    driftX: number;
    duration: number;
  };
  const [leafParticles, setLeafParticles] = useState<LeafParticle[]>([]);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !isSuccess) {
      // Let the auth context handle the redirect
      console.log("User is authenticated, auth context will handle redirect");
    }
  }, [isAuthenticated, isSuccess]);

  const spawnLeafBurstFromButton = () => {
    const el = submitWrapperRef.current;
    if (!el || typeof window === "undefined") return;

    const rect = el.getBoundingClientRect();
    const startLeft = rect.left + rect.width / 2;
    const startTop = rect.top + rect.height / 2;

    const count = 16;
    const newParticles: LeafParticle[] = Array.from({ length: count }).map(
      () => ({
        id: ++leafIdCounterRef.current,
        left: startLeft + (Math.random() - 0.5) * rect.width * 0.5,
        top: startTop + (Math.random() - 0.5) * rect.height * 0.3,
        rotation: Math.random() * 360,
        scale: 0.7 + Math.random() * 0.8,
        driftX: (Math.random() - 0.5) * 240,
        duration: 1.6 + Math.random() * 0.9,
      })
    );

    setLeafParticles((prev) => [...prev, ...newParticles]);

    const maxDuration = Math.max(...newParticles.map((p) => p.duration));
    const cleanupDelay = (maxDuration + 0.3) * 1000;
    const timeoutId = window.setTimeout(() => {
      setLeafParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      );
    }, cleanupDelay);
    cleanupTimeoutsRef.current.push(timeoutId);
  };

  useEffect(() => {
    return () => {
      cleanupTimeoutsRef.current.forEach((id) => window.clearTimeout(id));
      cleanupTimeoutsRef.current = [];
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }

    if (!isLogin) {
      if (!formData.name) {
        toast({
          title: "Validation Error",
          description: "Please enter your full name.",
          variant: "destructive",
        });
        return false;
      }

      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Validation Error",
          description: "Passwords do not match.",
          variant: "destructive",
        });
        return false;
      }

      if (formData.password.length < 8) {
        toast({
          title: "Validation Error",
          description: "Password must be at least 8 characters long.",
          variant: "destructive",
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        await login({
          email: formData.email,
          password: formData.password,
        });
        toast({
          title: "Success",
          description: "Welcome back!",
        });
      } else {
        await register({
          email: formData.email,
          password: formData.password,
        });
        toast({
          title: "Success",
          description: "Account created successfully!",
        });
      }

      // Trigger leaf burst animation from the submit button
      spawnLeafBurstFromButton();

      // Show success state before redirecting
      setIsSuccess(true);
    } catch (error) {
      console.error("Auth error:", error);
      toast({
        title: "Authentication Error",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during authentication.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <>
      <div className="">
        <AuthHeader />
      </div>
      <div className="min-h-screen relative overflow-hidden bg-mint-cream">
        {/* Leaf burst overlay (from submit button to top) */}
        <div className="pointer-events-none fixed inset-0 z-20">
          {leafParticles.map((p) => (
            <motion.div
              key={p.id}
              initial={{
                x: 0,
                y: 0,
                rotate: p.rotation,
                scale: p.scale,
                opacity: 0,
              }}
              animate={{
                x: p.driftX,
                y: -240 - Math.random() * 240,
                rotate: p.rotation + (Math.random() > 0.5 ? 360 : -360),
                scale: p.scale * (0.9 + Math.random() * 0.3),
                opacity: [0, 1, 0],
              }}
              transition={{ duration: p.duration, ease: "easeOut" }}
              style={{ position: "absolute", left: p.left, top: p.top }}
              className="text-green-500/80 drop-shadow-sm"
            >
              <Leaf size={16 + Math.random() * 20} />
            </motion.div>
          ))}
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="relative z-10 min-h-screen flex gap-2 bg-white">
          {/* Left Column - Auth Form */}
          <div className="w-[70%] flex items-center justify-center p-8 lg:p-12 rounded-xl bg-[#EFFAF5]">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 mx-auto mb-6 bg-mint-cream rounded-full flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.4,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="text-green-600"
                      >
                        <svg
                          className="w-10 h-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-2xl font-bold text-green-700 mb-2"
                    >
                      Welcome to Biota Nutri!
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-gray-600"
                    >
                      Redirecting to your dashboard...
                    </motion.p>
                  </motion.div>
                ) : (
                  <div className="w-full ">
                    {/* Welcome Text */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-8 text-center"
                    >
                      <h1 className="text-2xl font-bold text-primaryText mb-2">
                        {isLogin ? "Welcome back!" : "Welcome to BIOTA"}
                      </h1>
                      <p className="text-xs text-[#718096]">
                        {isLogin
                          ? "Log in to continue your Biota journey."
                          : "Register to continue your Biota journey."}
                      </p>
                    </motion.div>

                    {/* Mode Toggle */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex mb-8 bg-white rounded-[8px] p-4 space-x-3 "
                    >
                      <motion.button
                        className={`flex-1 py-3 px-6 rounded-[8px] text-sm font-medium transition-all duration-300 ${
                          isLogin
                            ? "bg-signin-green text-white shadow-sm"
                            : "bg-signup-bg text-signup-text"
                        }`}
                        onClick={() => !isLogin && toggleMode()}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                      >
                        Sign In
                      </motion.button>
                      <motion.button
                        className={`flex-1 py-3 px-6 rounded-[8px] text-sm font-medium transition-all duration-300  ${
                          !isLogin
                            ? "bg-signin-green text-white shadow-sm"
                            : "bg-signup-bg text-signup-text"
                        }`}
                        onClick={() => isLogin && toggleMode()}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                      >
                        Sign Up
                      </motion.button>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={isLogin ? "login" : "signup"}
                            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            {/* Name Field (Signup only) */}
                            {!isLogin && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="relative mt-1">
                                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                  <Input
                                    id="name"
                                    type="text"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={(e: any) =>
                                      handleInputChange("name", e.target.value)
                                    }
                                    className="pl-10 h-12 border-gray-200 bg-white focus:border-green-500 focus:ring-green-500"
                                    required={!isLogin}
                                    disabled={isLoading}
                                  />
                                </div>
                              </motion.div>
                            )}

                            {/* Email Field */}
                            <div>
                              <div className="relative mt-1">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="Bussiness Email"
                                  value={formData.email}
                                  onChange={(e: any) =>
                                    handleInputChange("email", e.target.value)
                                  }
                                  className="pl-10 h-14 border-[#EEEFF2] bg-white focus:border-green-500 focus:ring-green-500"
                                  required
                                  disabled={isLoading}
                                />
                              </div>
                            </div>

                            {/* Password Field */}
                            <div>
                              <div className="relative mt-1">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                  id="password"
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Password"
                                  value={formData.password}
                                  onChange={(e: any) =>
                                    handleInputChange(
                                      "password",
                                      e.target.value
                                    )
                                  }
                                  className="pl-10 pr-10 h-14 border-[#EEEFF2] bg-white focus:border-green-500 focus:ring-green-500"
                                  required
                                  disabled={isLoading}
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                  disabled={isLoading}
                                >
                                  {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                  ) : (
                                    <Eye className="h-5 w-5" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Confirm Password Field (Signup only) */}
                            {!isLogin && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                              >
                                <div className="relative mt-1">
                                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                  <Input
                                    id="confirmPassword"
                                    type={
                                      showConfirmPassword ? "text" : "password"
                                    }
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={(e: any) =>
                                      handleInputChange(
                                        "confirmPassword",
                                        e.target.value
                                      )
                                    }
                                    className="pl-10 pr-10 h-12 bg-white border-gray-200 focus:border-green-500 focus:ring-green-500"
                                    required={!isLogin}
                                    disabled={isLoading}
                                  />
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setShowConfirmPassword(
                                        !showConfirmPassword
                                      )
                                    }
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    disabled={isLoading}
                                  >
                                    {showConfirmPassword ? (
                                      <EyeOff className="h-5 w-5" />
                                    ) : (
                                      <Eye className="h-5 w-5" />
                                    )}
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        </AnimatePresence>

                        {/* Forgot Password (Login only) */}
                        {isLogin && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-right"
                          >
                            <Link
                              href="/forgot-password"
                              className="text-sm text-[#718096] hover:text-green-700 font-medium"
                            >
                              Forgot your password?
                            </Link>
                          </motion.div>
                        )}

                        {/* Submit Button */}
                        <motion.div
                          ref={submitWrapperRef}
                          whileHover={{ scale: isLoading ? 1 : 1.02 }}
                          whileTap={{ scale: isLoading ? 1 : 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="w-full h-14 bg-signin-green hover:bg-signin-green text-white font-medium rounded-[8px] transition-all duration-300 group"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {isLogin
                                  ? "Signing In..."
                                  : "Creating Account..."}
                              </>
                            ) : (
                              <>
                                {isLogin ? "Sign In" : "Create Account"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </Button>
                        </motion.div>

                        {/* Divider */}
                        <div className="relative">
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 text-signup-text">
                              OR CONTINUE WITH
                            </span>
                          </div>
                        </div>

                        {/* Google Sign In */}
                        <motion.div
                          whileHover={{ scale: isLoading ? 1 : 1.02 }}
                          whileTap={{ scale: isLoading ? 1 : 0.98 }}
                        >
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full h-12 border-gray-200 hover:border-gray-300 hover:bg-gray-50 font-bold rounded-md transition-all duration-300 bg-white"
                            disabled={isLoading}
                          >
                            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                            Login with Google
                          </Button>
                        </motion.div>
                      </form>

                      {/* Terms and Privacy (Signup only) */}
                      {/* {!isLogin && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-xs text-gray-500 text-center mt-6"
                        >
                          By creating an account, you agree to our{" "}
                          <Link
                            href="/terms"
                            className="text-green-600 hover:text-green-700"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy"
                            className="text-green-600 hover:text-green-700"
                          >
                            Privacy Policy
                          </Link>
                        </motion.p>
                      )} */}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-1/2 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center relative overflow-hidden rounded-xl mr-1">
            <div className="absolute h-[76px] w-[104px] top-[5%] left-[5%] z-10">
              <Image
                src={BiotaLogo}
                alt="Biota Logo"
                width={82}
                height={62}
                className="w-[82px] h-[62px]"
              />
            </div>
            <Carousel slides={slides} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <AuthFooter />
    </>
  );
}
