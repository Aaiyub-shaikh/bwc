import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { activities } from "@/data/activities";
import { Check, ArrowRight, Heart } from "lucide-react";
import {
  BookOpen, Trophy, HeartHandshake, Briefcase, Users, Monitor
} from "lucide-react";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Explore all programs and activities of Blind Welfare Council of Vadodara — education, sports, rehabilitation, livelihood, community outreach, and assistive technology.",
};

const icons: Record<string, React.ElementType> = {
  BookOpen, Trophy, HeartHandshake, Briefcase, Users, Monitor,
};

export default function ActivitiesPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <span className="section-tag bg-white/20 text-white border border-white/30 mb-4">Programs</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Our Activities
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Comprehensive programs spanning education, sports, rehabilitation, livelihood, and community service
          </p>
        </div>
      </div>

      {/* Activity sections */}
      {activities.map((activity, i) => {
        const Icon = icons[activity.icon] || BookOpen;
        return (
          <section
            key={activity.id}
            id={activity.id}
            className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            aria-labelledby={`activity-${activity.id}`}
          >
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Stats badge */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                    <span className="text-[var(--primary)] font-bold text-lg">{activity.stats.value}</span>
                    <span className="text-gray-600 text-sm">{activity.stats.label}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <Icon size={22} className="text-white" aria-hidden="true" />
                    </div>
                    <span className="section-tag">{activity.title}</span>
                  </div>
                  <h2 id={`activity-${activity.id}`} className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    {activity.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {activity.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {activity.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check size={14} className="text-[var(--primary)] flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>

                  <Link href="/donate" className="btn-primary">
                    <Heart size={15} fill="currentColor" /> Support This Program
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Become a Part of This Mission
          </h2>
          <p className="text-green-100 max-w-xl mx-auto mb-8">
            Your support — whether as a donor, volunteer, or corporate partner — directly powers these life-changing programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="bg-white text-[var(--primary)] font-bold px-7 py-3.5 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-2">
              <Heart size={16} fill="currentColor" /> Donate Now
            </Link>
            <Link href="/contact" className="btn-outline px-7 py-3.5">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
