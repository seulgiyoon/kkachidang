import Header from 'components/Header';
import CalloutSection from 'components/main/CalloutSection';
import Footer from 'components/main/Footer';
import HeroSection from 'components/main/HeroSection';
import NewsSection from 'components/main/NewsSection';
import WorkSection from 'components/main/WorkSection';
import * as React from 'react';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CalloutSection />
        <WorkSection />
        <NewsSection />
        <Footer />
      </main>
    </>
  );
}

export default MainPage;
