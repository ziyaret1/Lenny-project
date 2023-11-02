import { useDispatch, useSelector } from "react-redux";
import "./choicesProductCard.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../../Redux/reducer/Shopping Card/shopCardReducer";

// eslint-disable-next-line react/prop-types
const ChoicesProductCard = ({ productImage, productName, productPrise, productId }) => {

  const { cart } = useSelector((state) => state.shopCard);

  const dispatch = useDispatch();

  const handleOnClickTrash = () => {
    dispatch(removeFromCart(productId));
  };
  

  return (
    <div className="choicesProductCard-container">
      <div className="choiceCheckBox">
        <label htmlFor="checkbox">
          <input type="checkbox" className="choiceInput" />
        </label>
        <Link className="link" key={cart.productId} to={`/productdetail/${cart.productId}`}>
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
          <span className="minus">-</span>
          <span>1</span>
          <span className="plus">+</span>
        </div>
        <div className="delete-bin"  onClick={handleOnClickTrash} >
          <RiDeleteBinLine className="trash"/>
        </div>
      </div>
    </div>
  );
};

export default ChoicesProductCard;
