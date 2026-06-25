"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Images } from "lucide-react";
import { galleryImages } from "@/data/gallery";

// Show first 8 images as preview
const previewImages = galleryImages.slice(0, 8);

export default function GalleryPreview() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const slides = previewImages.map((img) => ({ src: img.src, alt: img.alt, title: img.caption }));

  return (
    <section className="section-padding bg-gray-50" aria-labelledby="gallery-preview-heading" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">Photo Gallery</span>
          <h2 id="gallery-preview-heading" className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Moments That{" "}
            <span className="text-[var(--primary)]">Inspire</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A glimpse into the vibrant lives of our students, athletes, and community.
          </p>
        </motion.div>

        <div className="masonry-grid">
          {previewImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="masonry-item"
            >
              <button
                onClick={() => { setIndex(i); setOpen(true); }}
                className="relative w-full rounded-xl overflow-hidden group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--primary)]"
                aria-label={`View ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={i % 3 === 0 ? 320 : 240}
                  className="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors rounded-xl flex items-end p-3">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.caption}
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/gallery" className="btn-primary">
            <Images size={18} /> View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
