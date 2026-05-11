import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ForBrokers() {
  return (
    <div className="flex flex-col">
      <header className="bg-brand-navy py-stack-xl">
        <div className="max-container text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-stack-sm"
          >
            FOR BROKERS & INTRODUCERS
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-6xl mb-stack-md"
          >
            Send Us the Deals Others Sent Back.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We work with brokers who have quality property-backed transactions and need a lender that reads the whole file — not just the LVR field.
          </motion.p>
        </div>
      </header>

      <section className="py-stack-xl bg-white">
        <div className="max-container max-w-4xl">
          <div className="prose prose-lg text-brand-text/90 space-y-6">
            <p>
              You know when a transaction has merit. You also know the frustration of a file being declined because it sits outside a rigid policy setting — a threshold that takes no account of the actual commercial logic of what you have submitted.
            </p>
            <p>
              <strong>Alethia Capital gives those transactions a proper commercial assessment.</strong>
            </p>
            <p>
              We read the asset, the borrower, the exit and the structure. If the transaction makes commercial sense, we work to find a practical funding path and execute with the certainty you need to manage your client relationship professionally.
            </p>
          </div>
        </div>
      </section>

      <section className="py-stack-xl bg-brand-surface border-y border-brand-navy/10">
        <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="bg-white p-stack-lg rounded-brand border-t-4 border-brand-gold shadow-sm">
            <h2 className="text-2xl text-brand-blue mb-stack-md">What Makes a Strong Alethia Submission</h2>
            <ul className="space-y-4 font-bold text-brand-text/80">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold">✦</span>
                Property security with identifiable, realisable value
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold">✦</span>
                A borrower with relevant capacity or track record
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold">✦</span>
                A defined, realistic exit (not just 'bank soon')
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold">✦</span>
                A clear commercial purpose
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-stack-lg rounded-brand border border-brand-navy/10 shadow-sm">
            <h2 className="text-2xl text-brand-blue mb-stack-md">Our Commitment to You</h2>
            <ul className="space-y-4 text-brand-text/80">
              <li>• 24-48h response time to initial enquiries</li>
              <li>• Substantive, commercial feedback on deals</li>
              <li>• Indicative terms delivered quickly if we have appetite</li>
              <li>• Direct line to the decision-making team</li>
              <li>• Execution certainty once terms are agreed</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-stack-xl text-center">
        <div className="max-container">
          <h2 className="text-2xl md:text-3xl text-brand-blue mb-stack-lg italic max-w-3xl mx-auto">
            "We are not looking for perfect deals. We are looking for deals that make commercial sense."
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/submit-a-deal" className="bg-brand-blue text-white px-10 py-5 rounded-brand font-bold text-lg hover:shadow-lg transition-all active:scale-95 text-center">
              Submit a Deal Now →
            </Link>
            <Link to="/contact" className="border-2 border-brand-gold text-brand-gold px-10 py-5 rounded-brand font-bold text-lg hover:bg-brand-gold hover:text-white transition-all active:scale-95 text-center">
              Speak to Our Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
