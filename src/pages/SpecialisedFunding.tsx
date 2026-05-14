import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function SpecialisedFunding() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-brand-navy py-stack-xl relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none"></div>
        <div className="max-container flex flex-col items-center text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-6">
              Specialised Funding
            </span>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl mb-stack-md max-w-5xl leading-[1.1]">
              Structured Capital for Property Development and Renewable Energy Opportunities
            </h1>
            
            <div className="max-w-3xl space-y-6 mb-stack-lg">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Alethia Capital provides specialised funding solutions for transactions that require flexible capital, commercial judgment and practical execution.
              </p>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Alongside our property-backed lending activities, we work with developers, borrowers, project sponsors and asset owners seeking funding for property development and renewable energy opportunities.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto">
              <Link 
                to="/discuss-your-situation" 
                className="bg-brand-gold text-white px-6 md:px-10 py-4 md:py-5 rounded-brand font-bold text-base md:text-lg hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95 text-center"
              >
                Discuss Your Funding Requirement
              </Link>
              <Link 
                to="/submit-a-deal" 
                className="border-2 border-brand-blue text-white px-6 md:px-10 py-4 md:py-5 rounded-brand font-bold text-base md:text-lg hover:bg-brand-gold hover:border-brand-gold transition-all hover:-translate-y-1 active:scale-95 text-center"
              >
                Submit an Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-stack-xl bg-brand-surface border-t border-brand-navy/5">
        <div className="max-container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-navy text-center mb-stack-xl"
          >
            Specialised Funding Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Card 1: Property Development Equity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-stack-lg rounded-brand border-t-4 border-brand-gold shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Property Development Equity</h3>
              <div className="space-y-6 text-brand-text/80 leading-relaxed text-lg">
                <p>
                  We provide equity-style and structured funding for Australian property development opportunities.
                </p>
                <p>
                  We work with developers, borrowers and project sponsors seeking capital for acquisition, construction, completion, refinance or project growth.
                </p>
                <p>
                  Through our local expertise and capital relationships, we can assess transactions that may sit outside traditional lending channels.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Renewable Energy Financing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-stack-lg rounded-brand border-t-4 border-brand-gold shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Renewable Energy Financing</h3>
              <div className="space-y-6 text-brand-text/80 leading-relaxed text-lg">
                <p>
                  We provide funding solutions for renewable energy and energy infrastructure projects across Australia, from early-stage development through to more advanced project funding requirements.
                </p>
                <p>
                  We work with developers, project sponsors and asset owners seeking capital for site acquisition, land control, feasibility, approvals, grid connection, pre-construction, construction support, refinance or project expansion.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
