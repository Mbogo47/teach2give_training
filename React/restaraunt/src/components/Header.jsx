import "./Header.css";
import img1 from "/cocktail.png";

const HeaderItem = ({ img, text }) => {
  return (
    <div className="header-items">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <HeaderItem img={img1} text={"All"} />
        <HeaderItem img={img1} text={"All"} />
        <HeaderItem img={img1} text={"All"} />
        <HeaderItem img={img1} text={"All"} />
        <HeaderItem img={img1} text={"All"} />
        <HeaderItem img={img1} text={"All"} />
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default Header;
