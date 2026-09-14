import HeroSec from "./sections/HeroSec";
import ShopByCategories from './category/ShopByCategories';
import Trustfeatures from './trustpage/Trustfeatures';
import HowItWorks from "./homework/Howitworks";

const Home = () => {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSec />

      {/* Future Home Sections */}
      <ShopByCategories/>
      {/* <Trustfeatures/> */}
      <HowItWorks/>
      {/* 
        <CategoriesSec />
        <FeaturesSec />
        <HowItWorksSec />
        <BusinessStatsSec />
      */}
    </main>
  );
};

export default Home;