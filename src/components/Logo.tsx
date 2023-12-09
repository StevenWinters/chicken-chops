import { Link } from "react-router-dom";
import Image from "../assets/images/logo.png";
import CustomImage from "./CustomImage";

interface Props {
  className: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link to="/">
      <CustomImage className={className} src={Image} alt="Chicken Chops Logo" />
    </Link>
  );
};

export default Logo;
