import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './SASS_Style/App.scss'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Banner from './Component/Banner/Banner';
import Companies from './Component/Companies/Companies';
import FullScan from './Component/FullScan/FullScan';
import FeatureCommitment from './Component/FeatureCommitment/FeatureCommitment';
import Testimonials from './Component/Testimonials/Testimonials';
import Pricing from './Component/Pricing/Pricing';
import MidBanner from './Component/MidBanner/MidBanner';
import Resource from './Component/Resource/Resource';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Companies />
      <FullScan />
      <FeatureCommitment />
      <Testimonials />
      <Pricing />
      <MidBanner />
      <Resource />
      <Footer />
    </div>
  );
}

export default App;
