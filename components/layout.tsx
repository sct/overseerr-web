import React from 'react';
import Header from './header';
import Footer from './footer';
import ImageFader from './ImageFader';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-7xl">
      <div className="absolute inset-x-0 top-0 image-fader">
        <ImageFader
          isDarker
          backgroundImages={[
            '/images/mando.jpg',
            '/images/ww_bg.jpg',
            '/images/tenet.jpg',
            '/images/coco.jpg',
            '/images/avengers.jpg',
            '/images/moana.jpg',
          ]}
        />
      </div>
      <Header />

      <main className="z-40 flex-1 px-4 py-6 md:px-6 md:py-12">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
