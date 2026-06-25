"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, BookOpen, Eye, Target } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "Our Mission",
    text: "To empower visually impaired individuals by providing quality education, rehabilitation, sports training, and livelihood support, enabling them to lead independent and dignified lives.",
  },
  {
    icon: BookOpen,
    title: "Our Vision",
    text: "A society where visually impaired individuals are fully included, respected, and have equal access to opportunities in education, employment, and public life.",
  },
  {
    icon: Target,
    title: "Our Objectives",
    text: "Provide braille education, vocational training, rehabilitation services, and sports opportunities. Advocate for disability rights and promote inclusive policies across Gujarat.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[var(--accent)]" aria-labelledby="about-heading" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/gallery/gallery-02.jpg"
                alt="Students in a braille education class at BWC Vadodara"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 max-w-xs">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">39+</span>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm leading-tight">Years of Service</p>
                <p className="text-gray-500 text-xs">Transforming lives since 1985</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-tag">About Us</span>
            <h2 id="about-heading" className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 mt-2" style={{ fontFamily: "var(--font-heading)" }}>
              Championing the Rights of{" "}
              <span className="text-[var(--primary)]">Visually Impaired</span>{" "}
              Individuals
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Blind Welfare Council of Vadodara has been a beacon of hope for visually impaired individuals across Gujarat for nearly four decades. Founded in 1985, our organization has grown from a small community initiative into a comprehensive welfare institution serving thousands of beneficiaries annually.
            </p>

            <div className="space-y-5 mb-8">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <p.icon size={20} className="text-[var(--primary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="grid grid-cols-2 gap-2 mb-8">
              {["Braille Education", "Sports Training", "Vocational Skills", "Rehabilitation", "Assistive Technology", "Community Outreach"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check size={15} className="text-[var(--primary)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
              <Link href="/downloads" className="btn-green-outline">
                Annual Reports
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
