import { ModalData, useStore } from "../context/StoreContext";
import Button from "./Button";
import CustomImage from "./CustomImage";

interface Props {
  id: number;
  name: string;
  src: string;
  price: number;
  description: string;
  quantity: number;
}

const StoreItem = ({ ...item }: Props) => {
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
          <span className="store__price">&#8369;{item.price}</span>
          <span onClick={() => handleModal({ ...item })}>
            <Button className="btn--primary btn--sm">Add To Cart</Button>
          </span>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default StoreItem;
