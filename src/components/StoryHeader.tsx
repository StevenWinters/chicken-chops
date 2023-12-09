import CustomImage from "./CustomImage";
import CTA from "../assets/backgrounds/background-home.jpg";

const StoryHeader = () => {
  return (
    <header className="story__header">
      <div className="story__container">
        <div className="story__content">
          <h1>Our Story</h1>
          <p>
            Here in Chicken Chops, we provide food for our customers with
            excellency and care. Each and everyone of our workers are trusted,
            friendly, and cooperative. Our menu has expanded to a wide range set
            of options. So much to choose and all of them will definitely never
            disappoint you. Friends, families, and relatives spend their
            get-together as they enjoy our food. Treat yourself as well in the
            best fast food restaurant that you will never regret going to.
          </p>
        </div>
      </div>
      <section className="block grid grid--1x2 grid--center align--center gap container">
        <CustomImage
          className="img--500 img--border"
          src={CTA}
          alt="Restaurant Banner"
        />
        <h2>Your Go-To Fast Food Restaurant</h2>
      </section>
    </header>
  );
};

export default StoryHeader;
