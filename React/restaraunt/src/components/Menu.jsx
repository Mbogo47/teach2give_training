import menuData from "./menuData.js";
import { FaStar } from "react-icons/fa";
import "./Menu.css"

const MenuItems = ({ img, title, text, rating, discount, price }) => {
  return (
    <div className="menu-items">
      <div className="image-container">
        <img src={img} alt={title} />
        <span className="discount">{discount}</span>
        <div className="rating">
          <FaStar className="star-icon" /> {rating}
        </div>
      </div>
      <h4>{title}</h4>
      <p className="desc">{text}</p>
      <p className="price">{price}</p>
    </div>
  );
};

const Menu = () => {
  return (
    <section className="menu">
      {menuData.map((item, index) => (
        <MenuItems key={index} {...item} />
      ))}
    </section>
  );
};

export default Menu;
