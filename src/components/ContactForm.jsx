import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { enquiryTypes, formspreeEndpoint } from "../data/site.js";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
  // Freelance-specific
  experience: "",
  craftTypes: "",
  portfolio: "",
  // Learning-specific
  skillLevel: "",
  learnMode: "",
};

const experienceOptions = [
  "Just started (under 6 months)",
  "Comfortable (6 months – 2 years)",
  "Experienced (2–5 years)",
  "Very experienced (5+ years)",
];

const skillLevelOptions = [
  "Complete beginner — never held a hook",
  "Know the basics, want to improve",
  "Intermediate — can follow patterns",
];

const learnModeOptions = [
  "Online sessions",
  "In-person (Chandigarh / Nahan / nearby)",
  "Either works",
];

export default function ContactForm({ defaultType }) {
  const location = useLocation();
  // The Join Us buttons deep-link in with an intent (and sometimes a
  // pre-written message) attached to router state.
  const incoming = location.state || {};

  const [type, setType] = useState(
    incoming.enquiryType || defaultType || enquiryTypes[0].value
  );
  const [form, setForm] = useState({
    ...EMPTY,
    message: incoming.message || "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  // Deep links can change while the page is already mounted (e.g. Join Us →
  // Contact on the same route), so keep local state in step with router state.
  useEffect(() => {
    if (incoming.enquiryType) setType(incoming.enquiryType);
    if (incoming.message) setForm((f) => ({ ...f, message: incoming.message }));
    if (incoming.enquiryType || incoming.message) {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [incoming.enquiryType, incoming.message]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const isFreelance = type === "Freelance crocheter";
  const isLearning = type === "Learn crochet";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    // Only send the fields relevant to this intent — keeps the email readable.
    const payload = {
      _subject: `[Thyra World] ${type} — ${form.name || "New enquiry"}`,
      enquiryType: type,
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      message: form.message,
    };

    if (isFreelance) {
      payload.experience = form.experience;
      payload.craftTypes = form.craftTypes;
      payload.portfolio = form.portfolio;
    }
    if (isLearning) {
      payload.skillLevel = form.skillLevel;
      payload.preferredMode = form.learnMode;
    }

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        setForm(EMPTY);
        return;
      }

      const data = await res.json().catch(() => null);
      setErrorMsg(
        data?.errors?.map((x) => x.message).join(", ") ||
          "Something went wrong sending your message."
      );
      setStatus("error");
    } catch {
      setErrorMsg(
        "Couldn't reach the server. Check your connection, or message us on WhatsApp."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-8 text-center sm:p-12" id="contact-form">
        <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-candy-mint/15 text-candy-mint">
          <CheckCircle2 aria-hidden="true" size={30} />
        </span>
        <h3 className="font-display text-3xl font-bold text-ink-900">Message sent</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink-500">
          Thank you for reaching out. We read every message ourselves and usually
          reply within a day or two.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-700 transition hover:border-ink-200 hover:text-ink-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  const activeType = enquiryTypes.find((t) => t.value === type);

  return (
    <form onSubmit={handleSubmit} className="card p-5 sm:p-8" id="contact-form">
      {/* Intent picker */}
      <fieldset className="mb-6">
        <legend className="field-label">I&apos;m reaching out about</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {enquiryTypes.map((t) => {
            const active = t.value === type;
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => setType(t.value)}
                aria-pressed={active}
                className={`rounded-2xl border px-4 py-3 text-left transition ${
                  active
                    ? "border-candy-pink/60 bg-candy-pink/10 shadow-pink"
                    : "border-ink-100 bg-white hover:border-ink-200 hover:bg-white"
                }`}
              >
                <span className="block text-sm font-bold text-ink-900">{t.label}</span>
                <span className="mt-0.5 block text-[11px] leading-4 text-ink-400">
                  {t.blurb}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="cf-name">
            Your name *
          </label>
          <input
            id="cf-name"
            className="field-input"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="Full name"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="cf-email">
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            className="field-input"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="cf-phone">
            WhatsApp number
          </label>
          <input
            id="cf-phone"
            type="tel"
            className="field-input"
            value={form.phone}
            onChange={set("phone")}
            placeholder="+91 ..."
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="cf-city">
            City
          </label>
          <input
            id="cf-city"
            className="field-input"
            value={form.city}
            onChange={set("city")}
            placeholder="Where are you based?"
            autoComplete="address-level2"
          />
        </div>
      </div>

      {/* ---- Freelance-only fields ---- */}
      {isFreelance && (
        <div className="mt-4 grid gap-4 rounded-2xl border border-candy-violet/20 bg-candy-violet/[0.05] p-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-candy-violet">
              About your crochet work
            </p>
          </div>
          <div>
            <label className="field-label" htmlFor="cf-exp">
              How long have you been crocheting?
            </label>
            <select
              id="cf-exp"
              className="field-input"
              value={form.experience}
              onChange={set("experience")}
            >
              <option value="">Select...</option>
              {experienceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="cf-portfolio">
              Instagram or portfolio link
            </label>
            <input
              id="cf-portfolio"
              className="field-input"
              value={form.portfolio}
              onChange={set("portfolio")}
              placeholder="@yourhandle or a link"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="cf-craft">
              What do you most enjoy making?
            </label>
            <input
              id="cf-craft"
              className="field-input"
              value={form.craftTypes}
              onChange={set("craftTypes")}
              placeholder="Bags, amigurumi, coasters, wearables..."
            />
          </div>
        </div>
      )}

      {/* ---- Learning-only fields ---- */}
      {isLearning && (
        <div className="mt-4 grid gap-4 rounded-2xl border border-candy-mint/20 bg-candy-mint/[0.05] p-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-candy-mint">
              About your learning
            </p>
          </div>
          <div>
            <label className="field-label" htmlFor="cf-skill">
              Where are you starting from?
            </label>
            <select
              id="cf-skill"
              className="field-input"
              value={form.skillLevel}
              onChange={set("skillLevel")}
            >
              <option value="">Select...</option>
              {skillLevelOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="cf-mode">
              Preferred format
            </label>
            <select
              id="cf-mode"
              className="field-input"
              value={form.learnMode}
              onChange={set("learnMode")}
            >
              <option value="">Select...</option>
              {learnModeOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <p className="text-[11px] leading-5 text-ink-400 sm:col-span-2">
            We start sessions once enough people have joined the waitlist — we&apos;ll
            email you the moment there&apos;s a group in your area or timezone.
          </p>
        </div>
      )}

      <div className="mt-4">
        <label className="field-label" htmlFor="cf-message">
          {isFreelance
            ? "Tell us a little about yourself"
            : isLearning
              ? "Anything you'd especially like to learn?"
              : "Your message *"}
        </label>
        <textarea
          id="cf-message"
          className="field-input min-h-[140px] resize-y"
          required={!isFreelance && !isLearning}
          value={form.message}
          onChange={set("message")}
          placeholder={
            isFreelance
              ? "What you make, how much time you have each week, what you're hoping for..."
              : isLearning
                ? "Granny squares, amigurumi, reading patterns, making bags..."
                : "Tell us what you have in mind — colours, sizes, occasion, delivery date..."
          }
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-3 rounded-2xl border border-candy-pink/30 bg-candy-pink/10 p-4"
        >
          <AlertCircle aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-candy-pink" />
          <p className="text-sm leading-6 text-ink-700">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-candy-pink to-candy-pink px-6 py-3.5 text-sm font-bold text-white shadow-pink transition duration-300 hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? (
          <>
            <Loader2 aria-hidden="true" size={17} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send aria-hidden="true" size={17} />
            {activeType?.cta || "Send message"}
          </>
        )}
      </button>

      <p className="mt-3 text-center text-[11px] leading-5 text-ink-400">
        We only use your details to reply to you. Nothing is shared with anyone else.
      </p>
    </form>
  );
}
