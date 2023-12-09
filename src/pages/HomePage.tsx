import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { useStore } from "../context/StoreContext";
import { featuresBannerData, speciaBannerData } from "../data/bannerData";

const HomePage = () => {
  const { handleFilterActive, handleStoreFilter } = useStore();

  const handleFilter = (category: string) => {
    handleFilterActive(category);
    handleStoreFilter(category);
  };

  return (
    <>
      <Hero />
      <Banner
        data={speciaBannerData}
        heading="New Specials"
        btnName="View All Specials"
        btnClass="btn--secondary"
        path="/store#specials"
        onClick={() => handleFilter("New Specials")}
      />
      <Banner
        className="banner__features"
        data={featuresBannerData}
        heading="Featured Items"
        btnName="View Menu"
        btnClass="btn--secondary"
        path="/menu"
      />
    </>
  );
};

export default HomePage;
