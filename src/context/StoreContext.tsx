import { ReactNode, createContext, useContext, useState } from "react";
import { storeData } from "../data/storeData";
import StoreModal from "../components/StoreModal";

interface Props {
  children: ReactNode;
}

interface StoreData {
  title: string;
  id: string;
  items: ModalData[];
}

interface ItemSizes {
  name: string;
  sizeValue: string;
  src: string;
}

export interface ModalData {
  id: number;
  name: string;
  src: string;
  price: number;
  description: string;
  quantity: number;
  sizes?: ItemSizes[];
}

interface StoreContext {
  isFilterActive: string;
  filteredStore: StoreData[];
  searchValue: string;
  searchedItem: ModalData[][];
  handleFilterActive: (category: string) => void;
  handleStoreFilter: (category: string) => void;
  handleSetSearchValue: (currentValue: string) => void;
  handleStoreSearch: (searchValue: string) => void;
  handleGetTotalResults: () => number;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handlePassModalData: ({ ...data }: ModalData) => void;
  handleChangeModalQuantity: (operation: number) => void;
  handleCalculatePrice: () => number;
  handleResetQuantity: () => void;
}

const StoreContext = createContext({} as StoreContext);

export function useStore() {
  return useContext(StoreContext);
}

export function StoreContextProvider({ children }: Props) {
  const [isFilterActive, setFilterActive] = useState("All");
  const [filteredStore, setFilteredStore] = useState<StoreData[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchedItem, setSearchedItem] = useState<ModalData[][]>([]);
  const [isModalOpen, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({
    id: 0,
    name: "",
    src: "",
    price: 0,
    description: "",
    quantity: 0,
  });
  const [modalQuantity, setModalQuantity] = useState(1);

  const handleFilterActive = (category: string) => setFilterActive(category);

  const handleStoreFilter = (category: string) =>
    setFilteredStore(
      storeData.filter((data) =>
        data.title === category || category === "All" ? data : null
      )
    );

  const handleSetSearchValue = (currentValue: string) => {
    setSearchValue(currentValue);
  };

  const handleStoreSearch = (searchValue: string) => {
    if (!searchValue) return setSearchedItem([]);

    const searchMenu = storeData.map((category) =>
      category.items
        .flat()
        .filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
    );

    setSearchedItem(searchMenu);
  };

  const handleGetTotalResults = () => {
    return searchedItem.reduce((results, items) => items.length + results, 0);
  };

  const handleOpenModal = () => setToggleModal(true);
  const handleCloseModal = () => setToggleModal(false);

  const handlePassModalData = ({ ...data }: ModalData) => setModalData(data);

  const handleChangeModalQuantity = (operation: number) => {
    if (operation === -1)
      if (modalQuantity > 1) setModalQuantity(modalQuantity + operation);
    if (operation === +1)
      if (modalQuantity < 100) setModalQuantity(modalQuantity + operation);
  };

  const handleCalculatePrice = () =>
    parseFloat((modalQuantity * modalData.price).toFixed(2));

  const handleResetQuantity = () => setModalQuantity(1);

  return (
    <StoreContext.Provider
      value={{
        isFilterActive,
        filteredStore,
        searchValue,
        searchedItem,
        handleFilterActive,
        handleStoreFilter,
        handleSetSearchValue,
        handleStoreSearch,
        handleGetTotalResults,
        handleOpenModal,
        handleCloseModal,
        handlePassModalData,
        handleChangeModalQuantity,
        handleCalculatePrice,
        handleResetQuantity,
      }}
    >
      {children}
      <StoreModal
        isModalOpen={isModalOpen}
        modalData={modalData}
        modalQuantity={modalQuantity}
      />
    </StoreContext.Provider>
  );
}
