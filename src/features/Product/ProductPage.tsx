import ProductSkeleton from "@/components/Skeletons/ProductsSkeleton"
import MainLayout from "@/layouts/MainLayout"
import { useGetProductByIdQuery } from "@/store/api/productsSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addToCart } from "@/store/states/cart.slice";

const ProductPage = () => {
    const { id } = useParams();
    if (!id) return <div>Product not found</div>;
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useGetProductByIdQuery(parseInt(id));

    const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        if (quantity > 0 && data) { 
            dispatch(addToCart({
                productId: data.id,
                title: data.title,
                quantity: quantity,
                price: data.price
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

    if (isError) return <MainLayout><div>Error loading product</div></MainLayout>;
    if (isLoading) return <MainLayout><ProductSkeleton /></MainLayout>;
    if (!data) return <MainLayout><div>Product not found</div></MainLayout>; 

    return (
        <MainLayout>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={data.image} alt={data.title} className="max-w-sm rounded-lg shadow-2xl max-h-sm" />
                    <div>
                        <h1 className="text-5xl font-bold">{data.title}</h1>
                        <p className="py-6">{data.description}</p> 
                        <div className="card-actions justify-around mt-3">
                            <div className="btn-group h-10">
                                <button className="btn" onClick={handleDecrement}>-</button>
                                <button className="btn">{quantity}</button>
                                <button className="btn" onClick={handleIncrement}>+</button>
                            </div>
                            <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default ProductPage;
