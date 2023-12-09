import { ModalData } from "../context/StoreContext";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";

interface Props {
  isCartOpen: boolean;
  cart: ModalData[];
}

const Cart = ({ isCartOpen, cart }: Props) => {
  const { handleCloseCart, handleCartTotal, handleOrderFromCart } = useCart();
  const handleOrder = () => {
    handleOrderFromCart();
    handleCloseCart();
  };
  return (
    <div className={`cart ${isCartOpen && "active"}`}>
      <h2>Your Cart</h2>
      <div className="flex justify--around align--center">
        <span className="text">Total: &#8369;{handleCartTotal()}</span>
        <span onClick={handleOrder}>
          <Button className="btn--sm btn--accent">Order</Button>
        </span>
      </div>
      <span className="icon icon--close" onClick={handleCloseCart}>
        <IoMdClose size={25} />
      </span>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
