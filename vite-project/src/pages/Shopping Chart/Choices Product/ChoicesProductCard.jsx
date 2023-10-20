import './choicesProductCard.scss'
import {RiDeleteBinLine} from 'react-icons/ri'

// eslint-disable-next-line react/prop-types
const ChoicesProductCard = ({productImage, productName, productPrise}) => {
  return (
    <div className='choicesProductCard-container'>
        <div className="choiceCheckBox">
        <label htmlFor='checkbox'>
        <input type="checkbox"  className='choiceInput'/>
        </label>
        <div className="products">
            <img src={productImage} alt="" />
            <div className="productPrise">
            <h4>{productName}</h4>
            <p>Central Jakarta</p>
            <h3>{productPrise}</h3>
            </div>
        </div>
        </div>
        <div className="productCount-deleteBin">
                <p>Add to Favourite</p>
                <div className="product-count">
                <span className='minus'>-</span>
                <span>1</span>
                <span className='plus'>+</span>
            </div>
            <div className="delete-bin">
                <RiDeleteBinLine className='trash'/>
            </div>
            </div>
    </div>
  )
}

export default ChoicesProductCard