"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake, Award, ShieldCheck, Building, Landmark, HelpingHand } from "lucide-react";

const partners = [
  { name: "Special Olympics Bharat", icon: Award },
  { name: "Ministry of Social Justice & Empowerment", icon: Landmark },
  { name: "Vadodara Municipal Corporation", icon: Building },
  { name: "Gujarat Para-Sports Association", icon: ShieldCheck },
  { name: "SBI Foundation (CSR)", icon: Landmark },
  { name: "Vadodara Rehabilitation Trust", icon: HelpingHand },
  { name: "Gujarat Social Welfare Board", icon: Handshake },
  { name: "Deaf & Blind Support India", icon: HelpingHand },
];

export default function PartnersCarousel() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={containerRef}
      className="py-12 bg-gray-50 border-t border-b border-gray-100 overflow-hidden"
      aria-label="Our Partners and Supporters"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-tag bg-green-100 text-[var(--primary)] border border-green-200">Supporters</span>
          <h2 className="text-xl font-bold text-gray-700 mt-2" style={{ fontFamily: "var(--font-heading)" }}>
            Trusted by Government & Corporate Partners
          </h2>
        </motion.div>

        {/* Marquee effect wrapper */}
        <div className="relative w-full flex items-center overflow-x-hidden">
          {/* Gradients to fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex gap-8 whitespace-nowrap animate-marquee py-2 select-none">
            {/* Render twice for continuous loop */}
            {[...partners, ...partners].map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 bg-white px-5 py-3.5 rounded-xl border border-gray-200/80 shadow-xxs hover:shadow-xs transition-shadow duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <span className="text-gray-700 font-semibold text-xs tracking-wide">
                    {partner.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
