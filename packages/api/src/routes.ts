// API Routes and utilities
export const API_ROUTES = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    REFRESH: "/api/auth/refresh",
  },
  USERS: {
    GET_PROFILE: "/api/users/profile",
    UPDATE_PROFILE: "/api/users/profile",
    GET_ALL: "/api/users",
  },
  ORDERS: {
    CREATE: "/api/orders",
    GET_ALL: "/api/orders",
    GET_ONE: "/api/orders/:id",
    UPDATE: "/api/orders/:id",
    CANCEL: "/api/orders/:id/cancel",
  },
  RESTAURANTS: {
    GET_ALL: "/api/restaurants",
    GET_ONE: "/api/restaurants/:id",
    CREATE: "/api/restaurants",
    UPDATE: "/api/restaurants/:id",
  },
  DELIVERIES: {
    GET_AVAILABLE: "/api/deliveries/available",
    ACCEPT: "/api/deliveries/:id/accept",
    COMPLETE: "/api/deliveries/:id/complete",
    GET_HISTORY: "/api/deliveries/history",
  },
};

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
