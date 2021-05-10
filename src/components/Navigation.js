import { NavLink } from "react-router-dom";
import { NavSideData } from "./NavSideData";
import "./Navigation.css";

const Navigation = ({ sidebar }) => {
  return (
    <div>
      <nav className={sidebar ? "nav active" : "nav"}>
        <div className="nav-logo">
          <NavLink className="logo" to="/">
            Graooo
          </NavLink>
        </div>
        <div className={"nav-side"}>
          {NavSideData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  exact
                  activeStyle={{ color: "#e63946" }}
                  to={item.path}
                  className={"link"}
                >
                  {item.icon}
                  <div className={"link-text"}>{item.title}</div>
                </NavLink>
              </li>
            );
          })}
        </div>
        <div className="nav-word">
          <p className="word">
            "I will tell you how to become rich. Close the doors. Be fearful
            when others are greedy. Be greedy when others are fearful."{" "}
          </p>
          <p className="word-author">___Warren Buffet___</p>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
