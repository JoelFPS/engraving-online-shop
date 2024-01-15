import { FaShoppingCart, FaStar} from 'react-icons/fa';
import "../../Styles/products.scss";
import { useRef, useEffect } from 'react';


export function Products(props) {
    const effectRan = useRef(false);
    useEffect(() => {
        if (!effectRan.current) {
            console.log("effect applied - only on the FIRST mount");
        }
    })

    return(
            <div key={"a_"+props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                <div className='productCard__content'>
                    <div className='displayStack__1'>
                        <h3 className='productName'>{props.name}</h3>
                        <div className='productPrice'>{props.price} zł</div>
                    </div>
                    <div className='displayStack__2'>
                        <div className='productRating'>
                            {[...Array(props.rating)].map((val, idx) => (
                                <FaStar className={(idx + 1) } key={props.id + "_c_" + idx } />
                            ))}
                            <FaShoppingCart className={"productCard__cart"} />
                        </div>
                    </div>
                </div>
            </div>
    )
}