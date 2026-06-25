import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Trustees", href: "/trustees" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Downloads", href: "/downloads" },
    { label: "Events", href: "/events" },
    { label: "Contact Us", href: "/contact" },
  ];

  const programs = [
    { label: "Education & Training", href: "/activities#education" },
    { label: "Sports Activities", href: "/activities#sports" },
    { label: "Rehabilitation", href: "/activities#rehabilitation" },
    { label: "Livelihood Programs", href: "/activities#livelihood" },
    { label: "Community Outreach", href: "/activities#community" },
    { label: "Assistive Technology", href: "/activities#assistive-tech" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base">BWC</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Blind Welfare Council</p>
                <p className="text-gray-400 text-xs">of Vadodara</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Empowering visually impaired individuals through education, rehabilitation, sports, and livelihood programs across Vadodara, Gujarat since 1985.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: siteConfig.social.facebook, Icon: Facebook, label: "Facebook" },
                { href: siteConfig.social.twitter, Icon: Twitter, label: "Twitter" },
                { href: siteConfig.social.instagram, Icon: Instagram, label: "Instagram" },
                { href: siteConfig.social.youtube, Icon: Youtube, label: "YouTube" },
                { href: siteConfig.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[var(--primary)] flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--primary-light)] transition-colors group"
                  >
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Our Programs
            </h3>
            <ul className="space-y-2.5">
              {programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--primary-light)] transition-colors group"
                  >
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--primary-light)] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--primary-light)] flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--primary-light)] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <Link
              href="/donate"
              className="btn-primary mt-6 inline-flex text-sm"
            >
              <Heart size={14} fill="currentColor" />
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
