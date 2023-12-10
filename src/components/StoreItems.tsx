import { useStore } from "../context/StoreContext";
import { storeData } from "../data/storeData";
import Button from "./Button";
import StoreItem from "./StoreItem";

const StoreItems = () => {
  const {
    filteredStore,
    searchedItem,
    handleSetSearchValue,
    handleStoreSearch,
    handleGetTotalResults,
  } = useStore();

  const handleClear = (searchValue: string) => {
    handleSetSearchValue(searchValue);
    handleStoreSearch(searchValue);
  };

  if (searchedItem.length !== 0 && handleGetTotalResults() === 0)
    return (
      <div className="block flex flex--wrap justify--evenly align--center gap">
        <h2 className="mg--0">No items found.</h2>
        <span onClick={() => handleClear("")}>
          <Button className="btn--warning">Clear Search</Button>
        </span>
      </div>
    );

  return (
    <section className="block container">
      {searchedItem.length !== 0 ? (
        <>
          <div className="flex flex--wrap justify--evenly align--center gap store__container">
            <h2 className="mg--0">
              {handleGetTotalResults()}{" "}
              {handleGetTotalResults() === 1 ? "Result" : "Results"}
            </h2>
            <span onClick={() => handleClear("")}>
              <Button className="btn--warning">Clear Search</Button>
            </span>
          </div>
          <div className="flex flex--wrap gap justify--center store__container">
            {searchedItem.map((items) =>
              items.map((item) => <StoreItem {...item} key={item.id} />)
            )}
          </div>
        </>
      ) : (
        (filteredStore.length === 0 ? storeData : filteredStore).map((data) => (
          <div key={data.id} className="store__container">
            <h2>{data.title}</h2>
            <div className="flex flex--wrap gap justify--center">
              {data.items.map((item) => (
                <StoreItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default StoreItems;
