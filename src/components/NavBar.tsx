import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavCart from "./NavCart";
import NavLists from "./NavLists";
import { useStore } from "../context/StoreContext";

const NavBar = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));

    if (pathname === "/") setHeaderActive(true);
    else setHeaderActive(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e: any) => {
    const window = e.currentTarget;
    if (window.scrollY >= 500 || pathname === "/store")
      return setScrollActive(true);
    return setScrollActive(false);
  };

  const { handleFilterActive, handleStoreFilter } = useStore();

  const handleFilter = (category: string) => {
    setNavActive(false);
    handleFilterActive(category);
    handleStoreFilter(category);
  };

  return (
    <header
      className={`nav__header ${headerActive && "active"} ${
        scrollActive && "scroll-active"
      }`}
    >
      <nav
        className={`flex justify--between align--center container nav__bar ${
          navActive && "active"
        }`}
      >
        <span onClick={() => setNavActive(false)}>
          <Logo className="nav__logo" />
        </span>
        <NavLists onSetNavActive={() => setNavActive(false)} />
        <div className="flex justify--between align--center gap nav__container">
          <NavCart onSetNavActive={() => setNavActive(false)} />
          <Link to="/store" onClick={() => handleFilter("All")}>
            <Button className="btn--accent nav__btn">Order Now</Button>
          </Link>
          <HamburgerMenu onSetNavActive={() => setNavActive(true)} />
        </div>
        <span
          className="icon icon--close nav__close"
          onClick={() => setNavActive(false)}
        >
          <IoMdClose color="var(--color-dark)" size={25} />
        </span>
      </nav>
    </header>
  );
};

export default NavBar;
