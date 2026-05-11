import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../constants";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "For Brokers", path: "/for-brokers" },
  { name: "For Borrowers", path: "/for-borrowers" },
  { name: "What We Fund", path: "/what-we-fund" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-brand-surface border-b border-brand-navy/10 py-4 shadow-sm">
      <div className="max-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={IMAGES.HORIZONTAL_LOGO} 
            alt="Alethia Capital" 
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand-gold",
                location.pathname === link.path 
                  ? "text-brand-blue border-b-2 border-brand-gold pb-1" 
                  : "text-brand-navy/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/submit-a-deal"
            className="bg-brand-blue text-white px-6 py-2.5 rounded-brand font-bold uppercase tracking-wider text-xs transition-all hover:bg-brand-navy active:scale-95 shadow-sm"
          >
            Submit a Deal
          </Link>
        </div>

        {/* Mobile menu button (Placeholder) */}
        <button className="md:hidden text-brand-navy p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
