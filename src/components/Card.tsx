import { Product } from "@/types/ProductTypes";
import { useState } from "react";

interface CardProps {
    product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(prevQuantity => (prevQuantity < 10 ? prevQuantity + 1 : prevQuantity));
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : prevQuantity));
    };
    return (
        <div className="card bg-base-100 shadow-xl max-w-md max-h-md">
            <div className="h-full flex flex-col justify-around">
                <figure className=" w-40 max-w-[200px] m-auto h-1/2">
                    <img src={product.image} alt={product.title} />
                </figure>
                <div className="card-body h-1/2">
                    <h2 className="card-title overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
                    <p className="text-pretty overflow-hidden text-ellipsis whitespace-nowrap">{product.description}</p>
                    <div className="flex justify-between">
                        <span>
                            {product.price} €
                        </span>
                        <span>
                            {product.rating.rate} ({product.rating.count} reviews)
                        </span>
                    </div>
                    <div className="card-actions justify-around">
                        <div className="btn-group">
                            <button className="btn" onClick={handleDecrement}>-</button>
                            <button className="btn">{quantity}</button>
                            <button className="btn" onClick={handleIncrement}>+</button>
                        </div>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Card;