import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { ModalData, useStore } from "../context/StoreContext";
import Button from "./Button";
import CustomImage from "./CustomImage";
import Header from "./Header";
import { useCart } from "../context/CartContext";

interface Props {
  isModalOpen: boolean;
  modalData: ModalData;
  modalQuantity: number;
}

const StoreModal = ({ isModalOpen, modalData, modalQuantity }: Props) => {
  const { handleCloseModal, handleChangeModalQuantity, handleCalculatePrice } =
    useStore();

  const { handlePassCartData } = useCart();

  const handleCart = (modalData: ModalData, modalQuantity: number) => {
    handleCloseModal();
    handlePassCartData(modalData, modalQuantity);
  };
  return (
    <div
      className={`flex justify--center align--center overlay ${
        isModalOpen && "active"
      }`}
    >
      <div className="store__modal">
        <Header>
          <h3>{modalData.name}</h3>
        </Header>
        <div className="grid grid--1x2 grid--center align--center gap">
          <CustomImage
            className="img--350 img--border"
            src={modalData.src}
            alt={modalData.name}
          />
          <div className="flex flex--column gap">
            <p>{modalData.description}</p>
            <div className="flex justify--around align--center">
              <span className="text">&#8369;{handleCalculatePrice()}</span>
              <div className="flex justify--around align--center gap">
                <span onClick={() => handleChangeModalQuantity(-1)}>
                  <Button className="btn--circle">-</Button>
                </span>
                <span className="text">{modalQuantity}</span>
                <span onClick={() => handleChangeModalQuantity(+1)}>
                  <Button className="btn--circle">+</Button>
                </span>
              </div>
            </div>
            <span onClick={() => handleCart(modalData, modalQuantity)}>
              <Button className="flex justify--center align--center gap--sm btn--primary btn--sm modal__btn">
                <CiShoppingCart size={25} />
                Add To Cart
              </Button>
            </span>
          </div>
        </div>
        <span className="icon icon--close" onClick={handleCloseModal}>
          <IoMdClose color="var(--color-dark)" size={25} />
        </span>
      </div>
    </div>
  );
};

export default StoreModal;
