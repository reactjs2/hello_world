import React from "react";

import "./globals.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const Header = dynamic(() => import("../app/layouts/header"));

const Index = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header>{children}</Header>
      <div>
        <a id='button' className='bottom_top show'>
          <Image
            className='lazy'
            loading='lazy'
            alt='top-bottom'
            width={24}
            height={24}
            src='https://cdn.moontechnolabs.com/live/images/bottom_top_arrow.svg'
          />
        </a>
      </div>
    </>
  );
};

export default Index;
