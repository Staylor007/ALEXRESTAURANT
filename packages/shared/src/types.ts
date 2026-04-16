// User types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "customer" | "delivery" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

// Restaurant types
export interface Restaurant {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  deliveryTime: number; // minutes
  minimumOrder: number;
  image: string;
}

// Order types
export type OrderStatus = "pending" | "confirmed" | "preparing" | "on_delivery" | "delivered" | "cancelled";

export interface Order {
  id: string;
  userId: string;
  restaurantId: string;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
  deliveryFee: number;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Delivery types
export type DeliveryStatus = "available" | "accepted" | "picked_up" | "delivered";

export interface Delivery {
  id: string;
  orderId: string;
  deliveryPersonId?: string;
  status: DeliveryStatus;
  pickupAddress: string;
  dropoffAddress: string;
  estimatedTime: number;
  actualTime?: number;
  earnings?: number;
}
