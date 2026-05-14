import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white text-brand-navy mt-auto border-t border-brand-navy/10">
      <div className="max-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Logo variant="horizontal" className="mb-6" />
            <p className="text-brand-navy/60 text-sm leading-relaxed max-w-sm">
              Alethia Capital is an Australian private credit lender providing flexible, property-backed funding solutions assessed with commercial judgment and institutional discipline.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-navy font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4 text-brand-navy/70 text-sm font-medium">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/what-we-fund" className="hover:text-brand-gold transition-colors">What We Fund</Link></li>
              <li><Link to="/specialised-funding" className="hover:text-brand-gold transition-colors">Specialised Funding</Link></li>
              <li><Link to="/for-brokers" className="hover:text-brand-gold transition-colors">For Brokers</Link></li>
              <li><Link to="/for-borrowers" className="hover:text-brand-gold transition-colors">For Borrowers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-navy font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
            <ul className="space-y-4 text-brand-navy/70 text-sm font-medium">
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Submit a Deal</Link></li>
              <li><a href="mailto:info@alethiacapital.com.au" className="hover:text-brand-gold transition-colors">info@alethiacapital.com.au</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-brand-navy/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-navy/40">
          <p>© 2025 Alethia Capital. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
