import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Header = ({ className, children }: Props) => {
  return <header className={`block__header ${className}`}>{children}</header>;
};

export default Header;
