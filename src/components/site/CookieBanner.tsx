import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("cookie-consent")) setShow(true);
  }, []);
  if (!show) return null;
  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };
  return (
    <div className="fixed bottom-4 inset-x-4 md:left-auto md:right-4 md:max-w-md z-50 bg-card border rounded-lg shadow-card p-4 text-sm">
      <p className="text-muted-foreground">
        Ce site utilise uniquement des cookies essentiels au bon fonctionnement.
      </p>
      <div className="mt-3 flex justify-end">
        <button onClick={accept} className="btn-primary !py-1.5 !px-3 text-xs">J'ai compris</button>
      </div>
    </div>
  );
}
