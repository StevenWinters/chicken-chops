import { storyData } from "../data/storyData";
import CustomImage from "./CustomImage";
import Header from "./Header";

const StoryLine = () => {
  return (
    <section className="block container">
      <Header>
        <h2>How Chicken Chops Began</h2>
      </Header>
      <div className="grid grid--1x4 gap storyline__grid">
        {storyData.map((data) => (
          <div key={data.id} className="flex flex--column gap--sm">
            <h3>{data.date}</h3>
            <CustomImage
              className="img--border"
              src={data.src}
              alt={data.alt}
            />
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryLine;
