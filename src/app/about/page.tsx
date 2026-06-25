import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Blind Welfare Council of Vadodara — our history, mission, vision, and impact in empowering visually impaired individuals since 1985.",
};

const timeline = [
  { year: "1985", title: "Foundation", desc: "BWC Vadodara was established by social workers committed to the welfare of visually impaired individuals in Gujarat." },
  { year: "1992", title: "Education Center Opens", desc: "Our first formal education center was opened, providing braille literacy and vocational training to 50 students." },
  { year: 2001, title: "Sports Program Launch", desc: "Inaugurated our sports training program. First batch of athletes participated in state-level para-athletics." },
  { year: 2008, title: "National Recognition", desc: "Received state government recognition for excellence in disability welfare services." },
  { year: 2015, title: "International Sports", desc: "Students participated in Special Olympics Abu Dhabi World Games, winning medals for India." },
  { year: 2019, title: "Gujarat Ratna Gaurav Award", desc: "Received the prestigious Gujarat Ratna Gaurav Award for outstanding contribution to social welfare." },
  { year: 2023, title: "Germany World Games", desc: "Athletes participated in Special Olympics World Summer Games in Berlin, Germany — a landmark achievement." },
  { year: "2024", title: "5000+ Beneficiaries", desc: "Crossed 5,000 beneficiaries supported milestone, expanding programs across Vadodara district." },
];

const objectives = [
  "Provide quality education including braille literacy to visually impaired individuals of all ages",
  "Offer vocational training and livelihood support for economic independence",
  "Support visually impaired athletes in sports at local, national, and international levels",
  "Provide rehabilitation services including orientation, mobility, and daily living skills",
  "Distribute assistive devices such as braille equipment, canes, and screen reader technology",
  "Conduct awareness programs to promote inclusive education in mainstream schools",
  "Advocate for disability rights and inclusive policies at district and state levels",
  "Collaborate with government and corporate partners to expand the reach of services",
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <span className="section-tag bg-white/20 text-white border border-white/30 mb-4">About Us</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Our Story
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Nearly four decades of empowering visually impaired lives across Gujarat
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image src="/images/gallery/gallery-04.jpg" alt="BWC Vadodara organization overview" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <span className="section-tag">Organization Overview</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Blind Welfare Council of Vadodara (BWC Vadodara) is a registered non-profit organization dedicated to the comprehensive welfare and empowerment of visually impaired individuals across Vadodara district and Gujarat.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 1985 by a group of compassionate social workers and disability rights advocates, BWC has grown over nearly four decades into a multi-program institution that touches every aspect of life for visually impaired individuals — from childhood education to adult employment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are registered under the Gujarat Societies Registration Act and have received government recognition for our work. Donations to BWC are eligible for 80G tax deductions under the Income Tax Act.
              </p>
              <Link href="/donate" className="btn-primary">
                <Heart size={16} fill="currentColor" /> Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag">Mission & Vision</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2" style={{ fontFamily: "var(--font-heading)" }}>
              Our Purpose & Direction
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            <div className="card-base p-8">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-heading)" }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower visually impaired individuals by providing quality education, rehabilitation, sports training, and livelihood support — enabling them to lead independent, dignified, and fulfilling lives as equal members of society.
              </p>
            </div>
            <div className="card-base p-8">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-heading)" }}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A society where visually impaired individuals enjoy full inclusion, equal rights, and unlimited opportunities — where disability is no barrier to education, employment, or social participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag">Our Objectives</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2" style={{ fontFamily: "var(--font-heading)" }}>
              What We Work Towards
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
            {objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-[var(--primary)]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag">Our Journey</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2" style={{ fontFamily: "var(--font-heading)" }}>
              Key Milestones
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200" aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {item.year}
                  </div>
                  <div className="card-base p-5">
                    <h3 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <span className="section-tag">Leadership</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2" style={{ fontFamily: "var(--font-heading)" }}>
              Message from the President
            </h2>
          </div>
          <div className="card-base p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <span className="text-white text-2xl font-bold">RP</span>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4 italic text-lg">
                &ldquo;When we started this journey in 1985, we had a simple yet powerful belief: that every visually impaired person deserves the opportunity to live with dignity, independence, and hope. Nearly four decades later, with over 5,000 lives touched, that belief has only grown stronger.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                Our students have won medals at the Special Olympics. Our graduates hold government jobs. Our women&apos;s cooperatives sell handcrafted products across India. These are not just statistics — they are transformations that begin with your support.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>Shri Rameshbhai Patel</p>
                <p className="text-gray-500 text-sm">President, Blind Welfare Council of Vadodara</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
