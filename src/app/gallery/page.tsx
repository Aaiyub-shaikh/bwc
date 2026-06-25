"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryImages, galleryCategories } from "@/data/gallery";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const slides = filtered.map((img) => ({ src: img.src, alt: img.alt, title: img.caption }));

  const handleClick = (i: number) => {
    setLightboxIndex(i);
    setOpen(true);
  };

  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <span className="section-tag bg-white/20 text-white border border-white/30 mb-4">Gallery</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Photo Gallery
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Capturing moments of achievement, learning, celebration, and community
          </p>
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter gallery by category">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? "gradient-primary text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"}`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="masonry-grid" role="list" aria-label="Photo gallery">
            {filtered.map((img, i) => (
              <div key={img.id} className="masonry-item" role="listitem">
                <button
                  onClick={() => handleClick(i)}
                  className="relative w-full rounded-xl overflow-hidden group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--primary)]"
                  aria-label={`View ${img.caption}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={i % 4 === 0 ? 320 : i % 3 === 0 ? 280 : 220}
                    className="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors rounded-xl flex flex-col items-center justify-end p-3">
                    <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      {img.caption}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <p>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </div>
  );
}
