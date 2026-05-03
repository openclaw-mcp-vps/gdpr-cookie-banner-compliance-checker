import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Banner Compliance Checker",
  description: "Automated GDPR cookie banner compliance scanner for EU-facing businesses, agencies, and compliance teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="754fe44e-155e-4fe5-89ef-0f10aa762b75"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
