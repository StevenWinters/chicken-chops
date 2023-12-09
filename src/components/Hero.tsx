import Button from "./Button";
import BackgroundHome from "../assets/backgrounds/background-home.jpg";
import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const Hero = () => {
  const { handleFilterActive, handleStoreFilter } = useStore();

  const handleFilter = (category: string) => {
    handleFilterActive(category);
    handleStoreFilter(category);
  };

  return (
    <section className="block block--dark hero">
      <div className="grid grid--1x2 grid--center align--center container">
        <div className="hero__container">
          <h1>FOOD THAT CAN NEVER BE MADE MORE PERFECT</h1>
          <p className="hero__description">
            A perfection to be delivered to you.
          </p>
          <Link to="/store" onClick={() => handleFilter("All")}>
            <Button className="btn--accent">Order Now</Button>
          </Link>
        </div>
        <CustomImage src={BackgroundHome} alt="Background Home"></CustomImage>
      </div>
    </section>
  );
};

export default Hero;
