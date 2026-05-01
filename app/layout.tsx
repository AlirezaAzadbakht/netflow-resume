import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NetflowAI",
  description: "Operating system for intelligent enterprises.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
