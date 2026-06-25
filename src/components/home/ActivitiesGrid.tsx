"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  BookOpen, Trophy, HeartHandshake, Briefcase,
  Users, Monitor, ArrowRight,
} from "lucide-react";

const items = [
  { icon: BookOpen, title: "Education", color: "bg-blue-50 text-blue-600", href: "/activities#education", desc: "Braille literacy and inclusive learning programs." },
  { icon: HeartHandshake, title: "Rehabilitation", color: "bg-green-50 text-[var(--primary)]", href: "/activities#rehabilitation", desc: "Orientation, mobility, and daily living skills training." },
  { icon: Trophy, title: "Sports", color: "bg-yellow-50 text-yellow-600", href: "/activities#sports", desc: "Para-sports training from district to international level." },
  { icon: Briefcase, title: "Skill Development", color: "bg-orange-50 text-orange-600", href: "/activities#livelihood", desc: "Vocational and entrepreneurship training programs." },
  { icon: Users, title: "Community Outreach", color: "bg-purple-50 text-purple-600", href: "/activities#community", desc: "Vision camps, awareness programs, and rural outreach." },
  { icon: Monitor, title: "Assistive Technology", color: "bg-red-50 text-red-600", href: "/activities#assistive-tech", desc: "Screen readers, braille devices, and digital tools." },
];

export default function ActivitiesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" aria-labelledby="activities-heading" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">What We Do</span>
          <h2 id="activities-heading" className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Our{" "}
            <span className="text-[var(--primary)]">Activities</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Comprehensive programs designed to empower every aspect of life for visually impaired individuals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={item.href}
                className="card-base group flex gap-4 p-6 items-start"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${item.color} group-hover:scale-110`}>
                  <item.icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 flex items-center gap-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.title}
                    <ArrowRight size={14} className="text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-[var(--primary)]" />
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link href="/activities" className="btn-primary">
            Explore All Activities <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
