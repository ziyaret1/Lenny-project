import ReviewList from "./Review List/ReviewList";
import ReviewRating from "./Review Result/ReviewRating";
import ReviewsFilter from "./Reviews Filter/ReviewsFilter";
import "./productReviews.scss";

const ProductReviews = () => {
  return (
    <div className="productReviews-container">
      <ReviewRating />
      <div className="filter-list">
        <ReviewsFilter />
        <ReviewList />
      </div>
      <div className="borderBottom"></div>
    </div>
  );
};

export default ProductReviews;
