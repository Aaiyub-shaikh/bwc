"use client";
import { useState } from "react";
import { reports, reportCategories } from "@/data/reports";
import { FileText, Download, BookOpen, ClipboardCheck, Users, FileCheck } from "lucide-react";

const catIcons: Record<string, React.ElementType> = {
  annual: BookOpen,
  audit: ClipboardCheck,
  donors: Users,
  government: FileCheck,
};

const catColors: Record<string, string> = {
  annual: "bg-blue-50 text-blue-600",
  audit: "bg-green-50 text-[var(--primary)]",
  donors: "bg-orange-50 text-orange-600",
  government: "bg-purple-50 text-purple-600",
};

export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? reports
    : reports.filter((r) => r.category === activeCategory);

  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <span className="section-tag bg-white/20 text-white border border-white/30 mb-4">Documents</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Downloads
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Annual reports, audit reports, donor lists, and government documents for full transparency
          </p>
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filter documents by category">
            {reportCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? "gradient-primary text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"}`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grouped by category if "all" */}
          {activeCategory === "all" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              {reportCategories.slice(1).map((cat) => {
                const catReports = reports.filter((r) => r.category === cat.id);
                const Icon = catIcons[cat.id] || FileText;
                return (
                  <div key={cat.id} className="card-base p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${catColors[cat.id]}`}>
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h2 className="text-base font-bold text-gray-800 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                      {cat.label}
                    </h2>
                    <ul className="space-y-3">
                      {catReports.map((r) => (
                        <li key={r.id}>
                          <a
                            href={r.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors group"
                            aria-label={`Download ${r.title}`}
                          >
                            <span className="flex items-center gap-2">
                              <FileText size={13} className="flex-shrink-0" />
                              <span className="leading-tight">{r.title}</span>
                            </span>
                            <Download size={13} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((report) => {
                const Icon = catIcons[report.category] || FileText;
                return (
                  <div key={report.id} className="card-base p-5 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${catColors[report.category]}`}>
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm leading-tight mb-1 truncate" style={{ fontFamily: "var(--font-heading)" }}>
                        {report.title}
                      </p>
                      <p className="text-gray-500 text-xs">{report.year} · {report.size}</p>
                    </div>
                    <a
                      href={report.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download ${report.title}`}
                      className="w-9 h-9 rounded-lg bg-green-50 hover:bg-[var(--primary)] hover:text-white text-[var(--primary)] flex items-center justify-center transition-colors flex-shrink-0"
                    >
                      <Download size={16} />
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
