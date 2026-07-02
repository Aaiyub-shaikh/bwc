"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const causes = [
  {
    id: "education",
    image: "/images/gallery/gallery-02.jpg",
    title: "Sports & Education",
    description:
      "Blind Welfare Council supports visually impaired athletes at district, state, national, and international levels. Our students have brought medals from the Special Olympics and world games.",
    link: "/activities#education",
  },
  {
    id: "sports",
    image: "/images/gallery/gallery-03.jpg",
    title: "Donation & Support",
    description:
      "Blind Welfare Council supports visually impaired people through various donation and support programs. Your contributions help us provide essential resources and opportunities for their growth and development.",
    link: "/activities#sports",
  },
  {
    id: "livelihood",
    image: "/images/gallery/gallery-07.jpg",
    title: "Livelihood Programs",
    description:
      "Recognizing the need to facilitate the disabled with basic skill-based livelihood training, we provide broader employment opportunities and entrepreneurship support for financial independence.",
    link: "/activities#livelihood",
  },
];

export default function CausesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white" aria-labelledby="causes-heading" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">Our Causes</span>
          <h2 id="causes-heading" className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Our{" "}
            <span className="text-[var(--primary)]">Causes</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Our charity helps those who have no hope — building a more inclusive world one life at a time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {causes.map((cause, i) => (
            <motion.article
              key={cause.id}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-base overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {cause.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {cause.description}
                </p>
                <Link href="/donate" className="btn-primary text-sm py-2.5 px-5 w-full justify-center mb-2">
                  Donate Now
                </Link>
                <Link
                  href={cause.link}
                  className="flex items-center justify-center gap-1.5 text-sm text-[var(--primary)] font-medium hover:gap-3 transition-all mt-3"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
