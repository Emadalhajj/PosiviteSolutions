import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import ExploreOurProjects from "../components/ExploreOurProjects";
import HowWeWorkSection from "../components/HowWeWorkSection";
import FixedPart from "../components/FixedPart";
import ClientsMarquee from "../components/ClientsMarquee";

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
      
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />

    <FixedPart/>
    <ClientsMarquee/>
    </Fragment>
  );
};

export default Home;
