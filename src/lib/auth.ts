// Authentication service for Biota Frontend
export const API_BASE_URL = "/biota-api";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export interface UserProfile {
  id: number;
  email: string;
  is_active: boolean;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface AuthError {
  detail: string;
}

class AuthService {
  private tokenKey = "biota_auth_token";
  private userKey = "biota_user_profile";

  // Get stored token
  getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(this.tokenKey);
  }

  // Get stored user profile
  getUserProfile(): UserProfile | null {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem(this.userKey);
    return stored ? JSON.parse(stored) : null;
  }

  // Store authentication data
  private setAuthData(token: string, user: UserProfile) {
    if (typeof window === "undefined") return;
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  // Clear authentication data
  clearAuthData() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Register new user
  async register(data: RegisterRequest): Promise<{ id: number; message: string }> {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      // Handle different error response formats
      let errorMessage = "Registration failed";

      if (typeof errorData === "string") {
        errorMessage = errorData;
      } else if (errorData && typeof errorData === "object") {
        // Try different possible error field names
        errorMessage =
          errorData.detail ||
          errorData.message ||
          errorData.error ||
          errorData.msg ||
          JSON.stringify(errorData);
      }

      throw new Error(errorMessage);
    }

    return response.json();
  }

  // Login user
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      // Handle different error response formats
      let errorMessage = "Login failed";

      if (typeof errorData === "string") {
        errorMessage = errorData;
      } else if (errorData && typeof errorData === "object") {
        // Try different possible error field names
        errorMessage =
          errorData.detail ||
          errorData.message ||
          errorData.error ||
          errorData.msg ||
          JSON.stringify(errorData);
      }

      throw new Error(errorMessage);
    }

    const authData: AuthResponse = await response.json();

    // Try to get user profile after successful login
    let userProfile: UserProfile;
    try {
      userProfile = await this.getCurrentUser(authData.access_token);
    } catch (error) {
      console.warn("Failed to fetch user profile, creating basic profile:", error);
      // Create a basic user profile if the /me endpoint fails
      userProfile = {
        id: 1, // Default ID
        email: data.email,
        is_active: true,
        role: "user",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
    }

    // Store both token and user profile
    this.setAuthData(authData.access_token, userProfile);

    return authData;
  }

  // Get current user profile
  async getCurrentUser(token?: string): Promise<UserProfile> {
    const authToken = token || this.getToken();
    if (!authToken) {
      throw new Error("No authentication token");
    }

    const response = await fetch(`${API_BASE_URL}/api/v1/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        this.clearAuthData();
      }
      const errorData = await response.json();
      // Handle different error response formats
      let errorMessage = "Failed to get user profile";

      if (typeof errorData === "string") {
        errorMessage = errorData;
      } else if (errorData && typeof errorData === "object") {
        // Try different possible error field names
        errorMessage =
          errorData.detail ||
          errorData.message ||
          errorData.error ||
          errorData.msg ||
          JSON.stringify(errorData);
      }

      throw new Error(errorMessage);
    }

    return response.json();
  }

  // Logout user
  logout() {
    this.clearAuthData();
  }

  // Refresh user profile (useful for checking if token is still valid)
  async refreshProfile(): Promise<UserProfile | null> {
    try {
      const profile = await this.getCurrentUser();
      // Update stored profile
      if (typeof window !== "undefined") {
        localStorage.setItem(this.userKey, JSON.stringify(profile));
      }
      return profile;
    } catch (error) {
      // If token is invalid, clear auth data
      this.clearAuthData();
      return null;
    }
  }
}

// Export singleton instance
export const authService = new AuthService();
