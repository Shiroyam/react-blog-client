import "./navbar.scss";
import searchIcon from "./../../assets/png/search.png";
import userIcon from "./../../assets/png/user.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__content">
          <div className="navbar__header">VASYA BLOG</div>
          <div className="menu__icon">
            <img src={searchIcon} className="menu__searchIcon"></img>
            <img src={userIcon} className="menu__userIcon"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
