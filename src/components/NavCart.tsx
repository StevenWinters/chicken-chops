import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../context/CartContext";

const NavCart = () => {
  const { handleOpenCart, handleCartTotal, handleCartTotalQuantity } =
    useCart();
  return (
    <span
      className="flex gap--sm align--center nav__cart"
      onClick={handleOpenCart}
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
