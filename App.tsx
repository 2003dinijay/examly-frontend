import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Examly - Exam System",
  description: "A simple exam system built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
