import { motion } from "motion/react";

export default function TermsOfUse() {
  return (
    <div className="bg-brand-surface pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-brand shadow-sm border border-brand-navy/10"
        >
          <div className="terms-of-use prose prose-slate max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">WEBSITE TERMS OF USE</h1>
            <p className="text-brand-navy/60 text-sm mb-8 pb-8 border-b border-brand-navy/10">Last updated: [14 May 2026]</p>

            <p className="mb-8 text-brand-navy/80 leading-relaxed">
              This website at [www.alethiacapital.com.au] (the <strong>Website</strong>) is owned and operated by [Alethia Capital Pty Ltd] ([ACN/ABN Placeholder]) (<strong>Alethia Capital</strong>, <strong>we</strong>, <strong>us</strong> or <strong>our</strong>). These Terms of Use govern your access to and use of the Website.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">1. Acceptance of Terms of Use</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">1.1 By accessing or using this Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use and our Privacy Policy, which is incorporated into these Terms of Use by reference.</p>
              <p className="text-brand-navy/80 leading-relaxed">1.2 We reserve the right to amend these Terms of Use at any time. Your continued use of the Website following any such amendment constitutes your acceptance of the amended Terms of Use.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">2. Use of the Website</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">2.1 You may only use this Website for lawful purposes and in accordance with these Terms of Use.</p>
              <p className="text-brand-navy/80 leading-relaxed">2.2 You are responsible for ensuring that your use of the Website complies with all applicable laws and regulations in your jurisdiction.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">3. General Information Only</h2>
              <p className="text-brand-navy/80 leading-relaxed">3.1 The content on this Website is provided for general information purposes only. It does not take into account your specific objectives, financial situation, or needs. It is not intended to be a substitute for professional advice.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">4. No Financial, Investment, Legal or Tax Advice</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">4.1 Nothing on this Website constitutes financial product advice under the <em>Corporations Act 2001</em> (Cth), nor does it constitute investment, legal, or tax advice.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">4.2 Alethia Capital does not hold an Australian Financial Services Licence (AFSL) in connection with the information provided on this Website. [Note: Client to confirm AFSL status and regulatory position].</p>
              <p className="text-brand-navy/80 leading-relaxed">4.3 You should seek independent professional financial, legal, and tax advice before making any decisions in relation to any information or funding opportunities described on this Website.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">5. No Offer, Invitation, Recommendation or Commitment to Lend</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">5.1 Nothing contained on this Website constitutes an offer, invitation, recommendation, or commitment by Alethia Capital to provide funding or any other financial accommodation.</p>
              <p className="text-brand-navy/80 leading-relaxed">5.2 Any indicative terms or parameters described on the Website are for illustrative purposes only, are subject to change without notice, and do not bind Alethia Capital in any way.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">6. Funding Subject to Assessment, Approval, Documentation and Due Diligence</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">6.1 All funding decisions are subject to Alethia Capital's internal credit assessment, formal approval processes, satisfactory due diligence, and the execution of formal legal documentation.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">6.2 The submission of an enquiry or application through the Website creates no obligation on Alethia Capital to provide funding. Alethia Capital reserved the right to decline any application at its absolute discretion without providing reasons.</p>
              <p className="text-brand-navy/80 leading-relaxed">6.3 No binding commitment to provide funding arises until formal loan and security documentation is executed by all relevant parties and all conditions precedent are satisfied.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">7. Commercial Purposes Only</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">7.1 All funding products and services described on this Website are provided exclusively for commercial and investment purposes.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">7.2 Alethia Capital does not provide credit for personal, domestic, or household purposes, nor any credit regulated under the <em>National Consumer Credit Protection Act 2009</em> (Cth).</p>
              <p className="text-brand-navy/80 leading-relaxed">7.3 Nothing on this Website is directed at, or intended for use by, individuals seeking consumer credit.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">8. Accuracy, Completeness and Currency</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">8.1 While we endeavour to ensure that the content on this Website is accurate, Alethia Capital makes no warranties or representations as to the accuracy, completeness, or currency of the information provided.</p>
              <p className="text-brand-navy/80 leading-relaxed">8.2 Content may not reflect the most current position and should be independently verified before being relied upon.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">9. User-Submitted Information</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">9.1 You warrant that all information you submit to us through the Website is accurate, complete, and not misleading.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">9.2 Alethia Capital reserves the right to use and retain information submitted by you in accordance with our Privacy Policy. We are under no obligation to respond to any submission.</p>
              <p className="text-brand-navy/80 leading-relaxed">9.3 You must not submit any content that is unlawful, defamatory, offensive, or that infringes the rights of any third party.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">10. Confidentiality Limitations</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">10.1 Submissions made via the Website are not considered confidential unless Alethia Capital has expressly agreed otherwise in writing.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">10.2 You acknowledge that transmission of information over the internet is not inherently secure and you submit information at your own risk.</p>
              <p className="text-brand-navy/80 leading-relaxed">10.3 The provision of unsolicited confidential information to Alethia Capital does not create any obligation of confidentiality or a fiduciary relationship.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">11. Intellectual Property</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">11.1 All content on this Website, including text, graphics, logos, and software, is the property of or licensed to Alethia Capital and is protected by Australian and international intellectual property laws.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">11.2 Your use of the Website is limited to personal, non-commercial browsing. All trade marks used on the Website are protected by law.</p>
              <p className="text-brand-navy/80 leading-relaxed">11.3 You must not copy, reproduce, modify, or commercially exploit any part of the Website without our prior written consent.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">12. Prohibited Use</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">12.1 You must not engage in any conduct that is unlawful, impersonates any person, or attempts to gain unauthorised access to our systems.</p>
              <p className="text-brand-navy/80 leading-relaxed">12.2 Prohibited conduct includes data harvesting, scraping, the introduction of malware, or any activity that imposes an excessive burden on our Website infrastructure.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">13. Third-Party Links</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">13.1 Any links to third-party websites are provided for your convenience only. Alethia Capital does not endorse and is not responsible for the content or availability of such sites.</p>
              <p className="text-brand-navy/80 leading-relaxed">13.2 You access third-party websites entirely at your own risk.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">14. Website Availability and Security</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">14.1 Alethia Capital does not guarantee that access to the Website will be uninterrupted or error-free. We reserve the right to suspend or terminate access at any time without notice.</p>
              <p className="text-brand-navy/80 leading-relaxed">14.2 We make no warranty that the Website is free of viruses or other harmful components. You are responsible for implementing your own security and virus protection measures.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">15. Limitation of Liability</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">15.1 To the maximum extent permitted by law, including under the Australian Consumer Law, Alethia Capital excludes all liability for any loss or damage arising from your use of the Website.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">15.2 Nothing in these Terms of Use excludes, restricts, or modifies any consumer guarantee or right under the Australian Consumer Law that cannot be excluded. Where liability cannot be excluded, it is limited to the resupply of services or the cost of resupply.</p>
              <p className="text-brand-navy/80 leading-relaxed">15.3 This exclusion of liability does not apply to any loss or damage caused by Alethia Capital's own gross negligence, wilful misconduct, or fraud.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">16. Indemnity</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">16.1 You indemnify Alethia Capital against all claims, costs, and damages arising out of your breach of these Terms of Use, your unlawful use of the Website, or your infringement of any third-party rights.</p>
              <p className="text-brand-navy/80 leading-relaxed">16.2 This indemnity does not apply to the extent that any loss was caused by Alethia Capital's own gross negligence, wilful misconduct, or fraud.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">17. Privacy</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">17.1 Any personal information collected through the Website will be handled in accordance with the <em>Privacy Act 1988</em> (Cth), the Australian Privacy Principles, and our Privacy Policy, which is available at <a href="/privacy" className="text-brand-gold hover:underline">[Privacy Policy URL Placeholder]</a>.</p>
              <p className="text-brand-navy/80 leading-relaxed">17.2 By submitting information to us, you consent to the collection and use of that information in accordance with our Privacy Policy.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">18. Changes to Website and Terms of Use</h2>
              <p className="text-brand-navy/80 leading-relaxed">18.1 We may amend the content of the Website or these Terms of Use at any time without notice. It is your responsibility to review these Terms periodically for changes.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">19. Governing Law and Jurisdiction</h2>
              <p className="text-brand-navy/80 leading-relaxed">19.1 These Terms of Use are governed by the laws of [New South Wales], Australia. You submit to the non-exclusive jurisdiction of the courts of that jurisdiction.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">20. Contact Details</h2>
              <div className="bg-brand-surface p-6 rounded-brand border border-brand-navy/10">
                <p className="font-bold text-brand-blue mb-2">Alethia Capital Pty Ltd</p>
                <p className="text-brand-navy/80 mb-1">ACN/ABN: [ACN/ABN Placeholder]</p>
                <p className="text-brand-navy/80 mb-1">Registered Office: [Level 3, 45–51 Cross Street, Double Bay NSW 2028]</p>
                <p className="text-brand-navy/80 mb-1">Email: <a href="mailto:info@alethiacapital.com.au" className="text-brand-gold hover:underline">info@alethiacapital.com.au</a></p>
                <p className="text-brand-navy/80">Telephone: [04 7888 3337]</p>
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-brand-navy/10">
              <h3 className="text-lg font-bold text-brand-blue mb-4 underline">Assumptions and Drafting Notes</h3>
              <ul className="list-disc pl-8 space-y-2 text-sm text-brand-navy/60 leading-relaxed">
                <li><strong>Entity Status:</strong> This draft assumes the business is an Australian proprietary company. ACN and ABN should be inserted before publication.</li>
                <li><strong>AFSL Position:</strong> Clause 4 contains a placeholder regarding AFSL status. Most private credit lenders operating in commercial spaces rely on exemptions or specific licensing profiles. This should be reviewed by your compliance team.</li>
                <li><strong>Consumer Credit:</strong> The document explicitly disclaims the provision of consumer credit. If the business intends to offer any credit to individuals for non-business purposes, substantial revisions and licensing will be required.</li>
                <li><strong>Negligence Carve-outs:</strong> Standard Australian drafting practice now often includes carve-outs for the business's own gross negligence to ensure limitation clauses remain enforceable and fair under the ACL.</li>
                <li><strong>Jurisdiction:</strong> Drafted assuming New South Wales as the primary place of business.</li>
                <li><strong>Disclaimer:</strong> This document is a draft for consideration and does not constitute legal advice. It should be reviewed by your legal counsel prior to use.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
