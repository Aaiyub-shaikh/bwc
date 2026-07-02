"use client";

import Link from "next/link";

export default function NavbarPreviewPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
      {/* CSS Override to hide Header's top bar, Footer, and Toolbar, and make Header static */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide accessibility toolbar */
        #accessibility-toolbar, .skip-to-content {
          display: none !important;
        }
        /* Hide footer */
        footer {
          display: none !important;
        }
        /* Make header static and hide its top bar */
        header {
          position: static !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1) !important;
        }
        header > div:first-child {
          display: none !important;
        }
        /* Remove top padding from main container since header is static */
        #main-content {
          padding-top: 0 !important;
        }
      `}} />

      <div className="text-center max-w-md mb-8">
        <span className="section-tag bg-green-100 text-[var(--primary)] border border-green-200">
          Progress Day 1 Preview
        </span>
        <h1 className="text-2xl font-bold text-gray-800 mt-2 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
          Navigation Bar Preview
        </h1>
        <p className="text-gray-500 text-xs">
          The navigation bar above is rendered standalone (no top information header and no footer).
        </p>
      </div>
    </div>
  );
}
