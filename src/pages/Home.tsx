import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-brand-navy py-stack-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none"></div>
        <div className="max-container flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-4xl md:text-6xl lg:text-7xl mb-stack-md max-w-4xl"
          >
            We Assess the Full Transaction, Not Just the LVR.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-brand-gold text-lg md:text-xl font-bold max-w-2xl mb-stack-lg italic"
          >
            Australian private credit for property-backed transactions, assessed by people who understand assets, borrowers and exits.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link 
              to="/for-brokers" 
              className="bg-brand-gold text-white px-10 py-5 rounded-brand font-bold text-lg hover:shadow-lg transition-all active:scale-95 text-center"
            >
              I am a Broker →
            </Link>
            <Link 
              to="/for-borrowers" 
              className="border-2 border-brand-blue text-white px-10 py-5 rounded-brand font-bold text-lg hover:bg-brand-gold transition-all active:scale-95 text-center"
            >
              I am a Borrower →
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-stack-lg"
          >
            <Link to="/submit-a-deal" className="text-white/70 hover:text-brand-gold underline underline-offset-8 transition-colors text-sm uppercase tracking-widest font-bold">
              Submit a Deal →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-stack-xl bg-brand-surface">
        <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-stack-xl items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-stack-sm block">Our Principle</span>
            <h2 className="text-3xl md:text-4xl text-brand-blue mb-stack-md">
               The Alethia Principle:<br />Seeing Clearly.
            </h2>
            <p className="text-brand-text/80 leading-relaxed mb-6">
              Alethia (ἀλήθεια) is an ancient Greek concept meaning truth, disclosure and the uncovering of what is real.
            </p>
            <p className="text-brand-text/80 leading-relaxed mb-6">
              It is the principle behind how we assess credit. We look past surface metrics, rigid thresholds and policy-driven assumptions to understand the full reality of a transaction: the asset, the borrower, the exit and the commercial logic.
            </p>
            <p className="text-brand-text/80 leading-relaxed mb-6">
              Where other lenders see a reason to decline, we may see a transaction with genuine merit.
            </p>
            <p className="text-brand-text font-bold leading-relaxed">
              Clarity in assessment. Discipline in judgment. Transparency in communication. Execution in delivery.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 border-l-8 border-brand-gold rounded-r-lg shadow-sm"
          >
            <h3 className="text-brand-blue font-bold text-2xl mb-stack-md">The Three Questions</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-brand-gold font-bold">✦</span>
                <p className="text-brand-text/90 font-bold">Does the asset provide genuine security and a clear path to realization?</p>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-gold font-bold">✦</span>
                <p className="text-brand-text/90 font-bold">Does the borrower have the capacity and commercial experience to execute?</p>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-gold font-bold">✦</span>
                <p className="text-brand-text/90 font-bold">Is there a realistic, identified exit strategy to repay the facility?</p>
              </li>
            </ul>
            <p className="mt-8 pt-8 border-t border-brand-navy/10 italic text-brand-navy">
              If the answer to those three questions is yes — the conversation starts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-brand-navy py-stack-xl">
        <div className="max-container text-center">
          <motion.blockquote 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="text-8xl text-brand-gold/20 absolute -top-12 left-0 font-serif leading-none">"</span>
            <p className="text-2xl md:text-4xl text-white italic max-w-4xl mx-auto leading-tight relative z-10 font-medium">
              Eventualities are not assessed by arithmetic. A deal at 72% LVR is not automatically worse than one at 70%. Credit is about logic, not just policy.
            </p>
            <footer className="mt-stack-md text-brand-gold font-bold uppercase tracking-widest text-xs">
              The Alethia Credit Standard
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-stack-xl bg-brand-surface border-t border-brand-navy/10">
        <div className="max-container text-center">
          <h2 className="text-3xl md:text-5xl text-brand-blue mb-stack-md">Ready to discuss your situation?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-stack-lg">
            <Link to="/submit-a-deal" className="bg-brand-blue text-white px-10 py-5 rounded-brand font-bold text-lg hover:shadow-lg transition-all active:scale-95 text-center">
              Submit a Deal →
            </Link>
            <Link to="/submit-a-deal" className="border-2 border-brand-blue text-brand-blue px-10 py-5 rounded-brand font-bold text-lg hover:bg-brand-blue hover:text-white transition-all active:scale-95 text-center">
              Discuss Your Situation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
