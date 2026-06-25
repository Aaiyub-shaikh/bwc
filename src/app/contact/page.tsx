"use client";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <span className="section-tag bg-white/20 text-white border border-white/30 mb-4">Get In Touch</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Contact Us
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Have questions about our programs, volunteering, or donating? Reach out to us.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card-base p-7 bg-gray-50/50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Our Address</h3>
                      <p className="text-gray-600 text-sm mt-1">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Call Us</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[var(--primary)] transition-colors">
                          {siteConfig.contact.phone}
                        </a>
                      </p>
                      <p className="text-gray-600 text-sm">
                        <a href={`tel:${siteConfig.contact.phone2}`} className="hover:text-[var(--primary)] transition-colors">
                          {siteConfig.contact.phone2}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Email Us</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--primary)] transition-colors">
                          {siteConfig.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Office Hours</h3>
                      <p className="text-gray-600 text-sm mt-1">{siteConfig.contact.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-base p-7 md:p-9">
                <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[var(--primary)] mx-auto mb-4">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700 text-sm">
                      Thank you for contacting BWC Vadodara. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary mt-6 text-xs px-4 py-2 mx-auto inline-block"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-gray-700">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-[var(--primary)] text-sm transition-all bg-white"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-gray-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-[var(--primary)] text-sm transition-all bg-white"
                          placeholder="johndoe@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-gray-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-[var(--primary)] text-sm transition-all bg-white"
                        placeholder="Inquiry about volunteering / donating"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-[var(--primary)] text-sm transition-all bg-white resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full md:w-auto py-3 px-6 text-sm flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="w-full h-[450px] relative">
          <iframe
            src={siteConfig.contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Maps Location of Blind Welfare Council of Vadodara"
            aria-label="Google Maps Location of Blind Welfare Council of Vadodara"
          />
        </div>
      </section>
    </div>
  );
}
