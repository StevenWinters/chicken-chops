import CustomImage from "./CustomImage";
import LoadingImg from "../assets/images/loading.gif";
import { useEffect, useState } from "react";

const Loading = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (document.readyState !== "complete") {
      document.body.style.overflow = "hidden";
      setLoading(true);
    }
    document.body.style.overflow = "auto";
    setLoading(false);
  });

  return (
    <div
      className={`justify--center align--center loading ${
        isLoading && "active"
      }`}
    >
      <CustomImage className="loading__gif" src={LoadingImg} alt="Loading..." />
    </div>
  );
};

export default Loading;
