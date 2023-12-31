import { Link } from "react-router-dom";
import { footerIconsData, footerListsData } from "../data/footerData";
import Button from "./Button";
import Logo from "./Logo";

import Header from "./Header";

const Footer = () => {
  return (
    <footer className="block">
      <div className="grid grid--1x3 align--center footer__grid">
        <Header>
          <Logo className="footer__logo" />
          <h3 className="footer__tagline">The Taste of Perfection.</h3>
        </Header>
        <div className="grid grid--1x3 gap">
          {footerListsData.map((data) => (
            <div key={data.id} className="footer__container">
              <h4>{data.section}</h4>
              <ul>
                {data.children.map((data) => (
                  <li key={data.id} className="footer__list">
                    <Link key={data.id} to={data.path} className="footer__link">
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Button className="btn--accent footer__btn">Order Now</Button>
      </div>
      <div className="flex justify--evenly align--center container sub__footer">
        <div className="footer__container">
          <h4>Follow Us On</h4>
          <div className="flex justify--center gap--sm footer__icons">
            {footerIconsData.map((data) => (
              <Link
                key={data.id}
                to={data.path}
                target="_blank"
                aria-label={data.label}
              >
                {data.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer__container">
          <p>&copy;2023 Perfecto! All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
