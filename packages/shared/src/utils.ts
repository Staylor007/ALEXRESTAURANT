// Utility functions
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

export const calculateDeliveryFee = (distance: number): number => {
  return 2.0 + distance * 0.5;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("es-ES").format(date);
};

export const calculateETA = (distance: number): number => {
  // Assuming 30 km/h average speed
  return Math.ceil((distance / 30) * 60);
};
