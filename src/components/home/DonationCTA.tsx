"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Heart, QrCode, Smartphone, Building2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function DonationCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="gradient-primary text-white py-20" aria-labelledby="donate-cta-heading" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/30">
              Make A Difference
            </span>
            <h2 id="donate-cta-heading" className="text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Your Contribution{" "}
              <span className="text-yellow-300">Changes Lives</span>
            </h2>
            <p className="text-green-100 leading-relaxed mb-8 text-lg">
              Every rupee you donate goes directly toward educating visually impaired students, funding sports programs, providing assistive technology, and supporting rehabilitation. Your generosity creates a ripple effect that transforms entire families.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { amount: "₹500", impact: "Provides braille study materials for a month" },
                { amount: "₹2,000", impact: "Funds sports training for an athlete" },
                { amount: "₹5,000", impact: "Sponsors a child's education for a month" },
                { amount: "₹10,000", impact: "Provides an assistive device to a student" },
              ].map((item) => (
                <div key={item.amount} className="flex items-center gap-3">
                  <span className="bg-white/20 text-white font-bold px-3 py-1 rounded-lg text-sm min-w-[60px] text-center">
                    {item.amount}
                  </span>
                  <span className="text-green-100 text-sm">{item.impact}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/donate" className="bg-white text-[var(--primary)] font-bold px-7 py-3.5 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-2">
                <Heart size={18} fill="currentColor" /> Donate Now
              </Link>
              <Link href="/contact" className="btn-outline px-7 py-3.5">
                Become a Sponsor
              </Link>
            </div>
          </motion.div>

          {/* Right: QR / Bank */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {/* QR Code card */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl flex items-center gap-5">
              <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <QrCode size={56} className="text-gray-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1" style={{ fontFamily: "var(--font-heading)" }}>Scan & Pay</p>
                <p className="text-gray-500 text-sm mb-2">UPI ID: <span className="font-medium text-gray-700">{siteConfig.donation.upiId}</span></p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Smartphone size={13} className="text-[var(--primary)]" />
                  PhonePe · GPay · Paytm · BHIM
                </div>
              </div>
            </div>

            {/* Bank details card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <Building2 size={18} className="text-yellow-300" />
                <p className="font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>Bank Transfer Details</p>
              </div>
              <div className="space-y-2.5 text-sm">
                {[
                  { label: "Account Name", value: siteConfig.donation.accountName },
                  { label: "Bank", value: siteConfig.donation.bankName },
                  { label: "Account No.", value: siteConfig.donation.accountNumber },
                  { label: "IFSC Code", value: siteConfig.donation.ifscCode },
                  { label: "PAN", value: siteConfig.donation.pan },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-green-200">{label}</span>
                    <span className="text-white font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-yellow-300 text-xs font-medium">
                  ✓ Donations are eligible for 80G tax benefits
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
