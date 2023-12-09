import { AiFillCheckCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdError } from "react-icons/md";
import Button from "./Button";
import { useCart } from "../context/CartContext";

interface Alert {
  status: boolean;
  message: string;
}

interface Props {
  alert: Alert;
}

const AlertModal = ({ alert }: Props) => {
  const { handleCloseModal } = useCart();
  return (
    <>
      {alert.message && (
        <div className="flex justify--center align--center overlay active">
          <div className="flex flex--column justify--center align--center gap alert__modal">
            {alert.status ? (
              <AiFillCheckCircle size={100} color="45c70e" />
            ) : (
              <MdError size={100} color="f5ac0f" />
            )}
            <p>{alert.message}</p>
            <span onClick={handleCloseModal}>
              <Button className="btn--primary btn--sm">Close</Button>
            </span>
            <span className="icon icon--close" onClick={handleCloseModal}>
              <IoMdClose color="var(--color-dark)" size={25} />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertModal;
