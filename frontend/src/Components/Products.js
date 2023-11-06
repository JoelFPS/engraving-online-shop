import { FaShoppingCart, FaStar} from 'react-icons/fa';
import "../Styles/products.scss";

export function Products(props) {
    return(
        
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                <div className='productCard__content'>
                    <div className='displayStack__1'>
                        <h3 className='productName'>{props.name}</h3>
                        <div className='productPrice'>{props.price} zł</div>
                    </div>
                    <div className='displayStack__2'>
                        <div className='productRating'>
                            {[...Array(props.rating)].map((index) => (
                                <FaStar id={index + 1 } key={index} />
                            ))}
                            <FaShoppingCart className={"productCard__cart"} />
                        </div>
                    </div>
                </div>
            </div>
    )
}