import { Fragment } from "react";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import ExploreOurProjects from "../components/ExploreOurProjects";
import HowWeWorkSection from "../components/HowWeWorkSection";
import FixedPart from "../components/FixedPart";
import ClientsMarquee from "../components/ClientsMarquee";
import WhoDesign from "../components/WhoDesign";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      {/* <Wrapper /> */}
      <ExploreOurProjects/>
      <HowWeWorkSection/>
      <WhoDesign/>
    <FixedPart/>
    <ClientsMarquee/>
    </Fragment>
  );
};

export default Home;
