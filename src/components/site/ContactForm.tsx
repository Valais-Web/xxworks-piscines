import { Send } from "lucide-react";
import { useId } from "react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/contact?success=1"
      className={`grid gap-5 ${compact ? "" : "bg-card border rounded-2xl p-7 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"}`}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label htmlFor={id("bot")}>Ne pas remplir : <input id={id("bot")} name="bot-field" /></label>
      </p>

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
        <select id={id("type")} name="type" className="input-field">
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
      <button type="submit" className="btn-primary justify-self-start">
        <Send className="h-4 w-4" /> Envoyer la demande
      </button>
      <p className="text-xs text-muted-foreground">Réponse sous 48h ouvrées · Vos données restent confidentielles.</p>
    </form>
  );
}
