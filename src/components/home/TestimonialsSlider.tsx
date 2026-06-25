"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Smt. Geeta Patel",
    role: "Parent of Student",
    rating: 5,
    quote:
      "BWC Vadodara transformed my son's life completely. When he lost his sight at age 8, we were devastated. The teachers here treated him like their own child and gave him the skills and confidence to excel. He is now pursuing a government job examination.",
    avatar: "GP",
  },
  {
    id: 2,
    name: "Dr. Rajesh Shah",
    role: "Long-term Donor",
    rating: 5,
    quote:
      "I have been donating to BWC for over 10 years. The transparency in their reporting and the tangible impact I see in the students every time I visit gives me full confidence that every rupee is well-spent. This is an organization truly driven by purpose.",
    avatar: "RS",
  },
  {
    id: 3,
    name: "Priya Mehta",
    role: "Program Beneficiary",
    rating: 5,
    quote:
      "I lost my vision at 15 due to illness. BWC gave me braille education, computer training with screen readers, and even sponsored my scholarship. Today I am a Master's graduate in Social Work and helping others navigate similar challenges.",
    avatar: "PM",
  },
  {
    id: 4,
    name: "Vijay & Kamla Desai",
    role: "Corporate Sponsors",
    rating: 5,
    quote:
      "As corporate sponsors, we have found BWC Vadodara to be a model NGO — organized, impactful, and accountable. Their annual reports clearly show how funds create change. We are proud to support their mission every year.",
    avatar: "VD",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-gray-50" aria-labelledby="testimonials-heading" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">Testimonials</span>
          <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            What People{" "}
            <span className="text-[var(--primary)]">Say</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Voices from parents, donors, and beneficiaries who have experienced the BWC Vadodara difference.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 relative"
              aria-label={`Testimonial from ${testimonials[current].name}`}
            >
              <Quote size={48} className="text-green-100 absolute top-6 left-6" aria-hidden="true" />
              <div className="relative">
                <Stars count={testimonials[current].rating} />
                <p className="text-gray-700 text-lg leading-relaxed mt-5 mb-6 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{testimonials[current].avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>{testimonials[current].name}</p>
                    <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)] flex items-center justify-center transition-colors" aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-[var(--primary)]" : "w-2 bg-gray-300"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)] flex items-center justify-center transition-colors" aria-label="Next testimonial">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
