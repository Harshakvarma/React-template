import withRoot from './../customComponents/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './ProductCategories';
import AppFooter from './../customComponents/views/AppFooter';
import ProductSmokingHero from './../landing/ProductSmokingHero';
import ProductHero from './../landing/ProductHero';
import ProductValues from './../landing/ProductValues';
import ProductHowItWorks from './../landing/ProductHowItWorks';
import ProductCTA from './../landing/ProductCTA';
import AppAppBar from './../customComponents/views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
