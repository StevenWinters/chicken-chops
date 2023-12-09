import { useStore } from "../context/StoreContext";
import { filterData } from "../data/filterData";
import Button from "./Button";
import CustomImage from "./CustomImage";

const Filter = () => {
  const { isFilterActive, handleFilterActive, handleStoreFilter } = useStore();

  const handleFilter = (category: string) => {
    handleFilterActive(category);
    handleStoreFilter(category);
  };
  return (
    <div className="flex gap filter">
      {filterData.map((data) => (
        <span key={data.id} onClick={() => handleFilter(data.name)}>
          <Button
            className={`flex justify--between align--center gap--sm btn--secondary filter__btn ${
              isFilterActive === data.name && "active"
            }`}
          >
            <CustomImage
              className="filter__img"
              src={data.src}
              alt={data.name}
            />
            {data.name}
          </Button>
        </span>
      ))}
    </div>
  );
};

export default Filter;
