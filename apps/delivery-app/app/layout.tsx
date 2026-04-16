import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repartidor - Delivery App",
  description: "App para repartidores de delivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
