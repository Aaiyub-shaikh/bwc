"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  ChevronDown,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Trustees", href: "/trustees" },
  { label: "Activities", href: "/activities" },
  { label: "Success Stories", href: "/success-stories" },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "VVIP Visits", href: "/gallery?cat=vvip" },
      { label: "News & Events", href: "/gallery?cat=news-events" },
      { label: "School Activities", href: "/gallery?cat=school" },
      { label: "Sports & Games", href: "/gallery?cat=sports" },
      { label: "Festivals", href: "/gallery?cat=festival" },
      { label: "Picnics", href: "/gallery?cat=picnics" },
      { label: "Awards", href: "/gallery?cat=awards" },
      { label: "Other Activities", href: "/gallery?cat=other" },
    ],
  },
  { label: "Downloads", href: "/downloads" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      {/* Top info bar */}
      <div className="gradient-primary text-white text-sm py-2 hidden md:block">
        <div className="container-custom flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 hover:text-green-100 transition-colors"
              aria-label="Email us"
            >
              <Mail size={14} />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-green-100 transition-colors"
              aria-label="Call us"
            >
              <Phone size={14} />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-100 transition-colors"><Facebook size={15} /></a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-100 transition-colors"><Twitter size={15} /></a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-100 transition-colors"><Instagram size={15} /></a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-green-100 transition-colors"><Youtube size={15} /></a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-100 transition-colors"><Linkedin size={15} /></a>
            <span className="ml-2 border-l border-green-300 pl-3">
              <Link href="/donate" className="flex items-center gap-1.5 bg-white text-green-700 font-semibold px-3 py-1 rounded-full text-xs hover:bg-green-50 transition-colors">
                <Heart size={12} fill="currentColor" /> Donate
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-white transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}
        aria-label="Main navigation"
      >
        <div className="container-custom flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="BWC Vadodara Home">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-md flex-shrink-0">
              <span className="text-white font-bold text-lg leading-none">BWC</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[var(--primary-dark)] font-bold text-base leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Blind Welfare Council
              </p>
              <p className="text-gray-500 text-xs leading-tight">of Vadodara</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={`nav-link flex items-center gap-1 px-3 py-2 rounded-md text-sm hover:bg-green-50 transition-colors ${pathname.startsWith(item.href) ? "active text-[var(--primary)]" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <ul
                      className={`absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 min-w-48 py-2 transition-all duration-200 ${openDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <li key={child.label} role="none">
                          <Link
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-[var(--primary)] transition-colors"
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-link block px-3 py-2 rounded-md text-sm hover:bg-green-50 transition-colors ${pathname === item.href ? "active text-[var(--primary)]" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Donate CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="btn-primary hidden md:inline-flex text-sm py-2.5 px-5"
              aria-label="Donate Now"
            >
              <Heart size={15} fill="currentColor" />
              Donate Now
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <ul className="container-custom py-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-green-50 text-left font-medium text-gray-700"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.label && (
                        <ul className="pl-4 space-y-1 mt-1">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link href={child.href} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[var(--primary)] rounded-lg hover:bg-green-50">
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${pathname === item.href ? "bg-green-50 text-[var(--primary)]" : "text-gray-700 hover:bg-green-50 hover:text-[var(--primary)]"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link href="/donate" className="btn-primary w-full justify-center mt-3">
                  <Heart size={16} fill="currentColor" /> Donate Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
