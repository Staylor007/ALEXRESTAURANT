import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel Admin - Delivery App",
  description: "Panel de administración para delivery",
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
