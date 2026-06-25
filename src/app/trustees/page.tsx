import type { Metadata } from "next";
import { trustees } from "@/data/trustees";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Trustees",
  description:
    "Meet the Board of Trustees of Blind Welfare Council of Vadodara — dedicated leaders guiding the organization's mission for over three decades.",
};

export default function TrusteesPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <span className="section-tag bg-white/20 text-white border border-white/30 mb-4">Leadership</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Board of Trustees
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Guided by compassionate leaders dedicated to the welfare of visually impaired individuals
          </p>
        </div>
      </div>

      {/* Trustees Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our board comprises distinguished professionals from diverse fields who volunteer their time, expertise, and resources to guide BWC Vadodara&apos;s mission and ensure accountability to our donors and beneficiaries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {trustees.map((trustee) => (
              <div key={trustee.id} className="card-base overflow-hidden group text-center">
                {/* Avatar */}
                <div className="relative h-56 gradient-primary flex items-center justify-center overflow-hidden">
                  <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30">
                    <span className="text-white text-4xl font-bold">
                      {trustee.name.split(" ").map(w => w[0]).slice(1, 3).join("")}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {trustee.name}
                  </h2>
                  <p className="text-[var(--primary)] font-semibold text-sm mb-3">{trustee.designation}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{trustee.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <span className="section-tag">Get Involved</span>
          <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Interested in Contributing to Our Cause?
          </h2>
          <p className="text-gray-600 mb-8">
            We welcome professionals, volunteers, and organizations who wish to collaborate with BWC Vadodara. Whether as an advisory member, donor, or skills volunteer — there are many ways to create impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:bwcvadodara@gmail.com" className="btn-primary flex items-center gap-2">
              <Mail size={16} /> Write to Us
            </a>
            <a href="tel:+919876543210" className="btn-green-outline flex items-center gap-2">
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
