import { ReactNode, createContext, useContext, useState } from "react";
import { ModalData } from "./StoreContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Cart from "../components/Cart";
import AlertModal from "../components/AlertModal";

interface Props {
  children: ReactNode;
}

interface CartContext {
  handleOpenCart: () => void;
  handleCloseCart: () => void;
  handlePassCartData: (modalData: ModalData, modalQuantity: number) => void;
  handleChangeCartQuantity: (operation: number, name: string) => void;
  handleCalculatePrice: (modalQuantity: number, modalPrice: number) => number;
  handleRemoveCartItem: (name: string) => void;
  handleCartTotal: () => number;
  handleCartTotalQuantity: () => number;
  handleCloseModal: () => void;
  handleOrderFromCart: () => void;
}

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }: Props) {
  const [isCartOpen, setToggleCart] = useState(false);
  const [cart, setCart] = useLocalStorage<ModalData[]>(
    "users-shopping-cart",
    []
  );
  const [alert, setAlert] = useState({
    status: false,
    message: "",
  });

  const handleOpenCart = () => setToggleCart(true);
  const handleCloseCart = () => setToggleCart(false);

  const handlePassCartData = (modalData: ModalData, modalQuantity: number) => {
    if (cart.find((item) => item.name === modalData.name))
      return setAlert({
        status: false,
        message: "This item is already added to your cart.",
      });
    setCart([...cart, { ...modalData, quantity: modalQuantity }]);
  };

  const handleChangeCartQuantity = (operation: number, name: string) => {
    setCart((currentItems) => {
      return currentItems.map((item) => {
        if (item.name === name) {
          if (operation === -1)
            if (item.quantity > 1)
              return { ...item, quantity: item.quantity + operation };
            else {
              return item;
            }
          else {
            if (item.quantity < 100)
              return { ...item, quantity: item.quantity + operation };
            else {
              return item;
            }
          }
        } else {
          return item;
        }
      });
    });
  };

  const handleRemoveCartItem = (name: string) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  const handleCalculatePrice = (modalQuantity: number, modalPrice: number) => {
    return parseFloat((modalQuantity * modalPrice).toFixed(2));
  };

  const handleCartTotal = () => {
    return cart.reduce(
      (total, item) =>
        parseFloat(
          (handleCalculatePrice(item.quantity, item.price) + total).toFixed(2)
        ),
      0
    );
  };

  const handleCartTotalQuantity = () => {
    return cart.reduce((total, item) => item.quantity + total, 0);
  };

  const handleCloseModal = () => {
    setAlert({ ...alert, message: "" });
  };

  const handleOrderFromCart = () => {
    if (cart.length === 0)
      return setAlert({
        status: false,
        message:
          "You have not added any items to your cart yet.  Feel free to add any items to your cart if you ever want to order something.",
      });
    setCart([]);
    setAlert({
      status: true,
      message: "Ordered Successfully",
    });
  };

  return (
    <CartContext.Provider
      value={{
        handleOpenCart,
        handleCloseCart,
        handlePassCartData,
        handleChangeCartQuantity,
        handleCalculatePrice,
        handleRemoveCartItem,
        handleCartTotal,
        handleCartTotalQuantity,
        handleCloseModal,
        handleOrderFromCart,
      }}
    >
      {children}
      <Cart isCartOpen={isCartOpen} cart={cart} />
      <AlertModal alert={alert} />
    </CartContext.Provider>
  );
}
