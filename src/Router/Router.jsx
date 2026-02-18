import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { About, Blog, Contact, Crm, CrmOnePage, Home, Services, ManageiT, Bpo, CallCenter } from '../Pages';
import Lenis from 'lenis';




const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Router = () => {
  useEffect(() => {
    
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // browser router component 
    <BrowserRouter>
     {/* sroll to top component  */}
      <ScrollToTop />
      {/* routes  */}
      <Routes>
        {/* and here is the classic page route  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hrms" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<CrmOnePage />} />
        <Route path="service/managed-it" element={<ManageiT />} />
        <Route path="service/bpo" element={<Bpo />} />
        <Route path="service/call-center" element={<CallCenter />} />
        {/* classic route ending  */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;