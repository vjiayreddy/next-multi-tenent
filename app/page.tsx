import { Fragment } from "react";
import LandingBannerView from "@/lib/views/landing/banner";
import LandingStats from "@/lib/views/landing/stats";
import ShopByProducts from "@/lib/views/landing/shop-by-products/ShopByProducts";
import ShopByOccasions from "@/lib/views/landing/shop-occasion/ShopByOccasions";
import LandingDiscover from "@/lib/views/landing/discover/Discover";
import ExpertHelpComponent from "@/lib/views/landing/expert-help/ExpertHelp";
import FindStyle from "@/lib/views/landing/find-style/FindStyle";
import ShopByLooks from "@/lib/views/landing/shop-by-look/ShopByLook";
import Testimonials from "@/lib/views/landing/testimonials/Testimonials";
import MostLoved from "@/lib/views/landing/most-loved/MostLoved";
import CATSection from "@/lib/views/landing/cat-section/CATSection";
import LandingMediaPress from "@/lib/views/landing/media-press/MediaPress";
import FaqSection from "@/lib/views/landing/faq/FaqSection";
import HappyClients from "@/lib/views/landing/happy-clients/HappyClients";

const HomePage = async () => {
  return (
    <Fragment>
      <LandingBannerView />
      <LandingStats />
      <ShopByProducts />
      <ShopByOccasions />
      <LandingDiscover />
      <ExpertHelpComponent />
      <FindStyle />
      <ShopByLooks />
      <Testimonials />
      <MostLoved />
      <HappyClients />
      <LandingMediaPress />
      <CATSection />
      <FaqSection />
    </Fragment>
  );
};
export default HomePage;
