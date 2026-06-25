"use client";
import { useState } from "react";
import Image from "next/image";
import { events } from "@/data/events";
import { Calendar, MapPin, Clock, Search } from "lucide-react";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function EventsPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [search, setSearch] = useState("");

  const filtered = events.filter((e) => {
    const matchTab = e.status === tab;
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.summary.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <span className="section-tag bg-white/20 text-white border border-white/30 mb-4">News & Events</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Events
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Stay updated with programs, camps, celebrations, and community activities
          </p>
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Tabs + Search */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between mb-8">
            <div className="flex gap-2 bg-white rounded-xl p-1 border border-gray-100 shadow-sm w-fit">
              {(["upcoming", "past"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${tab === t ? "gradient-primary text-white shadow" : "text-gray-600 hover:text-[var(--primary)]"}`}
                  aria-pressed={tab === t}
                >
                  {t === "upcoming" ? "Upcoming Events" : "Past Events"}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent w-64"
                aria-label="Search events"
              />
            </div>
          </div>

          {/* Events grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((event) => (
                <article key={event.id} className="card-base overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-0 left-0 gradient-primary text-white px-3 py-1.5 text-xs font-semibold m-3 rounded-lg">
                      {formatDate(event.date)}
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="font-bold text-gray-800 mb-2 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      {event.title}
                    </h2>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock size={12} className="text-[var(--primary)]" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin size={12} className="text-[var(--primary)]" />
                        {event.venue}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {event.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              <Calendar size={40} className="mx-auto mb-3 text-gray-300" />
              <p>No {tab} events found{search ? ` matching "${search}"` : ""}.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
