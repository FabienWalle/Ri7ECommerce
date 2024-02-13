import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { addToCart } from "@/store/states/cart.slice";
import { Product } from "@/types/ProductTypes";

interface CardProps {
    product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation(); 
        if (quantity > 0) {
            dispatch(addToCart({
                productId: product.id,
                title: product.title,
                quantity: quantity,
                price: product.price
            }));
        }
    };

    const handleIncrement = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation(); 
        setQuantity(prevQuantity => (prevQuantity < 10 ? prevQuantity + 1 : prevQuantity));
    };

    const handleDecrement = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation(); 
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : prevQuantity));
    };

    const navigateToProductDetail = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="card bg-base-100 shadow-xl h-[600px] w-full" onClick={navigateToProductDetail}>
            <div className="h-full flex flex-col justify-around">
                <figure className=" w-40 max-w-[200px] m-auto h-1/2">
                    <img src={product.image} alt={product.title} />
                </figure>
                <div className="card-body h-1/2 flex flex-col justify-center">
                    <h2 className="card-title overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
                    <div className="flex justify-between">
                        <span>
                            {product.price} €
                        </span>
                        <span>
                            {product.rating.rate} ({product.rating.count} reviews)
                        </span>
                    </div>
                    <div className="card-actions justify-around mt-3">
                        <div className="btn-group h-10">
                            <button className="btn" onClick={handleDecrement}>-</button>
                            <button className="btn" >{quantity}</button>
                            <button className="btn" onClick={handleIncrement}>+</button>
                        </div>
                        <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
