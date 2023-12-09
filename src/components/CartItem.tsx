import { BsFillTrash3Fill } from "react-icons/bs";
import Button from "./Button";
import CustomImage from "./CustomImage";
import { useCart } from "../context/CartContext";

interface Props {
  id: number;
  name: string;
  src: string;
  price: number;
  quantity: number;
}

const CartItem = ({ ...item }: Props) => {
  const {
    handleChangeCartQuantity,
    handleCalculatePrice,
    handleRemoveCartItem,
  } = useCart();
  return (
    <div className="cart__item">
      <h3>{item.name}</h3>
      <CustomImage src={item.src} alt={item.name} />
      <div className="flex justify--around align--center cart__container">
        <span className="text">
          &#8369;{handleCalculatePrice(item.quantity, item.price)}
        </span>
        <div className="flex align--center gap">
          <span onClick={() => handleChangeCartQuantity(-1, item.id)}>
            <Button className="btn--accent btn--circle">-</Button>
          </span>
          <span className="text">{item.quantity}</span>
          <span onClick={() => handleChangeCartQuantity(+1, item.id)}>
            <Button className="btn--accent btn--circle">+</Button>
          </span>
        </div>
        <span className="icon" onClick={() => handleRemoveCartItem(item.id)}>
          <BsFillTrash3Fill size={25} color="var(--color-dark)" />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
