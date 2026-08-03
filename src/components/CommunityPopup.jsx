import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, Sparkles, X } from "lucide-react";
import { communityFormEndpoint } from "../data/site.js";
import { ThyraMark } from "./ThyraLogo.jsx";

const STORAGE_KEY = "thyra-community-popup";
const OPEN_DELAY_MS = 1400;

/**
 * Community sign-up popup.
 *
 * Sized to fit the viewport without scrolling — the panel is capped at 92dvh
 * (dvh, not vh, so mobile browser chrome doesn't push it off screen) and the
 * two optional social handles share a row on anything above `sm`.
 *
 * It appears once. Whether someone joins or dismisses it, that's recorded in
 * localStorage so returning visitors aren't nagged on every page load.
 */
export default function CommunityPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ email: "", phone: "", instagram: "", snapchat: "" });
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    let seen = null;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // Private browsing can throw on localStorage — just show the popup.
    }
    if (seen) return undefined;
    const t = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const remember = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
  };

  const close = () => {
    setOpen(false);
    remember(status === "success" ? "joined" : "dismissed");
  };

  // Escape to close, and don't let the page scroll behind the dialog.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // `close` reads `status` to decide what to remember, so both belong here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, status]);

  if (!open) return null;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(communityFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[Thyra World] New community member — ${form.email}`,
          list: "Community / new design notifications",
          email: form.email,
          phone: form.phone,
          instagram: form.instagram || "—",
          snapchat: form.snapchat || "—",
        }),
      });
      if (res.ok) {
        setStatus("success");
        remember("joined");
        return;
      }
      const data = await res.json().catch(() => null);
      setErrorMsg(
        data?.errors?.map((x) => x.message).join(", ") || "Something went wrong. Please try again."
      );
      setStatus("error");
    } catch {
      setErrorMsg("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="community-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 h-full w-full cursor-default bg-ink-900/45 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        className="relative flex max-h-[92dvh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-lift"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-candy-pink/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-candy-violet/20 blur-3xl" />

        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-400 transition hover:border-candy-pink hover:text-candy-pink"
        >
          <X aria-hidden="true" size={15} />
        </button>

        {status === "success" ? (
          <div className="relative px-6 py-10 text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-candy-mint/15 text-candy-mint">
              <CheckCircle2 aria-hidden="true" size={28} />
            </span>
            <h2 id="community-title" className="font-display text-2xl font-bold text-ink-900">
              You&apos;re on the list
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-ink-500">
              Thank you for joining. We&apos;ll let you know first when new designs and
              products drop.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-6 rounded-full bg-candy-gradient px-6 py-2.5 text-sm font-bold text-white shadow-pink transition hover:-translate-y-0.5"
            >
              Start browsing
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative flex flex-col overflow-y-auto px-5 pb-5 pt-6 sm:px-6">
            <div className="text-center">
              {/* Dropped on short viewports (small phones, landscape) so the
                  form still fits without scrolling. */}
              <ThyraMark className="mx-auto mb-2.5 h-10 w-10 [@media(max-height:660px)]:hidden" />
              <h2 id="community-title" className="font-display text-xl font-bold leading-tight text-ink-900 sm:text-2xl">
                Join the <span className="text-candy">Thyra World</span> community
              </h2>
              <p className="mx-auto mt-1 max-w-[17rem] text-[12.5px] leading-5 text-ink-500">
                Be first to see new designs and restocks.
              </p>
            </div>

            <div className="mt-4 grid gap-2.5">
              <div>
                <label className="field-label mb-1.5" htmlFor="cp-email">
                  Email *
                </label>
                <input
                  id="cp-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="field-input py-2.5 text-[13px]"
                />
              </div>

              <div>
                <label className="field-label mb-1.5" htmlFor="cp-phone">
                  Phone / WhatsApp *
                </label>
                <input
                  id="cp-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 ..."
                  autoComplete="tel"
                  className="field-input py-2.5 text-[13px]"
                />
              </div>

              {/* Two columns even on mobile — these are short handles, and
                  stacking them pushed the panel past the viewport. */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="field-label mb-1.5" htmlFor="cp-insta">
                    Instagram
                  </label>
                  <input
                    id="cp-insta"
                    value={form.instagram}
                    onChange={set("instagram")}
                    placeholder="@username"
                    className="field-input py-2.5 text-[13px]"
                  />
                </div>
                <div>
                  <label className="field-label mb-1.5" htmlFor="cp-snap">
                    Snapchat
                  </label>
                  <input
                    id="cp-snap"
                    value={form.snapchat}
                    onChange={set("snapchat")}
                    placeholder="@username"
                    className="field-input py-2.5 text-[13px]"
                  />
                </div>
              </div>
              <p className="-mt-1 text-[11px] text-ink-300">Social handles are optional.</p>
            </div>

            {status === "error" && (
              <p role="alert" className="mt-3 text-center text-[12px] font-semibold text-candy-pink">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-candy-gradient px-6 py-3 text-sm font-bold text-white shadow-pink transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? (
                <>
                  <Loader2 aria-hidden="true" size={16} className="animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  <Sparkles aria-hidden="true" size={16} />
                  Join the community
                </>
              )}
            </button>

            <button
              type="button"
              onClick={close}
              className="mt-2 text-[12px] font-semibold text-ink-400 transition hover:text-ink-700"
            >
              Maybe later
            </button>

            <p className="mt-2 text-center text-[10.5px] leading-4 text-ink-300">
              We only use these to send updates. Never shared.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
