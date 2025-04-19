import { Fragment } from "react";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import FixedPart from "../components/FixedPart";
import ClientsMarquee from "../components/ClientsMarquee";

export default function Shopping() {
    const newArrivalData = products.filter(
        (item) => item.category === "mobile" || item.category === "wireless"
      );
      const bestSales = products.filter((item) => item.category === "sofa");
  return (
    <Fragment>
        
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

  
    </Fragment>
  )
}
