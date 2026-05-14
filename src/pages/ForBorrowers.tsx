import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ForBorrowers() {
  return (
    <div className="flex flex-col">
      <header className="bg-brand-navy py-stack-xl">
        <div className="max-container flex items-center justify-between">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-stack-sm"
            >
              FOR BORROWERS
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-4xl md:text-6xl mb-stack-md leading-tight"
            >
              Been Told No? <br /> We Look at the Full Picture.
            </motion.h1>
            <p className="text-white/80 text-lg md:text-xl">
              If a lender has assessed your situation against a policy checklist rather than its actual merits — you may still have options.
            </p>
          </div>
          <div className="hidden lg:block">
            <span className="material-symbols-outlined text-[160px] text-brand-gold opacity-20">account_balance</span>
          </div>
        </div>
      </header>

      <section className="py-stack-xl bg-white">
        <div className="max-container max-w-4xl">
          <p className="text-lg leading-relaxed text-brand-text/90">
            Alethia Capital provides property-backed lending to borrowers across Australia. We look at your property, your plan and how you intend to repay — not just whether one number fits a policy template. 
          </p>
          <p className="text-lg leading-relaxed text-brand-text/90 mt-6">
            We work with property owners, developers, investigators and business owners who need funding that responds to the realities of their situation. Whether you need to bridge a gap, refinance, release equity or fund a development, we are willing to engage with the specifics.
          </p>
        </div>
      </section>

      <section className="py-stack-xl bg-brand-surface border-y border-brand-navy/10">
        <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="bg-white p-stack-lg rounded-brand border-l-4 border-brand-gold shadow-sm">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Who We Can Help</h2>
            <p className="text-brand-text/70 mb-6">
              We work with borrowers whose circumstances may not fit a traditional bank lending model, including:
            </p>
            <ul className="space-y-4 text-brand-text/80">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0"></span>
                Self-employed borrowers and business owners with complex income or corporate structures.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0"></span>
                Investors requiring rapid capital for time-sensitive acquisitions.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0"></span>
                Developers needing short-term funding between project stages.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0"></span>
                Borrowers seeking to refinance, consolidate debt or improve their overall financial position.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0"></span>
                Property owners with strong equity, even where minor historical credit issues exist.
              </li>
            </ul>
          </div>

          <div className="bg-brand-blue text-white p-stack-lg rounded-brand shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <span className="material-symbols-outlined text-[120px]">info</span>
             </div>
             <h2 className="text-2xl font-bold mb-stack-md relative z-10 font-heading">Lenders assessing you as a policy, not a deal.</h2>
             <p className="text-white/80 leading-relaxed relative z-10 mb-6">
                Mainstream bank policies are designed for volume, not nuance. A rejection often means your scenario didn't fit their automated algorithm. 
             </p>
             <p className="text-xl font-bold italic text-brand-gold relative z-10">
                We look past the algorithm to assess the real-world viability of your proposal.
             </p>
          </div>
        </div>
      </section>

      <section className="py-stack-xl text-center">
        <div className="max-container">
          <h2 className="text-2xl font-bold text-brand-blue mb-8">Ready to Discuss Your Scenario?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/submit-a-deal" className="bg-brand-gold text-white px-10 py-5 rounded-brand font-bold text-lg hover:shadow-lg transition-all active:scale-95 text-center">
              Discuss Your Situation →
            </Link>
            <a href="tel:0478883337" className="border-2 border-brand-blue text-brand-blue px-10 py-5 rounded-brand font-bold text-lg hover:bg-brand-blue hover:text-white transition-all active:scale-95 text-center">
              Call Us Directly →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
