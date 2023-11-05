import { useDispatch, useSelector } from "react-redux";
import "./choicesProductCard.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from "../../../Redux/reducer/Shopping Card/shopCardReducer";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ChoicesProductCard = ({
  productImage, 
  productName,
  productPrise,
  productId,
  quantityProduct,
  checked
}) => {
  const dispatch = useDispatch();

  const {cart} = useSelector((state) => state.shopCard)

  const handleOnClickTrash = () => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrement = () => {
    dispatch(incrementProduct({ productId }));
  };

  const handleDecrement = () => {
    dispatch(decrementProduct({ productId }));
  };

  //!
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(productId, 'ooooiiii');
  };

  return (
    <div className="choicesProductCard-container">
      <div className="choiceCheckBox">
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            className="choiceInput"
            checked={checked}
            onChange={handleCheckboxChange}
          />
        </label>
        <Link
          className="link"
          key={productId}
          to={`/productdetail/${productId}`}
        >
          <div className="products">
            <img
              src={`${import.meta.env.VITE_UPLOAD_IMAGE}${productImage}`}
              alt=""
            />
            <div className="productPrise">
              <h4>{productName}</h4>
              <p>Central Jakarta</p>
              <h3>${productPrise}</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="productCount-deleteBin">
        <p>Add to Favourite</p>
        <div className="product-count">
          <span className="minus" onClick={handleDecrement}>
            -
          </span>
          <span>{quantityProduct}</span>
          <span className="plus" onClick={handleIncrement}>
            +
          </span>
        </div>
        <div className="delete-bin" onClick={handleOnClickTrash}>
          <RiDeleteBinLine className="trash" />
        </div>
      </div>
    </div>
  );
};

export default ChoicesProductCard;
