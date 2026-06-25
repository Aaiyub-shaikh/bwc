"use client";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { QrCode, Smartphone, Building2, ShieldCheck, CheckCircle2, Copy } from "lucide-react";

const impactTiers = [
  {
    amount: "₹1,000",
    title: "Educational Kit",
    description: "Sponsor braille slate, stylus, and audio learning material for a visually impaired child.",
    details: "This kit helps a child transition from relying purely on speech to developing full braille literacy, which is vital for higher education.",
  },
  {
    amount: "₹2,500",
    title: "Mobility & Independence",
    description: "Provide a smart white cane and orientation/mobility training under certified experts.",
    details: "Helps visually impaired students navigate streets, public transport, and workspaces independently without needing an escort.",
  },
  {
    amount: "₹5,000",
    title: "Vocational & Skill Support",
    description: "Sponsor 1 month of computer literacy (screen readers) or craft entrepreneurship training.",
    details: "Empowers youth and women with the professional skills required to obtain mainstream jobs or run craft micro-businesses.",
  },
  {
    amount: "₹10,000",
    title: "Assistive Device Kit",
    description: "Provide a high-quality DAISY audio player or advanced electronic device for higher education.",
    details: "Enables blind students pursuing college degrees to easily listen to and navigate digital textbooks and research materials.",
  },
];

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(label);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  return (
    <div className="pt-28">
      {/* Hero */}
      <div className="gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <span className="section-tag bg-white/20 text-white border border-white/30 mb-4">Support BWC Vadodara</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Donate & Make a Difference
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Your generous contributions directly support education, sports, and livelihood programs for visually impaired individuals.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Tax Benefit Alert */}
          {siteConfig.donation.section80G && (
            <div className="max-w-4xl mx-auto bg-green-50/70 border border-green-200/50 rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h2 className="font-bold text-gray-800 text-sm">80G Tax Exemption Benefit</h2>
                <p className="text-gray-600 text-xs mt-1">
                  All donations made to Blind Welfare Council of Vadodara are eligible for 50% tax deduction under Section 80G of the Indian Income Tax Act. A receipt will be sent to your registered email address.
                </p>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto items-start">
            {/* Impact Tiers */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
                Choose Your Impact
              </h2>
              <p className="text-gray-600 text-sm">
                Select an impact tier to see how your contribution changes a life, or make a custom amount transfer.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {impactTiers.map((tier, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTier(selectedTier === idx ? null : idx)}
                    className={`card-base p-6 text-left transition-all duration-300 relative border ${
                      selectedTier === idx
                        ? "border-[var(--primary)] bg-green-50/10 shadow-md ring-2 ring-green-500/10"
                        : "border-gray-200/80 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl font-bold text-[var(--primary)] block mb-1">
                      {tier.amount}
                    </span>
                    <h3 className="font-bold text-gray-800 text-sm mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {tier.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {tier.description}
                    </p>

                    {selectedTier === idx && (
                      <div className="mt-4 pt-4 border-t border-gray-100 text-gray-700 text-xs leading-relaxed animate-slide-down">
                        {tier.details}
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Offline/Cheque note */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-xs text-gray-600 leading-relaxed">
                <span className="font-bold text-gray-700 block mb-1">Donating via Cheque or Demand Draft:</span>
                Draw your cheque/DD in favor of <strong className="text-gray-800">“{siteConfig.donation.accountName}”</strong> and post/courier it to our office address listed below or on the contact page.
              </div>
            </div>

            {/* Payment Details */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
                Transfer Methods
              </h2>

              {/* UPI & QR Code */}
              <div className="card-base p-6 border border-gray-200/85">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-[var(--primary)]">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">UPI / QR Code Transfer</h3>
                    <p className="text-gray-500 text-xxs">Scan QR code using any UPI app (GPay, PhonePe, Paytm)</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-5 flex flex-col items-center border border-gray-100">
                  {/* Generated QR Placeholder Container */}
                  <div className="relative w-44 h-44 bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
                    {/* Generates a nice styled QR Code visual since we don't have a real one */}
                    <div className="w-full h-full border-2 border-dashed border-gray-200 rounded flex flex-col items-center justify-center p-2 text-center text-gray-400">
                      <QrCode size={40} className="text-gray-300 mb-2" />
                      <span className="text-xxs font-semibold">BWC VADODARA</span>
                      <span className="text-xxs text-gray-400 mt-1">{siteConfig.donation.upiId}</span>
                    </div>
                  </div>

                  <div className="mt-4 text-center w-full">
                    <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">UPI ID</span>
                    <div className="flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 w-full max-w-[240px] mx-auto shadow-xxs">
                      <span className="text-xs font-semibold text-gray-700 select-all font-mono">{siteConfig.donation.upiId}</span>
                      <button
                        onClick={() => copyToClipboard(siteConfig.donation.upiId, "upi")}
                        className="text-gray-400 hover:text-[var(--primary)] transition-colors p-1"
                        title="Copy UPI ID"
                        aria-label="Copy UPI ID"
                      >
                        {copiedBank === "upi" ? <CheckCircle2 size={14} className="text-[var(--primary)]" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Transfer Details */}
              <div className="card-base p-6 border border-gray-200/85">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-[var(--primary)]">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Direct Bank Transfer (NEFT/RTGS/IMPS)</h3>
                    <p className="text-gray-500 text-xxs">Transfer directly from your banking portal</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs py-2 border-b border-gray-100">
                    <span className="text-gray-500">Account Name</span>
                    <span className="font-semibold text-gray-800 text-right">{siteConfig.donation.accountName}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs py-2 border-b border-gray-100">
                    <span className="text-gray-500">Bank Name</span>
                    <span className="font-semibold text-gray-800 text-right">{siteConfig.donation.bankName}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs py-2 border-b border-gray-100">
                    <span className="text-gray-500">Account Number</span>
                    <div className="flex items-center gap-1.5 font-semibold text-gray-800">
                      <span className="font-mono">{siteConfig.donation.accountNumber}</span>
                      <button
                        onClick={() => copyToClipboard(siteConfig.donation.accountNumber, "acc")}
                        className="text-gray-400 hover:text-[var(--primary)] transition-colors p-0.5"
                        aria-label="Copy Account Number"
                      >
                        {copiedBank === "acc" ? <CheckCircle2 size={12} className="text-[var(--primary)]" /> : <Copy size={12} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs py-2 border-b border-gray-100">
                    <span className="text-gray-500">IFSC Code</span>
                    <div className="flex items-center gap-1.5 font-semibold text-gray-800">
                      <span className="font-mono">{siteConfig.donation.ifscCode}</span>
                      <button
                        onClick={() => copyToClipboard(siteConfig.donation.ifscCode, "ifsc")}
                        className="text-gray-400 hover:text-[var(--primary)] transition-colors p-0.5"
                        aria-label="Copy IFSC Code"
                      >
                        {copiedBank === "ifsc" ? <CheckCircle2 size={12} className="text-[var(--primary)]" /> : <Copy size={12} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs py-2 border-b border-gray-100">
                    <span className="text-gray-500">Branch</span>
                    <span className="font-semibold text-gray-800 text-right">{siteConfig.donation.branch}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
