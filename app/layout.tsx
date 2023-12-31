import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Index from ".";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preload stylesheet'
          as='style'
          type='text/css'
          href='https://www.moontechnolabs.com/new_mtpl_assets/css/fonts.css?v=1.4'
          crossOrigin='anonymous'
        />
        <link
          rel='preload stylesheet'
          as='style'
          type='text/css'
          href='https://cdn.moontechnolabs.com/live/css/combine_all.css?v=2.22'
        />
        <link
          rel='preload stylesheet'
          as='style'
          type='text/css'
          href='https://cdn.moontechnolabs.com/live/css/mega-menu.css?v=1'
        />
        <link
          rel='preload stylesheet'
          as='style'
          type='text/css'
          href='https://cdn.moontechnolabs.com/live/css/combine_all_pages.css?v=1'
        />
        <link
          rel='stylesheet'
          as='style'
          href='https://cdn.moontechnolabs.com/live/css/jquery-ui.css'
        />
        <link
          rel='stylesheet'
          href='https://cdn.moontechnolabs.com/live/css/bootstrap.min.css?v=1.3'
        />
        <link
          rel='stylesheet'
          href='https://cdn.moontechnolabs.com/live/css/owl.carousel.min.css?v=1.3'
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Index children={children} />
      </body>
      <Script src='https://cdn.moontechnolabs.com/live/js/jquery.min.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/bootstrap.min.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/jquery.cookie.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/jquery.validate.min.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/jquery.vortex.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/additional-methods.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/wow.min.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/developer.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/custom.js?v=1.8' />
      <Script src='https://cdn.moontechnolabs.com/live/js/combine_all_app.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/jquery.lazy.min.js' />
      <Script src='https://cdn.moontechnolabs.com/live/js/jquery.lazy.plugins.min.js' />
      <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js' />
    </html>
  );
}
