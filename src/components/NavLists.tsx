import { Link } from "react-router-dom";
import { navListsData } from "../data/navListsData";

const NavLists = () => {
  return (
    <ul className="flex nav__lists">
      {navListsData.map((data) => (
        <li key={data.id} className="nav__list">
          <Link to={data.path} className="nav__link">
            {data.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLists;
