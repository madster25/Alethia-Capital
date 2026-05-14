import { motion } from "motion/react";

export default function DiscussSituation() {
  return (
    <div className="flex flex-col">
      <header className="bg-brand-navy py-stack-xl">
        <div className="max-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-4xl md:text-6xl mb-stack-md leading-tight">Tell Us About Your Situation.</h1>
            <p className="text-brand-gold text-lg md:text-xl">
              We will review your enquiry and come back within 1–2 business days with a clear, honest response.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="bg-brand-surface py-stack-lg border-b border-brand-navy/10">
        <div className="max-container">
           <p className="text-lg text-brand-text max-w-3xl leading-relaxed">
             There is no obligation and no formal application required. Share enough for us to understand your situation and let you know whether we may be able to help.
           </p>
        </div>
      </section>

      <section className="py-stack-xl bg-white">
        <div className="max-container max-w-3xl">
          <form 
            className="bg-brand-surface p-8 md:p-12 rounded-xl border border-brand-navy/10 shadow-sm space-y-stack-lg"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const body = `Name: ${name}\nEmail: ${email}\nEnquiry details follow...`;
              window.location.href = `mailto:info@alethiacapital.com.au?subject=Discussion Enquiry - ${name}&body=${encodeURIComponent(body)}`;
            }}
          >
            <div className="space-y-stack-md">
              <h2 className="text-2xl font-bold text-brand-blue border-b border-brand-navy/10 pb-3">About You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Full Name</label>
                   <input name="name" type="text" className="w-full bg-white border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" required />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Email Address</label>
                   <input name="email" type="email" className="w-full bg-white border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" required />
                </div>
              </div>
            </div>

            <div className="space-y-stack-md">
              <h2 className="text-2xl font-bold text-brand-blue border-b border-brand-navy/10 pb-3">The Property</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Property Location</label>
                   <input type="text" className="w-full bg-white border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="Street, State, Suburb" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Property Type</label>
                     <input type="text" className="w-full bg-white border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="e.g. Commercial Office" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Estimated Value</label>
                     <input type="text" className="w-full bg-white border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" placeholder="$" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-stack-md">
              <h2 className="text-2xl font-bold text-brand-blue border-b border-brand-navy/10 pb-3">What You Need</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Enquiry Details</label>
                   <textarea className="w-full bg-white border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors resize-none" rows={4} placeholder="Briefly describe your situation and requirements..."></textarea>
                </div>
              </div>
            </div>

            <div className="pt-stack-md">
              <button className="w-full bg-brand-gold text-white py-5 rounded-brand font-bold text-lg hover:shadow-lg transition-all active:scale-[0.98]">
                Send My Enquiry →
              </button>
              <p className="text-center text-xs text-brand-text/50 mt-4 italic">
                Confidential. No obligation.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
