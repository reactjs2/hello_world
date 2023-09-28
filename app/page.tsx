import BannerSlider from "./components/bannerslider";
import AboutUs from "./components/aboutus";
import Service from "./components/service";
import Industries from "./components/industries";
import CaseStudy from "./components/casestudy";
import Process from "./components/process";
import Technologies from "./components/technologies";
import Infrastructur from "./components/infrastructur";
import TopService from "./components/topservice";
import Blog from "./components/blog";

export default function Home() {
  return (
    <div>
      {/* <head>
        <link
          rel='stylesheet'
          href='https://cdn.moontechnolabs.com/live/css/home.css?v=1.13'
        />
      </head> */}
      <BannerSlider />
      <AboutUs />
      <Service />
      <Industries />
      <CaseStudy />
      {/* <Process /> */}
      <Technologies />
      <Infrastructur />
      <TopService />
      <Blog />
    </div>
  );
}
