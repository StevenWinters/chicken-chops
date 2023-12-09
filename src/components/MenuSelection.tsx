import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";
import CustomImage from "./CustomImage";
import Button from "./Button";
import { useStore } from "../context/StoreContext";

const MenuSelection = () => {
  const { handleFilterActive, handleStoreFilter } = useStore();

  const handleFilter = (category: string) => {
    handleFilterActive(category);
    handleStoreFilter(category);
  };
  return (
    <section className="block menu">
      <div className="grid grid--1x4 grid--center gap container menu__grid">
        {menuData.map((data) => (
          <Link
            to="/store"
            key={data.id}
            className="menu__container"
            onClick={() => handleFilter(data.name)}
          >
            <CustomImage className="menu__img" src={data.src} alt={data.name} />
            <span className="menu__name">{data.name}</span>
          </Link>
        ))}
        <Link
          to="/store"
          className="menu__btn"
          onClick={() => handleFilter("All")}
        >
          <Button className="btn--primary menu__btn">View All</Button>
        </Link>
      </div>
      <Link
        to="/store"
        className="flex justify--center"
        onClick={() => handleFilter("All")}
      >
        <Button className="btn--primary btn--lg menu__sub-btn">View All</Button>
      </Link>
    </section>
  );
};

export default MenuSelection;
