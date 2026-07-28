import { Send, CheckCircle2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { SITE } from "@/lib/site-data";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;

    // Empty the honeypot before submission
    const bot = form.elements.namedItem("bot-field") as HTMLInputElement | null;
    if (bot) bot.value = "";

    const formData = new FormData(form);
    const entries: [string, string][] = [];
    formData.forEach((value, key) => {
      entries.push([key, typeof value === "string" ? value : ""]);
    });
    const body = new URLSearchParams(entries).toString();

    setSubmitting(true);
    try {
      // Post to the STATIC detection file, not "/". The whole site is served by a
      // catch-all Netlify SSR function (path: "/*"), which would intercept a POST to
      // "/" and return a rendered page (200) without ever handing the submission to
      // Netlify Forms. Posting to the static /__forms.html bypasses the SSR function
      // so the Forms pipeline records it. See https://opennext.js.org/netlify/forms
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      // Signal the successful submission to GTM (usable as a conversion trigger).
      window.dataLayer?.push({ event: "contact_form_success" });
      form.reset();
      setSubmitting(false);
      setSuccess(true);
    } catch (err) {
      setError("L'envoi a échoué. Merci de réessayer ou de nous appeler.");
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`grid gap-3 text-center place-items-center ${
          compact ? "" : "bg-card border rounded-2xl p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        }`}
      >
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="text-xl font-semibold">Merci, votre demande a bien été envoyée.</h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Nous revenons vers vous sous 48h ouvrées. Pour une urgence, appelez-nous au{" "}
          <a href={SITE.phoneHref} className="text-primary underline hover:no-underline">
            {SITE.phone}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSuccess(false)} className="btn-outline mt-2">
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={`grid gap-5 ${compact ? "" : "bg-card border rounded-2xl p-7 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"}`}
    >
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot: off-screen, never display:none */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Ne pas remplir : <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="grid gap-1.5">
          <label htmlFor={id("nom")} className="field-label">Nom complet *</label>
          <input id={id("nom")} required name="nom" placeholder="Jean Dupont" className="input-field" />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor={id("email")} className="field-label">Email *</label>
          <input id={id("email")} required type="email" name="email" placeholder="vous@exemple.ch" className="input-field" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="grid gap-1.5">
          <label htmlFor={id("tel")} className="field-label">Téléphone *</label>
          <input id={id("tel")} required name="telephone" type="tel" placeholder="+41 78 000 00 00" className="input-field" />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor={id("loc")} className="field-label">Localité</label>
          <input id={id("loc")} name="localite" placeholder="Estavayer-le-Lac" className="input-field" />
        </div>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={id("type")} className="field-label">Type de demande</label>
        <select id={id("type")} name="type" className="input-field" defaultValue="Automatisation">
          <option>Automatisation</option>
          <option>Entretien</option>
          <option>Dépannage</option>
          <option>Équipement</option>
          <option>Produits</option>
          <option>Autre</option>
        </select>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={id("msg")} className="field-label">Votre message *</label>
        <textarea id={id("msg")} required name="message" rows={5} placeholder="Décrivez brièvement votre projet ou votre besoin…" className="input-field resize-y" />
      </div>
      {error && <p className="text-sm text-destructive" role="alert">{error}</p>}
      <button type="submit" disabled={submitting} className="btn-primary justify-self-start disabled:opacity-60">
        <Send className="h-4 w-4" /> {submitting ? "Envoi…" : "Envoyer la demande"}
      </button>
      <p className="text-xs text-muted-foreground">Réponse sous 48h ouvrées · Vos données restent confidentielles.</p>
    </form>
  );
}
