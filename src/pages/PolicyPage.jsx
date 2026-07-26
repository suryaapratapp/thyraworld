import { Link } from "react-router-dom";
import { AlertTriangle, FileText, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { contactEmail, createWhatsAppLink, whatsappDisplay } from "../data/site.js";

/**
 * Shared shell for the Privacy and Refund pages. Both are plain prose with the
 * same layout, so they share one component and differ only in content.
 *
 * These are written in plain language for a small handmade business — they are
 * not a substitute for legal review, and the "last updated" date should be
 * bumped whenever the terms actually change.
 */

const LAST_UPDATED = "25 July 2026";

function Section({ title, children }) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-ink-500">{children}</div>
    </section>
  );
}

function Callout({ tone = "amber", icon: Icon = AlertTriangle, children }) {
  const tones = {
    amber: "border-candy-yellow/25 bg-candy-yellow/[0.07] text-candy-yellow",
    coral: "border-candy-pink/25 bg-candy-pink/[0.07] text-candy-pink",
    sage: "border-candy-mint/25 bg-candy-mint/[0.07] text-candy-mint",
  };
  return (
    <div className={`mt-5 flex items-start gap-3 rounded-2xl border p-4 ${tones[tone]}`}>
      <Icon aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
      <div className="text-sm leading-6 text-ink-700">{children}</div>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <PolicyShell
      eyebrow="Privacy Policy"
      icon={ShieldCheck}
      title="How we handle your information"
      description="Thyra World is a small, family-run handmade business. We collect as little as we can, and we never sell your details."
    >
      <Section title="What we collect">
        <p>
          When you fill in a form on this site, we receive whatever you type into it —
          typically your name, email address, WhatsApp number, city, and your message.
          If you apply to work with us as a freelance crocheter, that also includes your
          experience and any portfolio link you share. If you join the crochet learning
          waitlist, it includes your skill level and preferred format.
        </p>
        <p>
          If you contact us on WhatsApp or Instagram instead, we receive whatever those
          platforms show us — usually your profile name and phone number or handle.
        </p>
        <p>
          We do not run advertising trackers or analytics profiling on this site, and we
          do not use cookies to follow you around the web.
        </p>
      </Section>

      <Section title="Why we collect it">
        <p>
          Only to reply to you and to fulfil what you asked for — answering a product
          question, arranging a custom order, responding to a freelance application, or
          letting you know when crochet sessions start in your area.
        </p>
      </Section>

      <Section title="Who else sees it">
        <p>
          Form submissions are delivered to us through <strong>Formspree</strong>, which
          processes and forwards them to our email. Formspree handles the message in
          transit under their own privacy terms. Our email is hosted with Google.
        </p>
        <p>
          Beyond those service providers, we do not share, sell, rent, or trade your
          information with anyone. If you place an order, we share only the delivery
          address with the courier carrying your parcel.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          We keep enquiry emails for as long as they are useful for serving you — usually
          so we can look up a past order or a custom design you asked for. If you would
          like us to delete your details, just ask and we will.
        </p>
      </Section>

      <Section title="Your choices">
        <p>
          You can ask us at any time to tell you what we hold about you, correct it, or
          delete it. Email{" "}
          <a href={`mailto:${contactEmail}`} className="text-candy-pink hover:underline">
            {contactEmail}
          </a>{" "}
          or message us on WhatsApp and we will sort it out.
        </p>
      </Section>

      <Section title="Children">
        <p>
          This site is not aimed at children under 13, and we do not knowingly collect
          their information. If a child has sent us details, contact us and we will
          remove them.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          If we change how we handle your information, we will update this page and
          change the date at the top. Material changes will be noted clearly.
        </p>
      </Section>
    </PolicyShell>
  );
}

export function RefundPolicyPage() {
  return (
    <PolicyShell
      eyebrow="Refund &amp; Cancellation Policy"
      icon={FileText}
      title="Orders, cancellations, and refunds"
      description="Everything we make is crocheted by hand to order, which shapes how cancellations work. Here it is in plain language."
    >
      <Section title="How orders work">
        <p>
          Nothing is mass-produced here. When you place an order, we confirm the design,
          colours, size, and timeline with you — usually on WhatsApp — and then we start
          buying yarn and crocheting specifically for you. That confirmation is the point
          your order becomes active.
        </p>
      </Section>

      <Section title="Cancelling an order">
        <p>
          <strong className="text-ink-900">Within 24 hours of order confirmation:</strong>{" "}
          you can cancel for any reason and receive a full refund. We will not have cut
          yarn yet, so there is nothing lost.
        </p>
        <p>
          <strong className="text-ink-900">After 24 hours of order confirmation:</strong>{" "}
          cancellation is still possible, but <strong>50% of the payment will be
          deducted</strong> and the remaining 50% refunded. By that point the yarn has
          been bought and the work has begun, and a half-finished custom piece in your
          chosen colours generally cannot be sold to anyone else.
        </p>

        <Callout tone="amber">
          In short: cancel within 24 hours of confirmation for a full refund. After that,
          50% is deducted.
        </Callout>
      </Section>

      <Section title="If something arrives damaged or wrong">
        <p>
          If your parcel arrives damaged, or what you received is not what was agreed, tell
          us within <strong>48 hours of delivery</strong> and send us photographs. We will
          repair it, remake it, or refund it in full — whichever you prefer. This is on us,
          not you, and the 50% deduction does not apply.
        </p>
      </Section>

      <Section title="What handmade means for returns">
        <p>
          Because every piece is crocheted by hand, small variations in colour, texture,
          and size are normal and are not defects — they are the reason handmade looks
          different from factory-made. Screens also show colour differently from real
          yarn, so we confirm the actual shade with you before we start.
        </p>
        <p>
          For that reason we cannot accept returns simply because you changed your mind
          about a custom piece made in colours you chose. If you are unsure, ask us for a
          photo of the yarn before we begin — we are always happy to send one.
        </p>
      </Section>

      <Section title="How refunds are paid">
        <p>
          Refunds go back the same way you paid, usually within{" "}
          <strong>5–7 working days</strong> of us confirming the cancellation. We will
          tell you the moment it has been sent.
        </p>
      </Section>

      <Section title="Delivery">
        <p>
          We deliver across India. Timelines depend on the piece and your location, and we
          confirm both before starting. Once a parcel is with the courier, delivery timing
          is in their hands, though we will always help you chase it.
        </p>
      </Section>
    </PolicyShell>
  );
}

function PolicyShell({ eyebrow, icon, title, description, children }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-soft" />

      <section className="section-padding">
        <div className="shell">
          <SectionHeader eyebrow={eyebrow} icon={icon} title={title} description={description} />

          <div className="mx-auto max-w-3xl">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
              Last updated: {LAST_UPDATED}
            </p>

            <div className="card p-6 sm:p-9">{children}</div>

            <div className="card mt-6 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-ink-900">
                Questions about any of this?
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink-500">
                Ask us directly — a real person reads every message.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <Button href={createWhatsAppLink()} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" size={17} />
                  {whatsappDisplay}
                </Button>
                <Button href={`mailto:${contactEmail}`} variant="secondary">
                  <Mail aria-hidden="true" size={16} />
                  Email us
                </Button>
                <Button to="/contact" variant="ghost">
                  Contact form
                </Button>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-ink-400">
              See also:{" "}
              <Link to="/privacy" className="text-ink-500 hover:text-candy-pink">
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link to="/refund-policy" className="text-ink-500 hover:text-candy-pink">
                Refund &amp; Cancellation Policy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
