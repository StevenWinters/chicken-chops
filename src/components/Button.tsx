import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className }: Props) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
