"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { successStories } from "@/data/successStories";
import { ArrowRight, Trophy, GraduationCap, Briefcase } from "lucide-react";

const categories = [
  { id: "all", label: "All Stories", icon: null },
  { id: "sports", label: "Sports", icon: Trophy },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "employment", label: "Employment", icon: Briefcase },
];

const categoryColors: Record<string, string> = {
  sports: "bg-blue-100 text-blue-700",
  education: "bg-purple-100 text-purple-700",
  employment: "bg-orange-100 text-orange-700",
};

export default function SuccessStoriesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? successStories
    : successStories.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <span className="section-tag bg-white/20 text-white border border-white/30 mb-4">Inspiration</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Success Stories
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Real stories of transformation from students, athletes, and graduates of BWC Vadodara
          </p>
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filter success stories by category">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${activeCategory === cat.id ? "gradient-primary text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"}`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.icon && <cat.icon size={15} />}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Stories grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((story) => (
              <article key={story.id} className="card-base overflow-hidden group flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[story.category] || "bg-gray-100 text-gray-600"}`}>
                      {story.category.charAt(0).toUpperCase() + story.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[var(--primary)] text-xs font-semibold uppercase tracking-wide mb-1">{story.subtitle}</p>
                  <h2 className="text-lg font-bold text-gray-800 mb-3 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    {story.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {expanded === story.id ? story.content : story.summary}
                  </p>

                  {/* Achievements */}
                  {story.achievements.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {story.achievements.map((ach) => (
                        <li key={ach} className="flex items-center gap-2 text-xs text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={() => setExpanded(expanded === story.id ? null : story.id)}
                    className="flex items-center gap-1.5 text-sm text-[var(--primary)] font-semibold hover:gap-3 transition-all mt-auto"
                    aria-expanded={expanded === story.id}
                    aria-controls={`story-content-${story.id}`}
                  >
                    {expanded === story.id ? "Show Less" : "Read More"}
                    <ArrowRight size={14} className={expanded === story.id ? "rotate-90" : ""} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <p>No stories found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Donate CTA */}
      <div className="gradient-primary text-white py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Help Write the Next Success Story
          </h2>
          <p className="text-green-100 mb-6">Your donation can fund a scholarship, buy an assistive device, or sponsor a child&apos;s entire year of education.</p>
          <Link href="/donate" className="bg-white text-[var(--primary)] font-bold px-8 py-3.5 rounded-lg hover:bg-green-50 transition-colors inline-flex items-center gap-2">
            Donate Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
