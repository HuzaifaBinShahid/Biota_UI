"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  authService,
  UserProfile,
  LoginRequest,
  RegisterRequest,
} from "@/lib/auth";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          const profile = await authService.refreshProfile();
          setUser(profile);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        authService.logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (data: LoginRequest) => {
    try {
      setIsLoading(true);
      console.log("Starting login process...");
      await authService.login(data);
      console.log("Login successful, getting user profile...");
      const profile = authService.getUserProfile();
      console.log("User profile retrieved:", profile);
      setUser(profile);
      console.log("User state updated, redirecting...");

      // Add a small delay for smooth transition
      setTimeout(() => {
        // Set flag to indicate we're coming from auth
        if (typeof window !== "undefined") {
          sessionStorage.setItem("fromAuth", "true");
        }
        console.log("Redirecting to /modules");
        router.push("/modules");
      }, 300);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      setIsLoading(true);
      await authService.register(data);
      // After successful registration, automatically log in
      await login({ email: data.email, password: data.password });
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    router.push("/auth");
  };

  const refreshUser = async () => {
    try {
      const profile = await authService.refreshProfile();
      setUser(profile);
    } catch (error) {
      console.error("Failed to refresh user:", error);
      setUser(null);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
