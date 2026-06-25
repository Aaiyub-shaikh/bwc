"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { successStories } from "@/data/successStories";

const featured = successStories.filter((s) => s.featured);

const categoryColors: Record<string, string> = {
  sports: "bg-blue-100 text-blue-700",
  education: "bg-purple-100 text-purple-700",
  employment: "bg-orange-100 text-orange-700",
};

export default function SuccessStoriesSlider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-gray-50" aria-labelledby="stories-heading" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">Success Stories</span>
          <h2 id="stories-heading" className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Our{" "}
            <span className="text-[var(--primary)]">Story</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Success stories of Blind Welfare Council students — proof that the right support changes everything.
          </p>
        </motion.div>

        {/* Cards grid (show all 3 featured) */}
        <div className="grid md:grid-cols-3 gap-7 mb-10">
          {featured.map((story, i) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-base overflow-hidden group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[story.category] || "bg-gray-100 text-gray-600"}`}>
                    {story.category.charAt(0).toUpperCase() + story.category.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  {story.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.summary}
                </p>
                <Link
                  href={`/success-stories`}
                  className="flex items-center gap-1.5 text-sm text-[var(--primary)] font-semibold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/success-stories" className="btn-green-outline">
            View All Stories <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
