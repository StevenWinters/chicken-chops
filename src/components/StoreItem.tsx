import { ModalData, useStore } from "../context/StoreContext";
import Button from "./Button";
import CustomImage from "./CustomImage";

const StoreItem = ({ ...item }: ModalData) => {
  const { handleOpenModal, handlePassModalData, handleResetQuantity } =
    useStore();

  const handleModal = ({ ...data }: ModalData) => {
    handlePassModalData(data);
    handleOpenModal();
    handleResetQuantity();
  };

  return (
    <div className="store__item">
      <CustomImage src={item.src} alt={item.name} />
      <div className="store__content">
        <h3>{item.name}</h3>
        <div className="flex justify--between align--center item__container">
          <span className="store__price">&#8369;{item.price.toFixed(2)}</span>
          <span onClick={() => handleModal({ ...item })}>
            <Button className="btn--primary btn--sm">Add To Cart</Button>
          </span>
        </div>
        <p>{item.description}</p>
        {item.sizes && (
          <span className="badge badge--secondary">
            {item.sizes.length} Sizes
          </span>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
