import { motion } from "motion/react";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-white py-stack-xl">
        <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-stack-xl items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl text-brand-blue mb-stack-md leading-tight"
            >
              Good Lending Takes More Than Capital. It Takes Judgment.
            </motion.h1>
            <p className="text-lg text-brand-text/80 leading-relaxed mb-6">
              In an industry overly reliant on rigid policy and automated checklists, true credit assessment has been lost. We believe that a successful lending partnership requires human judgment, an understanding of complex commercial realities, and a commitment to evaluating the merit of the people behind the deal.
            </p>
          </div>
          <div className="border-l-[6px] border-brand-gold pl-stack-md">
             <blockquote className="text-3xl md:text-4xl italic font-bold text-brand-blue leading-tight">
               "70% LVR approved. 72% LVR declined. Same asset. Same exit. That is not credit assessment — that is arithmetic."
             </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-stack-xl border-y border-brand-navy/10 text-center">
         <div className="max-container">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-stack-md block">ON THE NAME</span>
           <div className="flex items-center justify-center gap-4 mb-stack-lg">
             <span className="text-5xl md:text-7xl font-bold text-brand-navy lowercase">alethia</span>
             <span className="text-2xl md:text-4xl italic text-brand-gold">(ἀλήθεια)</span>
           </div>
           <p className="max-w-3xl mx-auto text-lg text-brand-text/80 leading-relaxed mb-6">
             Ancient Greek: truth, disclosure, the act of revealing something as it genuinely is. In classical philosophy, alethia describes the uncovering of reality — stripping away surface appearances to see what something truly is.
           </p>
           <p className="max-w-3xl mx-auto text-lg text-brand-text/80 leading-relaxed">
             It is the most precise description of how we approach credit: not through the lens of a policy framework, but by seeing a transaction for what it actually is — its asset, its borrower, its exit, its merit.
           </p>
           <p className="mt-10 font-bold text-brand-gold text-2xl">We see deals clearly.</p>
         </div>
      </section>

      <section className="py-stack-xl bg-white">
        <div className="max-container max-w-4xl space-y-16">
          <div className="group">
            <h2 className="text-3xl text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">Financial Strength</h2>
            <p className="text-brand-text/70 leading-relaxed">
              Alethia Capital is backed by a disciplined group of sophisticated capital partners, including warehouse lenders, family offices and institutional investors.
            </p>
            <p className="text-brand-text/70 leading-relaxed mt-4">
              This foundation gives us the capital depth and structuring flexibility to support complex property-backed transactions, while maintaining the funding certainty expected in serious private credit.
            </p>
          </div>
          
          <div className="w-full h-px bg-brand-navy/10"></div>

          <div className="group">
            <h2 className="text-3xl text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">Our Credit Philosophy</h2>
            <p className="text-brand-text/70 leading-relaxed font-bold">
              Our credit philosophy is grounded in commercial merit, disciplined assessment and experienced judgment.
            </p>
            <p className="text-brand-text/70 leading-relaxed mt-4">
              We recognise that metrics are important, but they do not tell the whole story. A strong transaction must be understood in context: the asset, the borrower, the structure, the purpose of funds and the exit strategy.
            </p>
            <p className="text-brand-text/70 leading-relaxed mt-4">
              We prioritise property-backed opportunities with sound fundamentals, credible borrowers and clear repayment pathways.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
