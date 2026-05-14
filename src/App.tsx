/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DiscussSituation from "./pages/DiscussSituation";
import ForBorrowers from "./pages/ForBorrowers";
import ForBrokers from "./pages/ForBrokers";
import Home from "./pages/Home";
import SpecialisedFunding from "./pages/SpecialisedFunding";
import SubmitDeal from "./pages/SubmitDeal";
import WhatWeFund from "./pages/WhatWeFund";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Disclaimer from "./pages/Disclaimer";

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/for-brokers" element={<ForBrokers />} />
            <Route path="/for-borrowers" element={<ForBorrowers />} />
            <Route path="/what-we-fund" element={<WhatWeFund />} />
            <Route path="/specialised-funding" element={<SpecialisedFunding />} />
            <Route path="/about" element={<About />} />
            <Route path="/submit-a-deal" element={<SubmitDeal />} />
            <Route path="/discuss-your-situation" element={<DiscussSituation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
