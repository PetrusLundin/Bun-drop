import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "../context/app-context";
import { useContext } from "react";

function ItemCard(props) {
  const { id, name, info, price, image } = props.data;
  const { addToCart } = useContext(AppContext);

  return (
    <div className="item-card">
      <div className="front-of-card">
        <img className="item-image" src={image} />
        <div classname className="item-name">
          <p> {name}</p>
        </div>
      </div>
      <div className="back-of-card">
        <p className="item-info">{info}</p>
        <div className="back-card-wrap">
          <p className="item-price"> ${price} </p>
          {props.showButton && (
            <button className="add-item" onClick={() => addToCart(id)}>
              Get ze item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
