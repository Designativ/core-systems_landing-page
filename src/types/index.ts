/**
 * Global TypeScript type definitions
 * Add shared types and interfaces here
 */

// Example: User type (when you add authentication)
export interface User {
  id: string;
  name: string;
  email: string;
}

// Example: API Response type
export interface ApiResponse<T = unknown> {
  message: string;
  status: "success" | "error";
  data?: T;
  timestamp?: string;
}

// Navigation link type
export interface NavLink {
  href: string;
  label: string;
}
