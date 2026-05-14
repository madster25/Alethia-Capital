import { motion } from "motion/react";

export default function Disclaimer() {
  return (
    <div className="bg-brand-surface pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-brand shadow-sm border border-brand-navy/10"
        >
          <div className="disclaimer prose prose-slate max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">DISCLAIMER</h1>
            <div className="text-brand-navy/60 text-sm mb-8 pb-8 border-b border-brand-navy/10 font-bold uppercase tracking-widest">
              <p className="mb-1">Alethia Capital Pty Ltd (ACN 693 793 047)</p>
              <p>Last updated: 14 May 2026</p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">1. General Information Only</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                1.1 The content published on this Website is provided by Alethia Capital Pty Ltd (ACN 693 793 047) (Alethia Capital, we, us or our) for general informational purposes only.
              </p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                1.2 The Website provides an overview of Alethia Capital's funding capabilities, including property-backed private credit, property development equity financing and renewable energy financing. The content is not comprehensive and does not take into account your individual circumstances, objectives, financial situation, needs or requirements.
              </p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                1.3 Nothing on this Website is intended to be, or should be read as, a definitive or complete statement on any subject. Information is presented at a general level and is not a substitute for independent professional advice tailored to your specific situation.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                1.4 Before making any decision or taking any action based on information published on this Website, you should obtain independent professional advice from a suitably qualified adviser.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">2. No Financial, Investment, Legal, Tax or Credit Advice</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">2.1 Nothing on this Website constitutes, and must not be construed or relied upon as:</p>
              <ul className="list-none space-y-4 mb-6 ml-4">
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                  <span className="font-bold min-w-[24px]">(a)</span>
                  <span>financial product advice within the meaning of the Corporations Act 2001 (Cth) or otherwise;</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                  <span className="font-bold min-w-[24px]">(b)</span>
                  <span>investment advice or a recommendation to acquire, hold or dispose of any investment, financial product or security;</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                  <span className="font-bold min-w-[24px]">(c)</span>
                  <span>legal advice on any matter whatsoever;</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                  <span className="font-bold min-w-[24px]">(d)</span>
                  <span>tax advice or guidance on your tax position, obligations or entitlements; or</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                  <span className="font-bold min-w-[24px]">(e)</span>
                  <span>credit advice or credit assistance of any kind.</span>
                </li>
              </ul>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                2.2 Alethia Capital does not hold an Australian Financial Services Licence (AFSL) in connection with the general information content published on this Website. Nothing on this Website is intended to constitute the provision of financial services requiring an AFSL.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                2.3 You should consult a suitably qualified and appropriately licensed professional before making any financial, investment, legal, tax or credit decision.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">3. No Offer, Invitation, Recommendation or Commitment</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">3.1 Nothing on this Website constitutes, and must not be construed as:</p>
              <ul className="list-none space-y-4 mb-6 ml-4">
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(a)</span>
                    <span>an offer to provide funding, credit, equity or any other financial accommodation to any person;</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(b)</span>
                    <span>an invitation to apply for, or a pre-qualification for, any funding or investment product;</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(c)</span>
                    <span>a recommendation to enter into any transaction, arrangement or investment; or</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(d)</span>
                    <span>a commitment, indication or assurance that funding will be provided, or that any enquiry, application or proposal will be accepted, progressed or approved.</span>
                </li>
              </ul>
              <p className="text-brand-navy/80 leading-relaxed">
                3.2 All descriptions of Alethia Capital's funding capabilities, product types, deal parameters and market focus are provided for illustrative and informational purposes only. They do not represent a guarantee, commitment or promise of future funding availability, deal terms or outcomes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">4. Funding Subject to Assessment, Approval and Documentation</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">4.1 All funding decisions made by Alethia Capital are subject to:</p>
              <ul className="list-none space-y-4 mb-6 ml-4">
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(a)</span>
                    <span>Alethia Capital's credit assessment and internal approval processes;</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(b)</span>
                    <span>satisfactory completion of due diligence, valuation and risk review;</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(c)</span>
                    <span>negotiation and execution of formal legal documentation acceptable to Alethia Capital in its sole discretion; and</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(d)</span>
                    <span>satisfaction of all conditions precedent as determined by Alethia Capital from time to time.</span>
                </li>
              </ul>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">4.2 The submission of an enquiry, expression of interest, application or proposal through this Website — whether by completing a contact form, sending an email or otherwise — does not:</p>
              <ul className="list-none space-y-4 mb-6 ml-4">
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(a)</span>
                    <span>create any obligation on the part of Alethia Capital to consider, accept, progress or approve that submission; or</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(b)</span>
                    <span>give rise to any binding commitment, agreement or obligation of any kind on the part of Alethia Capital.</span>
                </li>
              </ul>
              <p className="text-brand-navy/80 leading-relaxed">
                4.3 No binding commitment to provide funding arises unless and until formal documentation has been duly negotiated, agreed and executed in writing by all parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">5. Discretion to Accept or Decline</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                5.1 Alethia Capital reserves the right to accept or decline any enquiry, application, proposal or opportunity, in whole or in part, at its absolute discretion, at any stage of a process and for any reason or for no stated reason.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                5.2 Alethia Capital is not obliged to provide reasons for any decision it makes in respect of any submission or proposal and accepts no liability to any person in connection with the exercise of that discretion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">6. Accuracy, Completeness and Currency</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                6.1 Whilst Alethia Capital uses reasonable endeavours to ensure that the information published on this Website is accurate at the time of publication, Alethia Capital makes no representation or warranty — express or implied — as to the accuracy, completeness, reliability or currency of any Website content.
              </p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                6.2 Website content may not reflect the most current market conditions, regulatory environment, business capabilities, funding parameters or transaction terms. Information may change at any time without notice, and this Website may not be updated on a real-time basis.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                6.3 You should independently verify any information on this Website before placing reliance upon it. Alethia Capital does not accept responsibility for any error, omission or inaccuracy in the Website content, howsoever arising.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">7. Past Examples and Case Studies</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">7.1 Any reference on this Website to past transactions, completed deals, deal examples, case studies or descriptions of Alethia Capital's funding history or capabilities:</p>
              <ul className="list-none space-y-4 mb-6 ml-4">
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(a)</span>
                    <span>is provided for illustrative purposes only and is not a representation that similar transactions will be available, approved or completed in the future;</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(b)</span>
                    <span>does not constitute a guarantee of any particular outcome, return, timeframe or funding structure; and</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(c)</span>
                    <span>may not be representative of all transactions considered, progressed or completed by Alethia Capital.</span>
                </li>
              </ul>
              <p className="text-brand-navy/80 leading-relaxed">
                7.2 Past funding activity and deal history are not a reliable indicator of future funding decisions, approval rates or outcomes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">8. Independent Professional Advice</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                8.1 The information on this Website is not a substitute for independent professional advice. Alethia Capital strongly recommends that you seek advice from a suitably qualified and licensed professional adviser — including, where relevant, a financial adviser, lawyer, accountant or tax adviser — before making any financial, investment, credit, legal or tax decision in connection with any matter described on this Website.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                8.2 Any professional adviser you engage should be made aware of your individual circumstances, objectives and requirements before providing advice.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">9. Commercial Purposes Only — No Consumer Credit</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                9.1 Alethia Capital provides funding exclusively for commercial and investment purposes. All lending and credit activities undertaken by Alethia Capital are directed at businesses, investors and commercial counterparties only.
              </p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                9.2 Alethia Capital does not provide, arrange or offer credit for personal, domestic or household purposes. Alethia Capital does not provide regulated credit under the National Consumer Credit Protection Act 2009 (Cth) (NCCP Act) or the National Credit Code. No funding described on this Website is "regulated credit" within the meaning of the NCCP Act.
              </p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                9.3 Alethia Capital does not hold an Australian Credit Licence (ACL) and is not required to do so in connection with the commercial and investment lending activities described on this Website.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                9.4 Nothing on this Website should be construed as an offer, solicitation, invitation or advertisement directed at individuals seeking consumer credit, personal loans or any other credit product regulated under the NCCP Act. If you are seeking consumer credit, you should contact an appropriately licensed credit provider or credit adviser.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">10. Limitation of Liability</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">10.1 To the maximum extent permitted by applicable law, including the Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010 (Cth)):</p>
              <ul className="list-none space-y-4 mb-6 ml-4">
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(a)</span>
                    <span>Alethia Capital excludes all liability to you or any other person for any loss, damage, cost or expense — whether direct, indirect, special, consequential, incidental or otherwise — arising out of or in connection with your access to or use of this Website or any reliance placed on its content; and</span>
                </li>
                <li className="text-brand-navy/80 leading-relaxed flex gap-4">
                    <span className="font-bold min-w-[24px]">(b)</span>
                    <span>all implied warranties, representations, conditions and terms in respect of this Website and its content are excluded to the fullest extent permitted by law.</span>
                </li>
              </ul>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                10.2 Nothing in this Disclaimer excludes, restricts or modifies any guarantee, right or remedy conferred by the Australian Consumer Law or any other applicable statute that cannot lawfully be excluded or modified. To the extent that any such non-excludable liability applies, Alethia Capital's liability is limited to the maximum extent permitted by applicable law.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                10.3 Nothing in this Disclaimer limits or excludes Alethia Capital's liability for its own gross negligence, wilful misconduct or fraud.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">11. Third-Party Links</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                11.1 This Website may contain hyperlinks to websites operated by third parties. Those links are provided for your convenience only and do not constitute an endorsement, approval, sponsorship or recommendation by Alethia Capital of any third-party website, its operator, or the content, products or services it provides.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                11.2 Alethia Capital has no control over, and accepts no responsibility for, the accuracy, availability, security or content of any third-party website. You access third-party websites entirely at your own risk and should review the terms of use and privacy policy of any third-party site you visit.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">12. Regulatory and Licensing Summary</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                12.1 Alethia Capital does not hold an Australian Financial Services Licence (AFSL) in connection with the general information content on this Website.
              </p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                12.2 Alethia Capital does not hold an Australian Credit Licence (ACL). Alethia Capital's lending activities relate exclusively to commercial and investment credit. Alethia Capital does not engage in credit activities regulated under the National Consumer Credit Protection Act 2009 (Cth) and is not required to hold an ACL in connection with those activities.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                12.3 If you have any questions about Alethia Capital's regulatory or licensing position, please contact us using the details set out in clause 14.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">13. Changes to This Disclaimer</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">
                13.1 Alethia Capital reserves the right to update or amend this Disclaimer at any time and without prior notice. The "Last updated" date at the top of this page will reflect the date of the most recent revision.
              </p>
              <p className="text-brand-navy/80 leading-relaxed">
                13.2 Your continued use of this Website following the publication of any updated Disclaimer constitutes your acceptance of the amended terms. If you do not accept any amendment, you should cease using this Website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">14. Contact Us</h2>
              <p className="text-brand-navy/80 leading-relaxed">
                For enquiries regarding this Disclaimer or the content of this Website, please contact Alethia Capital.
              </p>
              <div className="mt-8 bg-brand-surface p-6 rounded-brand border border-brand-navy/10">
                <p className="font-bold text-brand-blue mb-2">Alethia Capital Pty Ltd</p>
                <p className="text-brand-navy/80 mb-1">ACN: 693 793 047</p>
                <p className="text-brand-navy/80 mb-1">Email: <a href="mailto:info@alethiacapital.com.au" className="text-brand-gold hover:underline">info@alethiacapital.com.au</a></p>
                <p className="text-brand-navy/80">Address: Level 3, 45–51 Cross Street, Double Bay NSW 2028</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-brand-navy/10 text-center text-[10px] text-brand-navy/40 uppercase tracking-[0.2em] font-bold">
              <p>© 2026 Alethia Capital. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

