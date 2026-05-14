import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-brand-surface pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-brand shadow-sm border border-brand-navy/10"
        >
          <div className="privacy-policy prose prose-slate max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">PRIVACY POLICY</h1>
            <p className="text-brand-navy font-bold mb-1">Alethia Capital Pty Ltd</p>
            <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-brand-navy/60 mb-8 pb-8 border-b border-brand-navy/10">
              <p><strong>Effective Date:</strong> 14 May 2026</p>
              <p><strong>Last Updated:</strong> 14 May 2026</p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">1. Introduction</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">Alethia Capital Pty Ltd (<strong>Alethia Capital</strong>, <strong>we</strong>, <strong>us</strong> or <strong>our</strong>) is a non-bank lender committed to protecting your privacy and handling your personal information with care and transparency.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">This Privacy Policy sets out how we collect, use, hold, disclose and protect your personal information in connection with our lending activities and our website at <a href="https://www.alethiacapital.com.au" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">www.alethiacapital.com.au</a> (the <strong>Website</strong>).</p>
              <p className="text-brand-navy/80 leading-relaxed">We are bound by the <em>Privacy Act 1988</em> (Cth) (<strong>Privacy Act</strong>) and the Australian Privacy Principles (<strong>APPs</strong>). By using our Website or providing your personal information to us, you acknowledge that you have read and understood this Privacy Policy.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">2. What Is Personal Information?</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed"><strong>Personal information</strong> means information or an opinion about an identified individual, or an individual who is reasonably identifiable, whether or not the information is true or recorded in material form.</p>
              <p className="text-brand-navy/80 leading-relaxed"><strong>Sensitive information</strong> is a subset of personal information afforded heightened protection under the Privacy Act, including health information, government identifiers, financial circumstances, and criminal records. We will only collect sensitive information where you have consented or where we are otherwise required or permitted to do so by law.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">3. What Personal Information We Collect</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">In connection with our lending activities and Website, we may collect the following types of personal information:</p>
              <ul className="space-y-4 mb-4">
                <li className="text-brand-navy/80 leading-relaxed"><strong>(a) Identity and contact information</strong>, including your full name, date of birth, residential and postal address, email address, and telephone number.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(b) Financial and credit information</strong>, including income details, employment information, assets and liabilities, bank account details, and information relevant to the assessment of a loan application or credit facility.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(c) Business and professional information</strong>, including company or trust details, directorship and beneficial ownership information, ABN or ACN, and professional credentials where relevant to a lending transaction.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(d) Communication records</strong>, including the content of enquiries, correspondence, and instructions provided via our Website, email, telephone, or other means.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(e) Website and technical information</strong>, including your IP address, device identifiers, browser type, operating system, referring URLs, pages visited on our Website, and session data collected through cookies and analytics tools (see Section 13 below).</li>
              </ul>
              <p className="text-brand-navy/80 leading-relaxed">We collect only the personal information that is reasonably necessary for the purposes described in this Privacy Policy.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">4. How We Collect Personal Information</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We collect personal information:</p>
              <ul className="space-y-4">
                <li className="text-brand-navy/80 leading-relaxed"><strong>(a) Directly from you</strong>, when you contact us via our Website, submit a loan enquiry or application, correspond with us by email or telephone, or otherwise provide us with your information.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(b) Automatically</strong>, when you visit or interact with our Website through cookies, web beacons, and analytics tools.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(c) From third parties</strong>, including referrers, introducers, brokers, valuers, legal advisers, and other parties involved in a lending transaction; and from publicly available sources such as ASIC registers, property databases, and professional directories, where relevant to assessing or managing a lending relationship.</li>
              </ul>
              <p className="mt-4 text-brand-navy/80 leading-relaxed">Where we collect personal information from a third party, we will take reasonable steps to notify you as soon as practicable.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">5. Why We Collect, Use and Disclose Personal Information</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We collect, use, and disclose personal information for the following purposes:</p>
              <ul className="space-y-4">
                <li className="text-brand-navy/80 leading-relaxed"><strong>(a) Assessing and processing lending enquiries and applications</strong> — to evaluate your eligibility for a loan or credit facility and to make lending decisions.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(b) Managing lending relationships</strong> — to administer, service, and manage loan facilities, including processing repayments, managing defaults, and enforcing our rights.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(c) Client relationship management</strong> — to maintain records of our interactions, manage conflicts, and develop our business relationship with you.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(d) Communication</strong> — to respond to enquiries, provide updates on your application or loan, and send service-related notices.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(e) Marketing</strong> — to send you information about our lending products and services that may be of interest to you, subject to your right to opt out at any time (see Section 12 below).</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(f) Legal and regulatory compliance</strong> — to comply with our obligations under the <em>Privacy Act 1988</em> (Cth), <em>Anti-Money Laundering and Counter-Terrorism Financing Act 2006</em> (Cth), and any other applicable laws and regulatory requirements.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(g) Risk management and fraud prevention</strong> — to identify, assess, and manage credit risk and to detect and prevent fraudulent or unlawful activity.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(h) Improving our Website and services</strong> — to understand how visitors use our Website and to enhance our services and user experience.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(i) Internal administration</strong> — for accounting, billing, insurance, audit, and other internal business functions.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">6. Website Enquiries and Contact Forms</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">When you submit an enquiry through our Website's contact form, we collect the personal information you provide, which typically includes your name, email address, telephone number, and the content of your enquiry.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We use this information to respond to your enquiry and to follow up in connection with our services. Records of Website enquiries may be retained in our client relationship management systems.</p>
              <p className="text-brand-navy/80 leading-relaxed">You may also contact us directly using the details in Section 15 of this Privacy Policy.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">7. Email Communications</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">When you communicate with us by email, we collect and retain the personal information contained in and attached to those communications, including your name, email address, and any information you provide.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We use email correspondence to communicate with you in connection with your enquiry, application, or loan facility, and to fulfil our business and legal obligations. Email records are retained in accordance with our document retention obligations.</p>
              <p className="text-brand-navy/80 leading-relaxed">We take reasonable steps to protect the security of email communications; however, internet-based email is not inherently secure. If you have concerns about communicating sensitive information by email, please contact us to discuss alternative means.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">8. Business and Client Relationship Management</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">In the course of providing lending services, we collect, use, and retain personal information including identity details, financial information, transaction records, and communications. This information is held in our internal systems and is accessible only to authorised personnel.</p>
              <p className="text-brand-navy/80 leading-relaxed">We retain personal information for as long as it is necessary for the purposes for which it was collected, including any applicable legal, regulatory, or professional retention obligations.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">9. Disclosure of Personal Information</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We may disclose your personal information to third parties in the following circumstances:</p>
              <ul className="space-y-4">
                <li className="text-brand-navy/80 leading-relaxed"><strong>(a) Service providers</strong> — to third-party providers who assist us in operating our business, including:
                  <ul className="list-disc pl-8 mt-2 space-y-2">
                    <li>Information technology, cloud hosting, and software providers (including Google LLC and Microsoft Corporation — see Section 10);</li>
                    <li>Document and data storage providers;</li>
                    <li>Legal, accounting, valuation, and other professional advisers;</li>
                    <li>Loan administration and settlement service providers;</li>
                    <li>Payment processors; and</li>
                    <li>Marketing and communications platforms.</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4 mb-4 text-brand-navy/80 leading-relaxed">We take reasonable steps to ensure our service providers handle personal information consistently with the APPs.</p>
              <ul className="space-y-4">
                <li className="text-brand-navy/80 leading-relaxed"><strong>(b) Lending transaction parties</strong> — to other parties involved in a lending transaction, such as borrowers, guarantors, security trustees, brokers, introducers, solicitors, and valuers, to the extent necessary to assess, establish, or administer a lending facility.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(c) Legal and regulatory obligations</strong> — to government agencies, courts, regulators, or law enforcement bodies where we are required or authorised to do so by law.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(d) Business transactions</strong> — in connection with any sale, acquisition, merger, or restructuring of our business, to the extent permitted by law.</li>
                <li className="text-brand-navy/80 leading-relaxed"><strong>(e) With your consent</strong> — to any other third parties with your express consent.</li>
              </ul>
              <p className="mt-4 text-brand-navy/80 leading-relaxed">We do not sell, rent, or trade your personal information for commercial purposes.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">10. Overseas Disclosure</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">Some of our service providers operate and store data outside Australia. In particular, we use services provided by:</p>
              <ul className="list-disc pl-8 mb-4 space-y-2 text-brand-navy/80 leading-relaxed">
                <li><strong>Google LLC</strong> (United States of America) — including Google Workspace and Google Analytics; and</li>
                <li><strong>Microsoft Corporation</strong> (United States of America and other regions) — including Microsoft 365.</li>
              </ul>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">These providers may store or process your personal information on servers located in the United States of America or other countries in which they operate.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">Before disclosing personal information to overseas recipients, we take reasonable steps to ensure your information will be handled in a manner consistent with the APPs. Both Google and Microsoft are parties to standard contractual data protection commitments applicable to international data transfers.</p>
              <p className="text-brand-navy/80 leading-relaxed">Please be aware that, once disclosed to an overseas recipient, the Australian Privacy Act may not require that recipient to protect your personal information in the same way as an Australian APP entity. By providing us with your personal information, you acknowledge that it may be disclosed to and processed by overseas recipients as described in this Privacy Policy.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">11. Data Security and Storage</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We take reasonable steps to protect personal information we hold from misuse, interference, loss, unauthorised access, modification, and disclosure.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">Our security measures include:</p>
              <ul className="list-disc pl-8 mb-4 space-y-2 text-brand-navy/80 leading-relaxed">
                <li>Access controls restricting personal information to authorised personnel;</li>
                <li>Password protection and multi-factor authentication for systems holding personal information;</li>
                <li>Encryption of data transmitted via our Website (SSL/TLS);</li>
                <li>Secure cloud storage through reputable providers; and</li>
                <li>Physical security measures at our premises.</li>
              </ul>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">Despite these measures, no data transmission or storage system is completely secure. If you believe that personal information you have provided to us has been compromised, please contact us immediately using the details in Section 15.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed"><strong>Notifiable Data Breaches:</strong> We are subject to the Notifiable Data Breaches scheme under the Privacy Act. In the event of a data breach that is likely to result in serious harm to affected individuals, we will notify the Office of the Australian Information Commissioner and affected individuals in accordance with our legal obligations.</p>
              <p className="text-brand-navy/80 leading-relaxed"><strong>Retention and Destruction:</strong> We retain personal information for as long as necessary for the purposes for which it was collected, or as required by applicable law. When personal information is no longer needed, we take reasonable steps to destroy or permanently de-identify it.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">12. Direct Marketing and Opt-Out Rights</h2>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We may use your contact details to send you information about our lending products, services, and updates that may be of interest to you.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We will only send marketing communications where you have consented, or where you are an existing client or contact and the communications relate to services of the kind we have previously provided or discussed with you.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">Every marketing communication we send will include a clear and functional unsubscribe mechanism. You may opt out at any time by:</p>
              <ul className="list-disc pl-8 space-y-2 text-brand-navy/80 leading-relaxed">
                <li>Clicking the unsubscribe link in any marketing email we send; or</li>
                <li>Contacting us at <a href="mailto:info@alethiacapital.com.au" className="text-brand-gold hover:underline">info@alethiacapital.com.au</a>.</li>
              </ul>
              <p className="mt-4 text-brand-navy/80 leading-relaxed">We will process opt-out requests promptly and at no cost to you.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">13. Cookies, Analytics and Website Tracking</h2>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Cookies</h3>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">Our Website uses cookies — small text files placed on your device — to improve your experience and to understand how the Website is used. We use the following types of cookies:</p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-surface border-b border-brand-navy/10">
                      <th className="p-4 text-brand-blue font-bold uppercase tracking-widest text-xs">Type</th>
                      <th className="p-4 text-brand-blue font-bold uppercase tracking-widest text-xs">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-navy/5">
                      <td className="p-4 text-brand-navy/80 text-sm font-bold">Strictly necessary</td>
                      <td className="p-4 text-brand-navy/80 text-sm">Required for the Website to function correctly</td>
                    </tr>
                    <tr className="border-b border-brand-navy/5">
                      <td className="p-4 text-brand-navy/80 text-sm font-bold">Analytics / performance</td>
                      <td className="p-4 text-brand-navy/80 text-sm">To understand visitor behaviour, pages visited, and session activity</td>
                    </tr>
                    <tr className="border-b border-brand-navy/5">
                      <td className="p-4 text-brand-navy/80 text-sm font-bold">Functionality</td>
                      <td className="p-4 text-brand-navy/80 text-sm">To remember your preferences and settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-8 text-brand-navy/80 leading-relaxed">You can manage or disable cookies through your browser settings. Disabling cookies may affect the functionality of some parts of our Website.</p>

              <h3 className="text-xl font-bold text-brand-blue mb-3">Google Analytics</h3>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We use Google Analytics to collect aggregated information about how visitors use our Website, including pages viewed, session duration, and referring sources. Google Analytics collects your IP address and browsing behaviour on our Website. This information is processed by Google LLC and may be stored on servers located outside Australia. For information on how Google handles this data, please refer to Google's Privacy Policy at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">policies.google.com/privacy</a>.</p>
              <p className="text-brand-navy/80 leading-relaxed">You may opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">tools.google.com/dlpage/gaoptout</a>.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">14. Access to and Correction of Personal Information</h2>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Access</h3>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">You have the right to request access to personal information we hold about you. To make a request, please contact us using the details in Section 15. We will respond within 30 days.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">We may decline access in limited circumstances permitted by the Privacy Act, and if we do, we will provide written reasons and information about how to complain.</p>
              <p className="mb-8 text-brand-navy/80 leading-relaxed">We may charge a reasonable fee to cover the administrative costs of providing access.</p>

              <h3 className="text-xl font-bold text-brand-blue mb-3">Correction</h3>
              <p className="text-brand-navy/80 leading-relaxed">If you believe that personal information we hold about you is inaccurate, incomplete, out of date, or misleading, you may request a correction by contacting us. We will respond within 30 days. If we disagree with your request, we will provide written reasons and information about how to complain.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">15. Complaints</h2>
              <p className="mb-6 text-brand-navy/80 leading-relaxed">If you have a concern about how we have handled your personal information, please contact us in the first instance:</p>
              <div className="bg-brand-surface p-6 rounded-brand border border-brand-navy/10 mb-6">
                <p className="font-bold text-brand-blue mb-2">Privacy Enquiries</p>
                <p className="text-brand-navy/80 mb-1">Alethia Capital Pty Ltd</p>
                <p className="text-brand-navy/80 mb-1">Level 3, 45–51 Cross Street</p>
                <p className="text-brand-navy/80 mb-1">Double Bay NSW 2028</p>
                <p className="text-brand-navy/80 mb-1">Email: <a href="mailto:info@alethiacapital.com.au" className="text-brand-gold hover:underline">info@alethiacapital.com.au</a></p>
                <p className="text-brand-navy/80">Website: <a href="https://www.alethiacapital.com.au" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">www.alethiacapital.com.au</a></p>
              </div>

              <p className="mb-6 text-brand-navy/80 leading-relaxed">We will acknowledge your complaint within 5 business days and endeavour to provide a substantive response within 30 days. If more time is required, we will notify you.</p>
              <p className="mb-4 text-brand-navy/80 leading-relaxed">If you are not satisfied with our response, you may refer your complaint to the <strong>Office of the Australian Information Commissioner (OAIC)</strong>:</p>
              <ul className="list-disc pl-8 space-y-2 text-brand-navy/80 leading-relaxed">
                <li>Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">www.oaic.gov.au</a></li>
                <li>Phone: 1300 363 992</li>
                <li>Post: GPO Box 5218, Sydney NSW 2001</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-blue mb-4">16. Updates to This Policy</h2>
              <p className="text-brand-navy/80 leading-relaxed">We may update this Privacy Policy from time to time. The updated version will be published on our Website with a revised "Last Updated" date. We encourage you to review this page periodically.</p>
            </section>

            <div className="mt-12 pt-8 border-t border-brand-navy/10 text-center text-xs text-brand-navy/40 uppercase tracking-widest font-bold">
              <p>© 2026 Alethia Capital Pty Ltd. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
