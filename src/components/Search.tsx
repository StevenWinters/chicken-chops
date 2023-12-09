import { CiSearch } from "react-icons/ci";
import { useStore } from "../context/StoreContext";

const Search = () => {
  const { searchValue, handleStoreSearch, handleSetSearchValue } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleStoreSearch(searchValue);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex justify--center align--center search">
        <input
          className="input"
          type="text"
          placeholder="Search Menu"
          value={searchValue}
          onChange={(e) => handleSetSearchValue(e.currentTarget.value)}
        />
        <span onClick={handleSubmit} className="icon">
          <CiSearch size={20} />
        </span>
      </div>
    </form>
  );
};

export default Search;
