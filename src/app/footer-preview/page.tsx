"use client";

import Footer from "@/components/layout/Footer";

export default function FooterPreviewPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-end">
      {/* Visual spacer to show the footer layout clearly */}
      <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
        <span className="section-tag bg-green-100 text-[var(--primary)] border border-green-200">
          Progress Day 1 Preview
        </span>
        <h1 className="text-2xl font-bold text-gray-800 mt-2 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
          Footer Layout Preview
        </h1>
        <p className="text-gray-500 text-xs max-w-md">
          This page renders only the Footer component (excluding the Donation button) for progress reporting.
        </p>
      </div>

      <Footer showDonateButton={false} />
    </div>
  );
}
