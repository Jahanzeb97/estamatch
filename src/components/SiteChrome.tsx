import { useEffect, useState } from "react";
import "./site-chrome.css";

const LOGO = "/home/assets/estamatch-logo.svg";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <nav className={`es-chrome es-top${open ? " open" : ""}`} aria-label="Main">
      <div className="es-wrap">
        <a href="/" className="es-logo" aria-label="EstaMatch">
          <img src={LOGO} width={164} height={27} alt="EstaMatch" />
        </a>
        <button
          className="es-menu-btn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-links"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="es-links" id="site-links" onClick={() => setOpen(false)}>
          <a href="/#assistant">AI assistant</a>
          <a href="/#meta">Meta ads</a>
          <a href="/#calling">AI calling</a>
          <a href="/#outreach">Outreach</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
        </div>
        <a className="es-btn es-btn-dark" href="/contact">Book a demo</a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="es-chrome es-foot">
      <div className="es-wrap">
        <div>
          <a href="/" className="es-logo">
            <img src={LOGO} width={164} height={27} alt="EstaMatch" />
          </a>
          <p style={{ marginTop: 10, maxWidth: 320 }}>
            The AI sales assistant and CRM for any business that sells through a sales team. A product by Improdata.
          </p>
          <p style={{ marginTop: 18 }}>© 2026 Improdata. All rights reserved.</p>
        </div>
        <div className="es-cols">
          <div>
            <p className="es-fh">Product</p>
            <a href="/#assistant">AI assistant</a>
            <a href="/#meta">Meta ads</a>
            <a href="/#features">CRM</a>
            <a href="/#pricing">Pricing</a>
          </div>
          <div>
            <p className="es-fh">Company</p>
            <a href="/contact">Book a demo</a>
            <a href="/#faq">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
