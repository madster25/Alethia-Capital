import { motion } from "motion/react";
import { Link } from "react-router-dom";

const FUNDING_CATEGORIES = [
  {
    title: "Bridging Finance",
    desc: "Short-term funding to capture opportunities, navigate capital events, and move quickly when traditional lenders cannot."
  },
  {
    title: "Refinance & Capital Release",
    desc: "Take out existing lenders or release equity for working capital. We assess these scenarios on their individual merits."
  },
  {
    title: "Residual Stock Lending",
    desc: "Release capital tied up in completed, unsold stock. We require a realistic sell-down strategy."
  },
  {
    title: "Development Funding",
    desc: "Support from land acquisition through to construction. We act as a capital partner who understands project risk."
  },
  {
    title: "Land Acquisition Funding",
    desc: "Secure land ahead of development approval. We focus on the underlying value of the site and the sponsor's track record."
  },
  {
     title: "Complex & Non-Standard",
     desc: "Solutions for scenarios that face mainstream appetite issues. If there is sound logic and tangible security, we will review it."
  }
];

export default function WhatWeFund() {
  return (
    <div className="flex flex-col">
      <header className="bg-brand-navy py-stack-xl px-5 text-center">
        <div className="max-container flex flex-col items-center">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-stack-md leading-tight"
          >
            Property-Backed Credit for Deals That Do Not Fit the Box.
          </motion.h1>
          <p className="text-white/70 max-w-3xl text-lg lg:text-xl leading-relaxed">
            Not every strong transaction fits a traditional lending model. We provide flexible private credit across a range of property-backed situations, assessing each deal on its asset, borrower, exit and commercial merit.
          </p>
        </div>
      </header>

      <section className="py-stack-xl bg-brand-surface">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {FUNDING_CATEGORIES.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-stack-md rounded-brand border-t-4 border-brand-gold shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-brand-blue mb-4">{cat.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-stack-xl bg-white text-center">
        <div className="max-container">
           <h2 className="text-3xl font-bold text-brand-blue mb-8">Don't fit a standard category?</h2>
           <p className="text-brand-text/80 max-w-2xl mx-auto mb-10">
              Many of our most successful transactions start as "non-standard" enquiries. Our team is happy to discuss the specifics of your transaction and provide a quick read on appetite.
           </p>
           <div className="flex justify-center">
              <Link to="/submit-a-deal" className="bg-brand-blue text-white px-10 py-5 rounded-brand font-bold text-lg hover:shadow-lg transition-all active:scale-95 text-center">
                Discuss Your Scenario
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
