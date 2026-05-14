import React, { useState } from "react";
import { motion } from "motion/react";

export default function SubmitDeal() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real production environment, you would send this to a backend API
    // that handles email delivery (e.g., using SendGrid, Postmark, etc.)
    // or store it in a database like Firestore.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-[60vh] justify-center items-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-brand shadow-xl border border-brand-navy/10 text-center max-w-2xl"
        >
          <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-brand-gold">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-brand-blue mb-4">Submission Received</h2>
          <p className="text-brand-text/80 text-lg">
            Thank you. Your transaction has been submitted and our team will review it shortly.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-brand-blue font-bold hover:text-brand-gold transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            ← Submit another deal
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <header className="bg-brand-navy py-stack-xl text-center">
        <div className="max-container">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-4xl md:text-6xl mb-stack-md"
          >
            Submit Your Deal. Get a Real Answer.
          </motion.h1>
          <p className="text-brand-gold/80 text-lg md:text-xl max-w-2xl mx-auto">
            We review every submission and respond within 24–48 hours — with substantive feedback, not a form letter.
          </p>
        </div>
      </header>

      <section className="py-stack-xl bg-brand-surface">
        <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-start">
          {/* Info Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="bg-white p-8 rounded-brand shadow-sm border border-brand-navy/10">
              <h2 className="text-xl font-bold text-brand-blue mb-4 border-b border-brand-navy/10 pb-4">The Essentials</h2>
              <p className="text-sm text-brand-text/70 mb-6">Give us the basics: the asset, the loan amount, the borrower profile and the exit. No full credit submission required at this stage.</p>
              <ul className="space-y-4">
                 {[
                   "We review within 1–2 business days.",
                   "We respond with genuine appetite or a clear reason.",
                   "If there is appetite, we move to terms.",
                   "All submissions are treated in confidence."
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 text-sm font-bold text-brand-text/90">
                     <span className="text-brand-gold">✦</span>
                     {item}
                   </li>
                 ))}
              </ul>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-brand shadow-lg border border-brand-navy/10">
            <div className="mb-stack-lg border-b border-brand-navy/10 pb-6 text-center lg:text-left">
              <p className="text-brand-blue font-bold text-lg">
                Submit a transaction for review and our team will come back to you with a clear response.
              </p>
            </div>

            <form className="space-y-stack-lg" onSubmit={handleSubmit}>
              {/* Section 1 */}
              <div className="space-y-stack-md">
                 <h3 className="text-xl font-bold text-brand-blue uppercase tracking-widest border-b border-brand-navy/10 pb-2">1. Your Details</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Full Name</label>
                       <input name="name" type="text" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Company</label>
                       <input name="company" type="text" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="Firm Name" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Email</label>
                       <input name="email" type="email" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Phone</label>
                       <input name="phone" type="tel" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="0478 883 337" required />
                    </div>
                 </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-stack-md">
                 <h3 className="text-xl font-bold text-brand-blue uppercase tracking-widest border-b border-brand-navy/10 pb-2">2. Transaction Overview</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Security Address</label>
                       <input name="address" type="text" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="Full property address" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Loan Amount Required</label>
                       <input name="amount" type="text" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="$0.00" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Estimated LVR (%)</label>
                       <input name="lvr" type="text" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="e.g. 65%" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">The Exit Strategy</label>
                       <textarea name="exit" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors resize-none" rows={3} placeholder="How will the loan be repaid?" required></textarea>
                    </div>
                 </div>
              </div>

              <div className="pt-stack-md">
                 <button 
                   type="submit"
                   className="w-full bg-brand-blue text-white py-5 rounded-brand font-bold text-lg hover:shadow-lg transition-all active:scale-[0.98] uppercase tracking-widest"
                 >
                    Submit Transaction
                 </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
