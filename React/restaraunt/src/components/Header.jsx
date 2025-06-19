import "./Header.css";
import img1 from "/cocktail.png";
import img2 from "/pizza.png"
import img3 from "/salad.png"
import img4 from "/ice-cream-cup.png"
import img5 from "/chili-pepper.png"
import img6 from "/bell.png"

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
        <HeaderItem img={img6} text={"All"} />
        <HeaderItem img={img1} text={"Drinks"} />
        <HeaderItem img={img2} text={"Pizza"} />
        <HeaderItem img={img3} text={"Salad"} />
        <HeaderItem img={img5} text={"Spicy"} />
        <HeaderItem img={img4} text={"Sweet"} />
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default Header;
