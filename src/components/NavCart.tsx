import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../context/CartContext";

interface Props {
  onSetNavActive: () => void;
}

const NavCart = ({ onSetNavActive }: Props) => {
  const { handleOpenCart, handleCartTotal, handleCartTotalQuantity } =
    useCart();

  const handleNavCart = () => {
    handleOpenCart();
    onSetNavActive();
  };

  return (
    <span
      className="flex gap--sm align--center nav__cart"
      onClick={handleNavCart}
    >
      &#8369;{handleCartTotal() ? handleCartTotal() : "0.00"}
      <CiShoppingCart size={25} />
      {handleCartTotalQuantity() !== 0 && (
        <span className="flex justify--center align--center quantity__counter">
          {handleCartTotalQuantity()}
        </span>
      )}
    </span>
  );
};

export default NavCart;
