import { Send } from "lucide-react";
import { useId, useState, type FormEvent } from "react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;
  const [submitting, setSubmitting] = useState(false);
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
      const res = await fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      window.location.href = "/contact?success=1";
    } catch (err) {
      setError("L'envoi a échoué. Merci de réessayer ou de nous appeler.");
      setSubmitting(false);
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/"
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
