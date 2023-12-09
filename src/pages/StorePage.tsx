import Filter from "../components/Filter";
import Header from "../components/Header";
import Search from "../components/Search";
import StoreItems from "../components/StoreItems";

const StorePage = () => {
  return (
    <>
      <Header>
        <h1>Store</h1>
      </Header>
      <div className="block store__filters">
        <Filter />
        <Search />
      </div>
      <StoreItems />
    </>
  );
};

export default StorePage;
