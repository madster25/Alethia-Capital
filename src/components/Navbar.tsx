import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../constants";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "For Brokers", path: "/for-brokers" },
  { name: "For Borrowers", path: "/for-borrowers" },
  { name: "What We Fund", path: "/what-we-fund" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-brand-navy p-2 hover:bg-brand-navy/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[73px] z-40 bg-brand-surface md:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-6 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-bold uppercase tracking-widest py-2 border-b border-brand-navy/5",
                    location.pathname === link.path 
                      ? "text-brand-gold" 
                      : "text-brand-navy"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/submit-a-deal"
                  className="block w-full bg-brand-blue text-white px-6 py-4 rounded-brand font-bold uppercase tracking-wider text-sm text-center shadow-md transition-all active:scale-95"
                >
                  Submit a Deal
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
