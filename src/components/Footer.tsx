import { Link } from "react-router-dom";
import { IMAGES } from "../constants";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-auto border-t border-brand-gold/30">
      <div className="max-container py-stack-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-stack-lg">
          <div className="md:col-span-1">
            <Link to="/">
              <img 
                src={IMAGES.STACKED_LOGO} 
                alt="Alethia Capital" 
                className="h-24 w-auto object-contain mb-stack-sm"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              © 2025 Alethia Capital.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-stack-md">Company</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/what-we-fund" className="hover:text-brand-gold transition-colors">What We Fund</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-stack-md">Contact</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Enquire Now</Link></li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                1300 000 000
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
