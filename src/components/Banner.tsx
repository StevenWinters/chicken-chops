import { Link } from "react-router-dom";
import Button from "./Button";
import CustomImage from "./CustomImage";
import Header from "./Header";

interface Data {
  id: number;
  src: string;
  alt: string;
}

interface Props {
  data: Data[];
  heading: string;
  btnName: string;
  btnClass?: string;
  className?: string;
  path: string;
  onClick?: () => void;
}

const Banner = ({
  data,
  heading,
  btnName,
  btnClass,
  className,
  path,
  onClick,
}: Props) => {
  return (
    <section className={`block banner ${className}`}>
      <div className="container">
        <Header>
          <h2>{heading}</h2>
        </Header>
        <div className="grid grid--1x3 grid--center gap banner__container banner__grid">
          {data.map((data) => (
            <CustomImage
              key={data.id}
              className="img--500 img--border banner__img"
              src={data.src}
              alt={data.alt}
            />
          ))}
          <Link to={path} className="banner__btn" onClick={onClick}>
            <Button className={`banner__btn ${btnClass}`}>{btnName}</Button>
          </Link>
        </div>
        <Link to={path} className="banner__sub-btn" onClick={onClick}>
          <Button className={`banner__sub-btn ${btnClass}`}>{btnName}</Button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
