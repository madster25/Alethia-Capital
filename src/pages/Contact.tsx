import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <header className="bg-brand-navy text-white py-stack-xl">
        <div className="max-container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-stack-md"
          >
            Talk to Our Team.
          </motion.h1>
          <p className="text-brand-gold text-lg md:text-xl max-w-2xl mx-auto">
            Accessible, direct and responsive. No call centres, no queues, no automated responses that pretend to be people.
          </p>
        </div>
      </header>

      <section className="py-stack-xl bg-brand-surface">
        <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-5 bg-white p-10 rounded-brand shadow-sm border-t-4 border-brand-gold h-full">
             <h2 className="text-2xl font-bold text-brand-blue mb-stack-lg uppercase tracking-widest">ALETHIA CAPITAL</h2>
             
             <div className="space-y-10">
               <div className="flex items-start gap-4 group">
                 <span className="material-symbols-outlined text-brand-gold">mail</span>
                 <div>
                    <p className="text-xs font-bold text-brand-text/50 uppercase tracking-widest mb-1">General Enquiries</p>
                    <a href="mailto:info@alethiacapital.com.au" className="text-brand-text font-bold hover:text-brand-gold transition-colors">info@alethiacapital.com.au</a>
                 </div>
               </div>

               <div className="flex items-start gap-4 group">
                 <span className="material-symbols-outlined text-brand-gold">call</span>
                 <div>
                    <p className="text-xs font-bold text-brand-text/50 uppercase tracking-widest mb-1">Direct Line</p>
                    <a href="tel:0478883337" className="text-brand-text font-bold hover:text-brand-gold transition-colors">04 7888 3337</a>
                 </div>
               </div>

               <div className="flex items-start gap-4 group">
                 <span className="material-symbols-outlined text-brand-gold">location_on</span>
                 <div>
                    <p className="text-xs font-bold text-brand-text/50 uppercase tracking-widest mb-1">Office</p>
                    <p className="text-brand-text font-bold">Sydney, Australia</p>
                 </div>
               </div>
             </div>

             <div className="mt-12 pt-8 border-t border-brand-navy/10">
                <p className="text-sm text-brand-text/70 italic">
                  <strong>Brokers:</strong> Deals submitted via the portal receive priority review within 24 hours.
                </p>
             </div>
          </div>

          <div className="lg:col-span-7 bg-white p-10 rounded-brand shadow-sm border border-brand-navy/10">
            <h3 className="text-2xl text-brand-blue mb-8">Send a Message</h3>
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('fullName');
                const body = `Name: ${name}\n\nMessage follows...`;
                window.location.href = `mailto:info@alethiacapital.com.au?subject=Contact Message - ${name}&body=${encodeURIComponent(body)}`;
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-text/60">Full Name</label>
                    <input name="fullName" type="text" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" required />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-text/60">Company</label>
                    <input name="company" type="text" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-brand-text/60">Email Address</label>
                 <input name="email" type="email" className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors" required />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-brand-text/60">Message</label>
                 <textarea className="w-full bg-brand-surface border border-brand-navy/10 rounded p-3 px-4 focus:border-brand-gold outline-none transition-colors resize-none" rows={5}></textarea>
              </div>
              <button className="bg-brand-blue text-white px-8 py-4 rounded-brand font-bold uppercase tracking-widest text-sm hover:shadow-lg transition-all active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
