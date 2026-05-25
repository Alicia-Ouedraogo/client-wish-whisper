import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Convention,
});

const DESTINATION_EMAIL = "ouedraogoalicia22@gmail.com";

const PACKS = [
  {
    id: "individuel",
    name: "Pack Individuel",
    price: "Sur devis",
    tagline: "Une seule plateforme — TikTok, Instagram OU Facebook",
    items: [
      "3 postes/sem dont 2 affiches + 1 tweet",
      "OU 3 publications/sem + stories chaque jour + tweets interactifs",
      "OU 3 posts/sem + tweets interactifs",
      "(Le client coche son option)",
    ],
  },
  {
    id: "duo",
    name: "Pack Duo",
    price: "Sur devis",
    tagline: "Deux plateformes au choix",
    items: [
      "Duo Instagram + TikTok",
      "Duo TikTok + Facebook",
      "Duo Instagram + Facebook",
    ],
  },
  {
    id: "minimum-duo",
    name: "Pack Minimum Duo",
    price: "65 000 FCFA ≈ 800 DH / mois",
    tagline: "Pack standard duo — Spécial petites PME",
    items: [
      "Gestion de 2 réseaux sociaux",
      "Contenu adapté aux besoins de la PME",
      "Convention + reçu de travail mensuel",
    ],
  },
  {
    id: "standard-trio",
    name: "Pack Standard Trio",
    price: "120 000 FCFA / mois",
    tagline: "Facebook + TikTok + Instagram — Notre pack phare",
    items: [
      "3 publications / jour",
      "Stories tous les jours",
      "Tweets interactifs quotidiens sur les 3 réseaux",
      "Cahier de charges personnalisé",
    ],
  },
];

const SERVICES_PLUS = [
  { name: "Gestion YouTube (montage, générique, sous-titres, logo)", price: "+150 000 FCFA/mois" },
  { name: "Gestion LinkedIn (8 posts/mois)", price: "+40 000 FCFA/mois" },
  { name: "Gestion WhatsApp Business", price: "Sur devis" },
  { name: "Shooting photo pro à usage libre", price: "75 000 FCFA" },
  { name: "Shooting pour pages gérées", price: "50 000 FCFA/mois" },
  { name: "Vidéo pro (standards internationaux)", price: "75 000 FCFA/vidéo" },
  { name: "Pack 2 vidéos/mois (client externe)", price: "35 000 FCFA" },
  { name: "Pack 2 vidéos/mois (si on gère vos pages)", price: "20 000 FCFA" },
  { name: "Création site web + hébergement 1 an (renouvelable)", price: "Sur devis" },
  { name: "Stratégie digitale + conseil IT (client existant)", price: "Dès 45 000 FCFA/mois" },
  { name: "Stratégie complète + charte graphique (externe)", price: "65 000 FCFA/mois" },
  { name: "Charte graphique / identité visuelle", price: "Sur devis" },
  { name: "Création CV professionnel", price: "Sur devis" },
  { name: "Campagne publicitaire (Meta / Google Ads)", price: "Sur devis" },
];

const PROFILS = [
  "PME / TPE",
  "Grande entreprise / Institution",
  "Artiste / Musicien",
  "Influenceur / Créateur",
  "Marque personnelle",
  "Association / ONG",
];

const OBJECTIFS = [
  "Augmenter la notoriété",
  "Générer des ventes",
  "Construire une communauté engagée",
  "Lancer un nouveau produit / projet",
  "Améliorer mon image de marque",
  "Fidéliser ma clientèle",
];

function Convention() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    profil: "",
    reseaux: "",
    pack: "",
    servicesPlus: [] as string[],
    objectifs: [] as string[],
    budget: "",
    delai: "",
    message: "",
  });

  const toggleArr = (key: "servicesPlus" | "objectifs", val: string) => {
    setForm((f) => ({
      ...f,
      [key]: f[key].includes(val) ? f[key].filter((v) => v !== val) : [...f[key], val],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Nouvelle convention client — ${form.nom || "Sans nom"} (${form.pack || "Pack non choisi"})`;
    const body = [
      "═══════════════════════════════",
      "  NOUVELLE CONVENTION CLIENT",
      "         LG DIGITAL",
      "═══════════════════════════════",
      "",
      "── INFORMATIONS CLIENT ──",
      `Nom complet      : ${form.nom}`,
      `Email            : ${form.email}`,
      `Téléphone        : ${form.telephone}`,
      `Entreprise/Marque: ${form.entreprise}`,
      `Type de profil   : ${form.profil}`,
      `Réseaux sociaux  : ${form.reseaux}`,
      "",
      "── PACK CHOISI ──",
      `${form.pack || "Aucun pack sélectionné"}`,
      "",
      "── SERVICES PLUS ──",
      form.servicesPlus.length ? form.servicesPlus.map((s) => `  • ${s}`).join("\n") : "  (aucun)",
      "",
      "── OBJECTIFS ──",
      form.objectifs.length ? form.objectifs.map((o) => `  • ${o}`).join("\n") : "  (aucun)",
      "",
      "── BUDGET & DÉLAI ──",
      `Budget mensuel   : ${form.budget}`,
      `Délai souhaité   : ${form.delai}`,
      "",
      "── MESSAGE / BESOINS SPÉCIFIQUES ──",
      form.message || "(aucun)",
      "",
      "═══════════════════════════════",
      `Envoyé le ${new Date().toLocaleString("fr-FR")}`,
    ].join("\n");

    window.location.href = `mailto:${DESTINATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStep(4);
  };

  const steps = ["Profil", "Pack", "Services +", "Validation"];

  return (
    <main className="min-h-screen px-4 py-10 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              LG DIGITAL
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            <span className="gold-text">Convention</span> Client
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            Composez votre accompagnement digital sur-mesure. Une fois validé, votre convention nous est envoyée pour préparer votre contrat.
          </p>
        </header>

        {/* Stepper */}
        {step < 4 && (
          <div className="mb-10 flex items-center justify-center gap-2 md:gap-4">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2 md:gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-all ${
                      i <= step
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span className={`hidden text-xs md:block ${i <= step ? "text-primary" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-px w-8 md:w-16 ${i < step ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="gold-border rounded-2xl bg-card/60 p-6 backdrop-blur md:p-10">
          {/* Step 0 - Profile */}
          {step === 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold md:text-3xl">Parlez-nous de vous</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Nom complet *" value={form.nom} onChange={(v) => setForm({ ...form, nom: v })} required />
                <Field label="Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <Field label="Téléphone / WhatsApp *" value={form.telephone} onChange={(v) => setForm({ ...form, telephone: v })} required />
                <Field label="Entreprise / Marque" value={form.entreprise} onChange={(v) => setForm({ ...form, entreprise: v })} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Type de profil *</label>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                  {PROFILS.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setForm({ ...form, profil: p })}
                      className={`rounded-lg border px-3 py-2.5 text-sm transition-all ${
                        form.profil === p
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-input/40 hover:border-primary/50"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <Field
                label="Vos réseaux sociaux actuels (liens)"
                value={form.reseaux}
                onChange={(v) => setForm({ ...form, reseaux: v })}
                placeholder="Instagram, TikTok, Twitter, Facebook..."
              />
            </section>
          )}

          {/* Step 1 - Pack */}
          {step === 1 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold md:text-3xl">Choisissez votre pack</h2>
              <p className="text-sm text-muted-foreground">
                Tous nos packs incluent un cahier de charges personnalisé, un reçu de travail mensuel et l'évaluation des KPI.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {PACKS.map((p) => {
                  const selected = form.pack === p.name;
                  return (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setForm({ ...form, pack: p.name })}
                      className={`group relative flex h-full flex-col rounded-xl border p-5 text-left transition-all ${
                        selected
                          ? "border-primary bg-primary/5 shadow-[0_0_30px_-10px_var(--gold)]"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      {selected && (
                        <span className="absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                          ✓ CHOISI
                        </span>
                      )}
                      <h3 className="gold-text text-xl font-bold">{p.name}</h3>
                      <p className="mt-1 text-xs italic text-muted-foreground">{p.tagline}</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        {p.items.map((it) => (
                          <li key={it} className="flex gap-2">
                            <span className="text-primary">◆</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {/* Step 2 - Services Plus */}
          {step === 2 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold md:text-3xl">Services additionnels</h2>
              <p className="text-sm text-muted-foreground">Sélectionnez les services "Plus" qui complètent votre pack.</p>
              <div className="grid gap-2 md:grid-cols-2">
                {SERVICES_PLUS.map((s) => {
                  const sel = form.servicesPlus.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleArr("servicesPlus", s)}
                      className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                        sel ? "border-primary bg-primary/10" : "border-border bg-input/40 hover:border-primary/40"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                          sel ? "border-primary bg-primary text-primary-foreground" : "border-border"
                        }`}
                      >
                        {sel && "✓"}
                      </span>
                      {s}
                    </button>
                  );
                })}
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Vos objectifs principaux</h3>
                <div className="grid gap-2 md:grid-cols-2">
                  {OBJECTIFS.map((o) => {
                    const sel = form.objectifs.includes(o);
                    return (
                      <button
                        type="button"
                        key={o}
                        onClick={() => toggleArr("objectifs", o)}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                          sel ? "border-primary bg-primary/10" : "border-border bg-input/40 hover:border-primary/40"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                            sel ? "border-primary bg-primary text-primary-foreground" : "border-border"
                          }`}
                        >
                          {sel && "✓"}
                        </span>
                        {o}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Step 3 - Validation */}
          {step === 3 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold md:text-3xl">Finalisation</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Budget mensuel envisagé"
                  value={form.budget}
                  onChange={(v) => setForm({ ...form, budget: v })}
                  placeholder="Ex: 50 000 - 150 000 FCFA"
                />
                <Field
                  label="Délai de démarrage souhaité"
                  value={form.delai}
                  onChange={(v) => setForm({ ...form, delai: v })}
                  placeholder="Ex: Immédiat, dans 2 semaines..."
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message / besoins spécifiques</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-all focus:border-primary"
                  placeholder="Parlez-nous de votre projet, vos attentes, votre univers..."
                />
              </div>

              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                <p className="font-semibold text-primary">Récapitulatif</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Pack : <span className="text-foreground">{form.pack || "—"}</span></li>
                  <li>• Services + : <span className="text-foreground">{form.servicesPlus.length || 0} sélectionné(s)</span></li>
                  <li>• Objectifs : <span className="text-foreground">{form.objectifs.length || 0} défini(s)</span></li>
                </ul>
                <p className="mt-3 text-xs italic">
                  En validant, votre client mail s'ouvrira avec votre convention prête à être envoyée à LG DIGITAL.
                </p>
              </div>
            </section>
          )}

          {/* Step 4 - Success */}
          {step === 4 && (
            <section className="space-y-6 py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl text-primary-foreground">
                ✓
              </div>
              <h2 className="text-3xl font-bold">Merci !</h2>
              <p className="mx-auto max-w-md text-muted-foreground">
                Votre convention a été préparée. Si votre client mail ne s'est pas ouvert, envoyez-la manuellement à{" "}
                <a href={`mailto:${DESTINATION_EMAIL}`} className="text-primary underline">
                  {DESTINATION_EMAIL}
                </a>
                . Nous vous recontacterons sous 24-48h pour la signature du contrat.
              </p>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="mt-4 rounded-lg border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Nouvelle convention
              </button>
            </section>
          )}

          {/* Navigation */}
          {step < 4 && (
            <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground disabled:opacity-30"
              >
                ← Précédent
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
                >
                  Suivant →
                </button>
              ) : (
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_0_30px_-8px_var(--gold)] transition-all hover:opacity-90"
                >
                  Envoyer ma convention ✦
                </button>
              )}
            </div>
          )}
        </form>

        <footer className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} LG DIGITAL — Politique de travail professionnelle & confidentielle
        </footer>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-input/40 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary"
      />
    </div>
  );
}
