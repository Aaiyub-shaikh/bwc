"use client";
import { useState, useEffect } from "react";
import { Type, Contrast, Minus, Plus } from "lucide-react";

const SIZES = ["text-size-sm", "text-size-md", "text-size-lg", "text-size-xl"];

export default function AccessibilityToolbar() {
  const [sizeIdx, setSizeIdx] = useState(1); // default = md
  const [highContrast, setHighContrast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Apply font size to <html>
    document.documentElement.classList.remove(...SIZES);
    document.documentElement.classList.add(SIZES[sizeIdx]);
  }, [sizeIdx]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-1" aria-label="Accessibility toolbar">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full gradient-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all animate-pulse-green"
        aria-label={isOpen ? "Close accessibility toolbar" : "Open accessibility toolbar"}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Type size={18} />
      </button>

      {isOpen && (
        <div
          className="bg-white rounded-xl shadow-2xl border border-gray-100 p-3 flex flex-col gap-2 w-44"
          role="region"
          aria-label="Accessibility options"
        >
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-1">Accessibility</p>

          {/* Font size */}
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
            <span className="text-xs font-medium text-gray-600">Font Size</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSizeIdx(Math.max(0, sizeIdx - 1))}
                disabled={sizeIdx === 0}
                className="w-7 h-7 rounded-md bg-white border border-gray-200 hover:bg-green-50 hover:border-green-300 flex items-center justify-center disabled:opacity-40 transition-colors"
                aria-label="Decrease font size"
              >
                <Minus size={12} />
              </button>
              <span className="text-xs w-5 text-center text-gray-700">{["S", "M", "L", "XL"][sizeIdx]}</span>
              <button
                onClick={() => setSizeIdx(Math.min(SIZES.length - 1, sizeIdx + 1))}
                disabled={sizeIdx === SIZES.length - 1}
                className="w-7 h-7 rounded-md bg-white border border-gray-200 hover:bg-green-50 hover:border-green-300 flex items-center justify-center disabled:opacity-40 transition-colors"
                aria-label="Increase font size"
              >
                <Plus size={12} />
              </button>
            </div>
          </div>

          {/* High contrast */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${highContrast ? "bg-yellow-400 text-black" : "bg-gray-50 text-gray-700 hover:bg-green-50"}`}
            aria-pressed={highContrast}
            aria-label="Toggle high contrast mode"
          >
            <Contrast size={14} />
            {highContrast ? "Normal Mode" : "High Contrast"}
          </button>

          {/* Reset */}
          <button
            onClick={() => { setSizeIdx(1); setHighContrast(false); }}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors text-center py-1"
            aria-label="Reset accessibility settings"
          >
            Reset defaults
          </button>
        </div>
      )}
    </div>
  );
}
