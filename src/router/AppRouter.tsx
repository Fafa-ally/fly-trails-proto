import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Membership from '../pages/Membership';
import MembershipDetails from '../pages/MembershipDetails';
import Checkout from '../pages/Checkout';
import Payment from '../pages/Payment';
import NotFound from '../pages/NotFound';
import ServiceUnavailable from '../pages/ServiceUnavailable';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/:id" element={<MembershipDetails />} />
          <Route path="/503" element={<ServiceUnavailable />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        {/* Standalone Pages (No Header/Footer) */}
        <Route path="/checkout/:tierId" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;