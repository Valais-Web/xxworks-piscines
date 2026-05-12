import { Send } from "lucide-react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
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
      <p className="hidden"><label>Ne pas remplir : <input name="bot-field" /></label></p>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5">
          <span className="field-label">Nom complet *</span>
          <input required name="nom" placeholder="Jean Dupont" className="input-field" />
        </label>
        <label className="grid gap-1.5">
          <span className="field-label">Email *</span>
          <input required type="email" name="email" placeholder="vous@exemple.ch" className="input-field" />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5">
          <span className="field-label">Téléphone *</span>
          <input required name="telephone" type="tel" placeholder="+41 78 000 00 00" className="input-field" />
        </label>
        <label className="grid gap-1.5">
          <span className="field-label">Localité</span>
          <input name="localite" placeholder="Estavayer-le-Lac" className="input-field" />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="field-label">Type de demande</span>
        <select name="type" className="input-field">
          <option>Automatisation</option>
          <option>Entretien</option>
          <option>Dépannage</option>
          <option>Équipement</option>
          <option>Produits</option>
          <option>Autre</option>
        </select>
      </label>
      <label className="grid gap-1.5">
        <span className="field-label">Votre message *</span>
        <textarea required name="message" rows={5} placeholder="Décrivez brièvement votre projet ou votre besoin…" className="input-field resize-y" />
      </label>
      <button type="submit" className="btn-primary justify-self-start">
        <Send className="h-4 w-4" /> Envoyer la demande
      </button>
      <p className="text-xs text-muted-foreground">Réponse sous 24h ouvrées · Vos données restent confidentielles.</p>
    </form>
  );
}
