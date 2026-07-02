"use client";

import Link from "next/link";
import { Layout, Palette, Columns, Layers, Smartphone, Monitor } from "lucide-react";

export default function WireframePage() {
  return (
    <div className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container-custom">
        {/* Page Title & Details */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="section-tag bg-green-100 text-[var(--primary)] border border-green-200">
            Progress Day 1 Review
          </span>
          <h1 className="text-3xl font-extrabold text-gray-800 mt-2 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            BWC Wireframe & Layout Template
          </h1>
          <p className="text-gray-600 text-sm">
            This page demonstrates the structural wireframe, brand colors, and responsive grid layouts designed for the Blind Welfare Council website.
          </p>
        </div>

        {/* Brand Identity / Colors */}
        <div className="card-base p-6 md:p-8 mb-8 border border-gray-200/80">
          <div className="flex items-center gap-2 mb-6">
            <Palette className="text-[var(--primary)]" size={20} />
            <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
              1. Brand Color System
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xxs">
              <div className="h-16 rounded-lg mb-2" style={{ backgroundColor: "#4A8F17" }} />
              <span className="font-bold text-xs text-gray-800 block">Primary Green</span>
              <span className="text-[10px] text-gray-500 font-mono">#4A8F17</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xxs">
              <div className="h-16 rounded-lg mb-2" style={{ backgroundColor: "#2E5E0E" }} />
              <span className="font-bold text-xs text-gray-800 block">Secondary Dark</span>
              <span className="text-[10px] text-gray-500 font-mono">#2E5E0E</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xxs">
              <div className="h-16 rounded-lg mb-2" style={{ backgroundColor: "#6AB82A" }} />
              <span className="font-bold text-xs text-gray-800 block">Primary Light</span>
              <span className="text-[10px] text-gray-500 font-mono">#6AB82A</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xxs">
              <div className="h-16 rounded-lg mb-2" style={{ backgroundColor: "#f0f7e8" }} />
              <span className="font-bold text-xs text-gray-800 block">Primary Tint (50)</span>
              <span className="text-[10px] text-gray-500 font-mono">#f0f7e8</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xxs col-span-2 md:col-span-1">
              <div className="h-16 rounded-lg mb-2 bg-gray-900 border border-gray-800" />
              <span className="font-bold text-xs text-gray-800 block">Footer Dark BG</span>
              <span className="text-[10px] text-gray-500 font-mono">#111827</span>
            </div>
          </div>
        </div>

        {/* Responsive Layout Grid Demo */}
        <div className="card-base p-6 md:p-8 mb-8 border border-gray-200/80">
          <div className="flex items-center gap-2 mb-6">
            <Columns className="text-[var(--primary)]" size={20} />
            <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
              2. Grid & Alignment Templates
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-gray-500 block mb-2">3-Column Grid Template (e.g. Success Stories, Events)</span>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-dashed border-green-500/40 bg-green-50/20 rounded-xl p-6 text-center">
                  <span className="text-xs text-green-700 font-bold block">Column 1</span>
                  <div className="h-2 bg-green-200/50 rounded mt-3 mb-2 w-2/3 mx-auto" />
                  <div className="h-2 bg-green-200/50 rounded w-1/2 mx-auto" />
                </div>
                <div className="border border-dashed border-green-500/40 bg-green-50/20 rounded-xl p-6 text-center">
                  <span className="text-xs text-green-700 font-bold block">Column 2</span>
                  <div className="h-2 bg-green-200/50 rounded mt-3 mb-2 w-2/3 mx-auto" />
                  <div className="h-2 bg-green-200/50 rounded w-1/2 mx-auto" />
                </div>
                <div className="border border-dashed border-green-500/40 bg-green-50/20 rounded-xl p-6 text-center">
                  <span className="text-xs text-green-700 font-bold block">Column 3</span>
                  <div className="h-2 bg-green-200/50 rounded mt-3 mb-2 w-2/3 mx-auto" />
                  <div className="h-2 bg-green-200/50 rounded w-1/2 mx-auto" />
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-gray-500 block mb-2">6-Column Activity Card Grid (e.g. Activity categories)</span>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="border border-dashed border-green-500/30 bg-green-50/10 rounded-lg p-4 text-center">
                    <span className="text-xxs font-bold text-green-600">Grid Card {idx + 1}</span>
                    <div className="w-6 h-6 rounded bg-green-100 mx-auto mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Structural Page Section Mapping */}
        <div className="card-base p-6 md:p-8 border border-gray-200/80">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="text-[var(--primary)]" size={20} />
            <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
              3. Homepage Skeleton Layout Mapping
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Header placeholder */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-3 flex justify-between items-center text-xs text-gray-400">
              <span className="font-bold text-gray-600">Logo (BWC)</span>
              <div className="flex gap-4">
                <span>About</span>
                <span>Programs</span>
                <span>Gallery</span>
                <span>Contact</span>
              </div>
              <span className="bg-green-600 text-white font-bold px-3 py-1 rounded text-xxs">Donate CTA</span>
            </div>

            {/* Hero Banner Skeleton */}
            <div className="border-2 border-dashed border-green-600/30 bg-green-50/15 rounded-xl h-56 flex flex-col justify-center items-center text-center p-6">
              <span className="text-xxs bg-green-200 text-green-800 px-2 py-0.5 rounded-full font-bold uppercase">Hero Block Frame</span>
              <h3 className="text-lg font-bold text-gray-700 mt-2">Empowering Lives Through Inclusion</h3>
              <div className="flex gap-2 mt-4">
                <div className="w-24 h-8 bg-green-600/20 rounded" />
                <div className="w-24 h-8 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="border border-dashed border-green-500/20 bg-green-50/5 rounded-lg p-3 text-center">
                  <div className="h-4 bg-green-200/40 rounded w-12 mx-auto mb-1" />
                  <div className="h-2 bg-gray-200 rounded w-16 mx-auto" />
                </div>
              ))}
            </div>

            {/* Content & Right Sidebar layout split */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 border-2 border-dashed border-gray-300 bg-gray-50 rounded-xl p-4 h-40 flex flex-col justify-between">
                <span className="text-xxs font-bold text-gray-400">Primary Content Frame (About / Info)</span>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
              <div className="border-2 border-dashed border-green-600/30 bg-green-50/10 rounded-xl p-4 h-40 flex flex-col justify-between">
                <span className="text-xxs font-bold text-green-600">Action Box / CTA (Donation Info)</span>
                <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto flex items-center justify-center text-xs text-green-700">QR Code</div>
                <div className="h-3 bg-green-200/40 rounded w-4/5 mx-auto" />
              </div>
            </div>

            {/* Footer placeholder */}
            <div className="bg-gray-900 rounded-lg p-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-6 border border-gray-800">
              <div className="space-y-2">
                <span className="font-bold text-white block">BWC Vadodara</span>
                <div className="h-2 bg-gray-800 rounded w-32" />
                <div className="h-2 bg-gray-800 rounded w-24" />
              </div>
              <div className="flex gap-12">
                <div className="space-y-1.5">
                  <span className="text-white font-bold block">Links</span>
                  <div className="h-2 bg-gray-800 rounded w-12" />
                  <div className="h-2 bg-gray-800 rounded w-16" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-white font-bold block">Contact</span>
                  <div className="h-2 bg-gray-800 rounded w-20" />
                  <div className="h-2 bg-gray-800 rounded w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Link back to Main homepage */}
        <div className="mt-8 text-center">
          <Link href="/" className="btn-primary text-xs py-2 px-5">
            View Live Interactive Website
          </Link>
        </div>
      </div>
    </div>
  );
}
