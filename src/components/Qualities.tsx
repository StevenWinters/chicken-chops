import { qualitiesData } from "../data/qualitiesData";
import CustomImage from "./CustomImage";
import Header from "./Header";

const Qualities = () => {
  return (
    <section className="block">
      <Header className="qualities__header">
        <h2 className="qualities__heading">Service Qualities</h2>
        <p>We ensure the BEST for our customers!</p>
      </Header>
      <div className="grid container gap--sm qualities__grid">
        {qualitiesData.map((data) => (
          <div
            key={data.id}
            className="grid align--center gap--sm quality__container"
          >
            <div>
              <CustomImage
                className="img--500 quality__img"
                src={data.src}
                alt={data.name}
              />
              <h3 className="quality__heading">{data.name}</h3>
            </div>
            <p className="quality__description">{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
