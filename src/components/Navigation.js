import { Link } from "react-router-dom";
import { NavSideData } from "./NavSideData";
import "./Navigation.css";

const Navigation = ({ sidebar }) => {
  return (
    <div>
      <nav className={sidebar ? "nav active" : "nav"}>
        <div className="nav-logo">
          <Link className="logo" to="/">
            Graooo
          </Link>
        </div>
        <div className={"nav-side"}>
          {NavSideData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className={"link"}>
                  {item.icon}
                  <div className={"link-text"}>{item.title}</div>
                </Link>
              </li>
            );
          })}
        </div>
        <div className="nav-word">"I read it on reddit" ___Graooo___</div>
      </nav>
    </div>
  );
};

export default Navigation;
