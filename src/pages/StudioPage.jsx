import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock,
  Image as ImageIcon,
  Info,
  MessageCircle,
  Palette,
  RotateCcw,
  Shapes,
  Shuffle,
  Sparkles,
  Type,
} from "lucide-react";
import Button from "../components/Button.jsx";
import ProductPreview from "../components/studio/ProductPreview.jsx";
import { bagById } from "../data/bags.js";
import {
  canRecolourPhoto,
  getYarn,
  photoFilter,
  productBlueprints,
  stitchStyles,
  yarnColors,
  zoneLabel,
} from "../data/yarns.js";
import { whatsappBaseUrl } from "../data/site.js";

const ZONES = ["body", "accent", "handle"];

const DEFAULT_DESIGN = {
  body: "coral",
  accent: "cream",
  handle: "camel",
};

export default function StudioPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Arriving from a product page pins the studio to that bag's photographs.
  const sourceProduct = location.state?.fromProduct
    ? bagById[location.state.fromProduct]
    : null;

  const [blueprintId, setBlueprintId] = useState("bag");
  const [zones, setZones] = useState(DEFAULT_DESIGN);
  const [activeZone, setActiveZone] = useState("body");
  const [stitch, setStitch] = useState("single");
  const [sizeId, setSizeId] = useState("regular");
  const [text, setText] = useState("");
  const [mode, setMode] = useState(sourceProduct ? "photo" : "illustration");
  const [shot, setShot] = useState(0);

  // The bag's own first colour is what the hue shift is measured from.
  const sourceYarn = sourceProduct?.colours?.[0]?.yarn || "coral";
  const recolourable = sourceProduct ? canRecolourPhoto(sourceYarn) : false;

  useEffect(() => {
    if (sourceProduct) {
      setMode("photo");
      setShot(0);
      setZones((z) => ({ ...z, body: sourceYarn }));
    }
  }, [sourceProduct, sourceYarn]);

  const blueprint = useMemo(
    () => productBlueprints.find((b) => b.id === blueprintId),
    [blueprintId]
  );

  const activeSize = useMemo(
    () => blueprint.sizes.find((s) => s.id === sizeId) || blueprint.sizes[0],
    [blueprint, sizeId]
  );

  const handleBlueprintChange = (id) => {
    const next = productBlueprints.find((b) => b.id === id);
    setBlueprintId(id);
    if (!next.sizes.some((s) => s.id === sizeId)) setSizeId(next.sizes[0].id);
    if (!next.allowsText) setText("");
    setMode("illustration"); // a different product type can't use this bag's photo
  };

  const randomise = () => {
    const pick = () => yarnColors[Math.floor(Math.random() * yarnColors.length)].id;
    let body = pick();
    let accent = pick();
    let handle = pick();
    while (accent === body) accent = pick();
    while (handle === body && handle === accent) handle = pick();
    setZones({ body, accent, handle });
    setStitch(stitchStyles[Math.floor(Math.random() * stitchStyles.length)].id);
  };

  const reset = () => {
    setZones(sourceProduct ? { ...DEFAULT_DESIGN, body: sourceYarn } : DEFAULT_DESIGN);
    setStitch("single");
    setText("");
    setSizeId(blueprint.sizes[0].id);
  };

  const stitchName = stitchStyles.find((s) => s.id === stitch)?.name;
  const photoMode = mode === "photo" && sourceProduct;

  const summary = useMemo(() => {
    const lines = [];
    if (photoMode) {
      lines.push(`Based on: ${sourceProduct.name}`);
      lines.push(`New main colour: ${getYarn(zones.body).name}`);
      lines.push(`(originally ${sourceProduct.colours[0].name})`);
    } else {
      lines.push(`Product: ${blueprint.name}`);
      lines.push(`Size: ${activeSize.name} (${activeSize.note})`);
      lines.push(`Stitch: ${stitchName}`);
      lines.push(`${zoneLabel(blueprint, "body")}: ${getYarn(zones.body).name}`);
      lines.push(`${zoneLabel(blueprint, "accent")}: ${getYarn(zones.accent).name}`);
      lines.push(`${zoneLabel(blueprint, "handle")}: ${getYarn(zones.handle).name}`);
      if (text) lines.push(`Personalisation: ${text}`);
      lines.push(`Approx. lead time: ${blueprint.leadDays} days`);
    }
    return lines.join("\n");
  }, [photoMode, sourceProduct, blueprint, activeSize, stitchName, zones, text]);

  const whatsappHref = `${whatsappBaseUrl}?text=${encodeURIComponent(
    `Hi Thyra World! I customised this on your website:\n\n${summary}\n\nCould you share availability and pricing?`
  )}`;

  const sendToForm = () => {
    navigate("/contact", {
      state: {
        enquiryType: "Custom order",
        message: `I customised this on the website:\n\n${summary}`,
      },
    });
  };

  const filter = photoMode ? photoFilter(sourceYarn, zones.body) : "none";

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-hero" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />

      <section className="section-padding">
        <div className="shell">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="eyebrow">
              <Sparkles aria-hidden="true" size={13} />
              Design Studio
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
              <span className="text-gradient">Made your </span>
              <span className="text-gradient-yarn">colours</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-bone-400 sm:text-lg">
              {sourceProduct
                ? `Try ${sourceProduct.name} in a different yarn. Every colour here is one we actually stock, so what you pick is what we can crochet.`
                : "Love one of our pieces but want it in your colours? Set it up here and send it over — every colour is yarn we actually stock."}
            </p>
          </div>

          {sourceProduct && (
            <div className="glass mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-between gap-3 p-3.5">
              <div className="flex items-center gap-3">
                <img
                  src={sourceProduct.photos[0].card}
                  alt=""
                  className="h-11 w-11 rounded-xl object-cover"
                />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone-500">
                    Customising
                  </p>
                  <p className="text-sm font-bold text-bone-50">{sourceProduct.name}</p>
                </div>
              </div>
              <Link
                to={`/products/${sourceProduct.id}`}
                className="text-xs font-semibold text-yarn-coral transition hover:underline"
              >
                Back to product
              </Link>
            </div>
          )}

          <div className="grid items-start gap-6 lg:grid-cols-[1fr_460px]">
            {/* ---------------- Preview ---------------- */}
            <div className="glass relative overflow-hidden p-5 sm:p-8 lg:sticky lg:top-24">
              <div
                className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl animate-drift"
                style={{ background: getYarn(zones.body).hex }}
              />
              <div
                className="pointer-events-none absolute -bottom-20 -right-12 h-72 w-72 rounded-full opacity-25 blur-3xl animate-drift-slow"
                style={{ background: getYarn(zones.accent).hex }}
              />

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone-500">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-yarn-sage" />
                  Live preview
                </div>

                <div className="flex flex-wrap gap-2">
                  {sourceProduct && (
                    <div className="flex overflow-hidden rounded-full border border-white/10">
                      <button
                        type="button"
                        onClick={() => setMode("photo")}
                        aria-pressed={photoMode}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition ${
                          photoMode
                            ? "bg-yarn-coral/15 text-yarn-coral"
                            : "text-bone-400 hover:text-bone-100"
                        }`}
                      >
                        <ImageIcon aria-hidden="true" size={13} />
                        Photo
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode("illustration")}
                        aria-pressed={!photoMode}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition ${
                          !photoMode
                            ? "bg-yarn-coral/15 text-yarn-coral"
                            : "text-bone-400 hover:text-bone-100"
                        }`}
                      >
                        <Shapes aria-hidden="true" size={13} />
                        Sketch
                      </button>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={randomise}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-bone-300 transition hover:border-white/20 hover:text-bone-100"
                  >
                    <Shuffle aria-hidden="true" size={13} />
                    Surprise me
                  </button>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-bone-300 transition hover:border-white/20 hover:text-bone-100"
                  >
                    <RotateCcw aria-hidden="true" size={13} />
                    Reset
                  </button>
                </div>
              </div>

              {photoMode ? (
                <>
                  <div className="relative mx-auto mt-4 max-w-md overflow-hidden rounded-2xl bg-ink-800">
                    <img
                      src={sourceProduct.photos[shot].full}
                      alt={`${sourceProduct.name} previewed in ${getYarn(zones.body).name}`}
                      className="w-full transition-[filter] duration-500"
                      style={{ filter }}
                    />
                  </div>

                  {sourceProduct.photos.length > 1 && (
                    <div className="mx-auto mt-3 grid max-w-md grid-cols-4 gap-2">
                      {sourceProduct.photos.map((p, i) => (
                        <button
                          key={p.card}
                          type="button"
                          onClick={() => setShot(i)}
                          aria-label={`Preview photo ${i + 1}`}
                          aria-pressed={i === shot}
                          className={`overflow-hidden rounded-lg border transition ${
                            i === shot
                              ? "border-yarn-coral/70"
                              : "border-white/[0.08] opacity-55 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={p.card}
                            alt=""
                            className="aspect-[4/5] w-full object-cover"
                            style={{ filter }}
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="relative mt-4 flex items-start gap-2.5 rounded-2xl border border-white/[0.07] bg-ink-900/60 p-3.5">
                    <Info
                      aria-hidden="true"
                      size={15}
                      className="mt-0.5 shrink-0 text-yarn-amber"
                    />
                    <p className="text-[11px] leading-5 text-bone-400">
                      {recolourable ? (
                        <>
                          This is a colour simulation on the real photo — it gives you the
                          idea, but the finished yarn will look richer than the screen
                          suggests. We confirm the exact shade with you before starting.
                        </>
                      ) : (
                        <>
                          <span className="font-semibold text-bone-200">
                            {sourceProduct.name}
                          </span>{" "}
                          is made in a neutral yarn, so an on-photo colour preview
                          can&apos;t show much. Switch to <em>Sketch</em> to explore
                          colours properly, or just tell us the shade you want.
                        </>
                      )}
                    </p>
                  </div>
                </>
              ) : (
                <div className="relative mx-auto mt-2 max-w-md">
                  <ProductPreview
                    productId={blueprint.id}
                    body={getYarn(zones.body)}
                    accent={getYarn(zones.accent)}
                    handle={getYarn(zones.handle)}
                    stitch={stitch}
                    text={blueprint.allowsText ? text : ""}
                    className="w-full drop-shadow-2xl"
                  />
                </div>
              )}

              {!photoMode && (
                <div className="relative mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/[0.07] bg-ink-900/60 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-bone-500">
                      Lead time
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1.5 font-display text-xl font-bold text-bone-50">
                      <Clock aria-hidden="true" size={15} className="text-yarn-amber" />
                      {blueprint.leadDays}d
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.07] bg-ink-900/60 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-bone-500">
                      Size
                    </p>
                    <p className="mt-1 font-display text-sm font-bold leading-tight text-bone-50">
                      {activeSize.name}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.07] bg-ink-900/60 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-bone-500">
                      Stitch
                    </p>
                    <p className="mt-1 font-display text-sm font-bold leading-tight text-bone-50">
                      {stitchName}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ---------------- Controls ---------------- */}
            <div className="space-y-4">
              {!photoMode && (
                <div className="glass p-5">
                  <p className="field-label">1 · Choose a product</p>
                  <div className="grid grid-cols-3 gap-2">
                    {productBlueprints.map((b) => {
                      const active = b.id === blueprintId;
                      return (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => handleBlueprintChange(b.id)}
                          aria-pressed={active}
                          className={`rounded-2xl border px-2 py-3 text-center transition ${
                            active
                              ? "border-yarn-coral/60 bg-yarn-coral/10 shadow-glow-coral"
                              : "border-white/[0.08] bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                          }`}
                        >
                          <span
                            className={`block text-[12px] font-bold leading-tight ${
                              active ? "text-bone-50" : "text-bone-300"
                            }`}
                          >
                            {b.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-bone-500">{blueprint.tagline}</p>
                </div>
              )}

              <div className="glass p-5">
                <p className="field-label">
                  {photoMode ? "Pick a new main colour" : "2 · Pick your yarn"}
                </p>

                {!photoMode && (
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {ZONES.map((zone) => {
                      const active = zone === activeZone;
                      const yarn = getYarn(zones[zone]);
                      return (
                        <button
                          key={zone}
                          type="button"
                          onClick={() => setActiveZone(zone)}
                          aria-pressed={active}
                          className={`flex flex-col items-center gap-2 rounded-2xl border px-2 py-3 transition ${
                            active
                              ? "border-white/30 bg-white/[0.08]"
                              : "border-white/[0.08] bg-white/[0.03] hover:border-white/20"
                          }`}
                        >
                          <span
                            className="h-8 w-8 rounded-full border-2 border-white/20 shadow-lg"
                            style={{ background: yarn.hex }}
                          />
                          <span className="text-[10px] font-bold uppercase tracking-wide text-bone-400">
                            {zoneLabel(blueprint, zone)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                <p className="mb-2 text-[11px] font-semibold text-bone-400">
                  {photoMode ? "Main colour" : zoneLabel(blueprint, activeZone)} —{" "}
                  <span className="text-bone-100">
                    {getYarn(zones[photoMode ? "body" : activeZone]).name}
                  </span>
                </p>

                <div className="grid grid-cols-8 gap-2">
                  {yarnColors.map((yarn) => {
                    const key = photoMode ? "body" : activeZone;
                    const selected = zones[key] === yarn.id;
                    return (
                      <button
                        key={yarn.id}
                        type="button"
                        title={yarn.name}
                        aria-label={`${yarn.name}${photoMode ? "" : ` for ${zoneLabel(blueprint, activeZone)}`}`}
                        aria-pressed={selected}
                        onClick={() => setZones((prev) => ({ ...prev, [key]: yarn.id }))}
                        className="group relative aspect-square rounded-full transition duration-200 hover:scale-110"
                        style={{
                          background: yarn.hex,
                          boxShadow: selected
                            ? `0 0 0 2px #0B0D12, 0 0 0 4px ${yarn.hex}, 0 6px 18px ${yarn.hex}66`
                            : "0 2px 8px rgba(0,0,0,0.4)",
                        }}
                      >
                        {selected && (
                          <Check
                            aria-hidden="true"
                            size={13}
                            strokeWidth={3.5}
                            className="absolute inset-0 m-auto text-ink-900"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {photoMode && (
                  <button
                    type="button"
                    onClick={() => setZones((z) => ({ ...z, body: sourceYarn }))}
                    className="mt-3 text-[11px] font-semibold text-bone-500 transition hover:text-bone-200"
                  >
                    ← Back to the original colour
                  </button>
                )}
              </div>

              {!photoMode && (
                <div className="glass p-5">
                  <p className="field-label">3 · Stitch &amp; size</p>
                  <div className="mb-4 grid grid-cols-2 gap-2">
                    {stitchStyles.map((s) => {
                      const active = s.id === stitch;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setStitch(s.id)}
                          aria-pressed={active}
                          className={`rounded-2xl border px-3 py-2.5 text-left transition ${
                            active
                              ? "border-yarn-violet/60 bg-yarn-violet/10"
                              : "border-white/[0.08] bg-white/[0.03] hover:border-white/20"
                          }`}
                        >
                          <span className="block text-xs font-bold text-bone-100">
                            {s.name}
                          </span>
                          <span className="mt-0.5 block text-[10px] leading-4 text-bone-500">
                            {s.note}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {blueprint.sizes.map((s) => {
                      const active = s.id === activeSize.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSizeId(s.id)}
                          aria-pressed={active}
                          className={`rounded-2xl border px-2 py-2.5 text-center transition ${
                            active
                              ? "border-yarn-sage/60 bg-yarn-sage/10"
                              : "border-white/[0.08] bg-white/[0.03] hover:border-white/20"
                          }`}
                        >
                          <span className="block text-xs font-bold text-bone-100">
                            {s.name}
                          </span>
                          <span className="mt-0.5 block text-[10px] text-bone-500">
                            {s.note}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {!photoMode && blueprint.allowsText && (
                <div className="glass p-5">
                  <p className="field-label">
                    <Type aria-hidden="true" size={11} className="mr-1 inline" />
                    4 · Add initials (optional)
                  </p>
                  <input
                    type="text"
                    value={text}
                    maxLength={12}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="e.g. SHUBHAM"
                    className="field-input"
                  />
                  <p className="mt-2 text-[11px] text-bone-500">
                    Up to 12 characters, stitched or embroidered on.
                  </p>
                </div>
              )}

              <div className="glass p-5">
                <p className="field-label">Send us your customisation</p>
                <div className="grid gap-2.5">
                  <Button href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" size={17} />
                    Send on WhatsApp
                  </Button>
                  <Button variant="secondary" onClick={sendToForm}>
                    <Palette aria-hidden="true" size={17} />
                    Send via contact form
                    <ArrowRight aria-hidden="true" size={15} />
                  </Button>
                </div>
                <p className="mt-3 text-[11px] leading-5 text-bone-500">
                  Your full spec travels with the message — we&apos;ll reply with
                  availability, pricing, and timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
