import React from "react";

import "./globals.css";

import Header from "./header";
import Footer from "./footer";
const Index = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header>{children}</Header>
      <Footer />
      <div>
        <a id='button' className='bottom_top show'>
          <img
            className='lazy'
            loading='lazy'
            alt='top-bottom'
            src='https://cdn.moontechnolabs.com/live/images/bottom_top_arrow.svg'
          />
        </a>
      </div>
    </>
  );
};

export default Index;
