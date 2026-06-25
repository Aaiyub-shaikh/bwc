"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/data/events";

const latestEvents = events.slice(0, 3);

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function EventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" aria-labelledby="events-heading" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">News & Events</span>
          <h2 id="events-heading" className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Latest{" "}
            <span className="text-[var(--primary)]">Events</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Stay updated with our programs, camps, celebrations, and community events.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {latestEvents.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-base overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${event.status === "upcoming" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                  {event.status === "upcoming" ? "Upcoming" : "Past"}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-[var(--primary)]" />
                    {formatDate(event.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[var(--primary)]" />
                    <span className="truncate max-w-[100px]">{event.venue.split(",")[0]}</span>
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 leading-tight line-clamp-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {event.summary}
                </p>
                <Link
                  href="/events"
                  className="flex items-center gap-1.5 text-sm text-[var(--primary)] font-semibold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/events" className="btn-green-outline">
            View All Events <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
