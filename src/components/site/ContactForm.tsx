export function ContactForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/contact?success=1"
      className={`grid gap-4 ${compact ? "" : "bg-card border rounded-lg p-6 shadow-card"}`}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><label>Ne pas remplir : <input name="bot-field" /></label></p>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">Nom *</span>
          <input required name="nom" className="border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">Email *</span>
          <input required type="email" name="email" className="border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">Téléphone *</span>
          <input required name="telephone" type="tel" className="border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">Localité</span>
          <input name="localite" className="border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-sm font-medium">Type de demande</span>
        <select name="type" className="border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-ring">
          <option>Automatisation</option>
          <option>Entretien</option>
          <option>Dépannage</option>
          <option>Équipement</option>
          <option>Produits</option>
          <option>Autre</option>
        </select>
      </label>
      <label className="grid gap-1.5">
        <span className="text-sm font-medium">Message *</span>
        <textarea required name="message" rows={5} className="border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
      </label>
      <button type="submit" className="btn-primary justify-self-start">Envoyer la demande</button>
    </form>
  );
}
