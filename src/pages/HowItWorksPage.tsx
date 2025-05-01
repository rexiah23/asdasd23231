import React, { useEffect } from 'react';
import {
  FileCheck,
  Truck,
  Mail,
  MessageCircle,
  Car,
  Plane,
  ClipboardCheck,
  Shield,
  DollarSign,
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/getUrls';

export function HowItWorksPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappMessage = `Hi, I'd like to learn about importing a supercar from S. Korea`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">How It Works</h1>
        </div>

        {/* Import Process Summary */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <SummaryCard
              step={1}
              title="Reserve Your Car"
              icon={DollarSign}
              text="Place a fully refundable deposit and check for availability on Encar.com"
            />
            {/* Step 2 */}
            <SummaryCard
              step={2}
              title="In‑Person Inspection"
              icon={FileCheck}
              text="Our inspector reviews the car and we share Encar & KOTSA reports"
            />
            {/* Step 3 */}
            <SummaryCard
              step={3}
              title="Documentation Review"
              icon={ClipboardCheck}
              text="We verify insurance history, ownership, and export compliance"
            />
            {/* Step 4 */}
            <SummaryCard
              step={4}
              title="SG Supercars Approved"
              icon={Shield}
              text="Vehicles that meet our standards earn elgibility for our 3‑day return policy"
            />
            {/* Step 5 */}
            <SummaryCard
              step={5}
              title="Finalize Payment"
              icon={DollarSign}
              text="Wire SG Supercars the remaining balance minus your deposit"
            />
            {/* Step 6 */}
            <SummaryCard
              step={6}
              title="Shipping & Customs"
              icon={Truck}
              text="We handle de‑registration, shipping, customs, and delivery"
            />
            {/* Step 7 */}
            <SummaryCard
              step={7}
              title="Registration"
              icon={Car}
              text="Complete local inspections and register for road use"
            />
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <DetailSection
            step={1}
            title="Reserve Your Car"
            icon={Car}
            summary="Place a fully refundable deposit and check for availability on Encar.com."
          >
            <p>
              Begin by choosing the car you'd like to import. If you find one in our curated selection on
              <strong> sgsupercars.ca</strong>, simply open its detail page and click <em>"RESERVE NOW"</em>. You'll be
              prompted to provide a refundable deposit through our secure Stripe payment link.
            </p>
            <p>
              If you've found a car elsewhere—such as on <strong>Encar.com</strong> or another Korean auto
              marketplace—email the link to <strong>admin@sgsupercars.ca</strong>.
            </p>
            <Notice>
              Note: Your deposit is fully refundable until we actually purchase the vehicle on your behalf. We'll always
              obtain your final confirmation before proceeding with the purchase.
            </Notice>
          </DetailSection>

          {/* Step 2 */}
          <DetailSection
            step={2}
            title="In‑Person Inspection"
            icon={FileCheck}
            summary="Our in‑house inspector conducts a detailed review and we provide official Encar.com & KOTSA inspection reports."
          >
            <p>
              After receiving your deposit, our <strong>in‑house inspector</strong> visits the seller to carry out a
              meticulous interior and exterior inspection. They check for dings, dents, minor scratches, and any other
              imperfections, capturing high‑resolution photos and videos so you can assess every angle.
            </p>
            <p>
              In addition to our own findings, we share the <strong>official Encar.com inspection</strong> as well as the
              <strong> KOTSA (Korean Transportation Safety Authority) inspection report</strong>. These government‑mandated
              third‑party reports cover the car's mechanical systems—engine, transmission, suspension, brakes, and more—
              ensuring you receive a transparent, independent assessment enforced by Korean law.
            </p>
            <p>
              Together, these resources give you a 360‑degree view of the vehicle's cosmetic and mechanical condition
              before any purchase decision is made.
            </p>
          </DetailSection>

          {/* Step 3 */}
          <DetailSection
            step={3}
            title="Documentation Review"
            icon={ClipboardCheck}
            summary="We verify insurance history, ownership, and export compliance."
          >
            <p>
              Our team pulls the vehicle's Korean insurance and registration history, confirming it is free from liens,
              theft records, flood damage, or any other red flags. We also double‑check that the VIN and chassis numbers
              match across all documents.
            </p>
            <p>
              This due diligence ensures the car is legally clear to export and later register in Canada without
              surprises.
            </p>
          </DetailSection>

          {/* Step 4 */}
          <DetailSection
            step={4}
            title="SG Supercars Approved"
            icon={Shield}
            summary="Vehicles that meet our standards earn a 3‑day return policy."
          >
            <p>
              When both the physical inspection and documentation review pass our internal benchmarks, we label the car
              <strong> SG Supercars Approved</strong>. Approved vehicles automatically qualify for our <strong>3‑day
              return policy</strong> once they arrive in Canada. We're confident you'll love the car, but this policy
              gives you peace of mind.
            </p>
          </DetailSection>

          {/* Step 5 */}
          <DetailSection
            step={5}
            title="Finalize Payment"
            icon={DollarSign}
            summary="Wire SG Supercars the remaining balance minus your deposit."
          >
            <p>After approval, we send two DocuSign forms:</p>
            <DocBlock title="Purchase Agreement (Broker‑Service Agreement)">
              This contract covers pricing, our services, and the 3‑day return policy.
            </DocBlock>
            <DocBlock title="Power of Attorney">
              Allows us to complete customs paperwork and registration on your behalf.
            </DocBlock>
            <p>
              You'll wire the remaining balance directly to <strong>SG Supercars</strong> using the banking details
              provided in the Purchase Agreement. Funds are released to the seller only after you confirm that all
              conditions are met and you're ready to proceed.
            </p>
          </DetailSection>

          {/* Step 6 */}
          <DetailSection
            step={6}
            title="Shipping & Customs"
            icon={Truck}
            summary="We handle de‑registration, shipping, customs clearance, and delivery to your home or Vancouver pickup."
          >
            <p>
              We purchase the car in Korea, de‑register it, and arrange shipping to Canada. Choose between:
            </p>
            <Option title="RORO Shipping">2‑3 months</Option>
            <Option title="Container Shipping">1‑2 months</Option>
            <p>
              Our customs brokers clear the vehicle on arrival, pay duty and GST, and either prepare it for Vancouver
              pickup or coordinate insured delivery to your door.
            </p>
          </DetailSection>

          {/* Step 7 */}
          <DetailSection
            step={7}
            title="Registration"
            icon={FileCheck}
            summary="Complete local safety inspections and register your vehicle for road use."
          >
            <p>
              Once in your province, visit a licensed mechanic for an out‑of‑province safety inspection. Take the report
              and our paperwork to your local registry office, pay the fees, and receive your plates. You're ready to hit
              the road!
            </p>
          </DetailSection>

          {/* Contact */}
          <ContactSection whatsappUrl={whatsappUrl} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */
function SummaryCard({ step, title, icon: Icon, text }) {
  return (
    <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-green-400" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white text-center mb-2">
        {step}. {title}
      </h3>
      <p className="text-gray-300 text-center text-sm">{text}</p>
    </div>
  );
}

function DetailSection({ step, title, icon: Icon, summary, children }) {
  return (
    <section className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-8 h-8 text-green-400" />
        <h2 className="text-2xl font-bold text-white">
          {step}. {title}
        </h2>
      </div>
      <p className="italic text-gray-400 mb-4">{summary}</p>
      <div className="text-gray-300 space-y-4">{children}</div>
    </section>
  );
}

function Notice({ children }) {
  return (
    <p className="bg-green-600/10 p-4 rounded-lg text-green-400 font-semibold">{children}</p>
  );
}

function DocBlock({ title, children }) {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg mb-4">
      <p className="text-white font-semibold mb-2">{title}</p>
      <p>{children}</p>
    </div>
  );
}

function Option({ title, children }) {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg mb-4">
      <p className="text-white font-semibold mb-2">{title}</p>
      <p>{children}</p>
    </div>
  );
}

function ContactSection({ whatsappUrl }) {
  return (
    <section className="bg-zinc-900 rounded-xl p-8 border border-green-600/20 text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h2>
      <p className="text-gray-300 mb-8">
        We're here to guide you every step of the way, from your initial inquiry to handing over the keys.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
        >
          <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
        </a>
        <a
          href="mailto:admin@sgsupercars.ca"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition-colors"
        >
          <Mail className="w-5 h-5" /> Email Us
        </a>
      </div>
    </section>
  );
}
