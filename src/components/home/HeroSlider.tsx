"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Users } from "lucide-react";

const slides = [
  {
    image: "/images/gallery/gallery-03.jpg",
    heading: "Empowering Lives Through Education, Rehabilitation & Inclusion",
    sub: "Blind Welfare Council of Vadodara is dedicated to creating opportunities and independence for visually impaired individuals.",
  },
  {
    image: "/images/gallery/gallery-07.jpg",
    heading: "Championing Visually Impaired Athletes at World Stages",
    sub: "Our students have won medals at the Special Olympics and international para-sports competitions, bringing pride to India.",
  },
  {
    image: "/images/gallery/gallery-02.jpg",
    heading: "Braille Education Transforming Young Minds",
    sub: "We provide braille literacy, vocational training, and inclusive education to help every student realize their potential.",
  },
  {
    image: "/images/gallery/gallery-04.jpg",
    heading: "Your Generosity Builds a Brighter Future",
    sub: "Every contribution helps us provide assistive devices, scholarships, and life-skills training to visually impaired individuals.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [isPlaying, next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "560px" }}
      aria-label="Hero slideshow"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].heading}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="gradient-hero absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-3xl"
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30">
                Blind Welfare Council of Vadodara
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                {slides[current].heading}
              </h1>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">
                {slides[current].sub}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/donate" className="btn-primary text-base px-7 py-3.5">
                  <Heart size={18} fill="currentColor" /> Donate Now
                </Link>
                <Link href="/contact" className="btn-outline text-base px-7 py-3.5">
                  <Users size={18} /> Become a Volunteer
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-10 bg-white" : "w-4 bg-white/40"}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === current}
            role="tab"
          />
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}
