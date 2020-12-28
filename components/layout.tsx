import React from 'react';
import Header from './header';
import Footer from './footer';
import ImageFader from './ImageFader';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-7xl">
      <ImageFader
        isDarker
        backgroundImages={[
          '/images/rotate1.jpg',
          '/images/rotate2.jpg',
          '/images/rotate3.jpg',
          '/images/rotate4.jpg',
        ]}
      />
      <Header />

      <main className="z-40 flex-1 px-4 py-6 md:px-6 md:py-12">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
