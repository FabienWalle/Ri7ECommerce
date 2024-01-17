import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '@/store/states/cart.slice';
import { TrashIcon } from "@heroicons/react/24/outline";
import MainLayout from '@/layouts/MainLayout';
import { RootState } from '@/store';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    const handleIncrement = (productId:number) => {
        dispatch(incrementQuantity(productId));
    };

    const handleDecrement = (productId:number) => {
        dispatch(decrementQuantity(productId));
    };

    const handleRemove = (productId:number) => {
        dispatch(removeFromCart(productId));
    };
    return (
        <MainLayout>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Mon Panier</h2>
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className='text-center'>
                                <th>Produit</th>
                                <th>Quantité</th>
                                <th>Prix Unitaire</th>
                                <th>Prix Total</th>
                            </tr>
                        </thead>
                        <tbody>
                {cartItems.map((item, index) => (
                    <tr key={index} className='hover'>
                        <td className='text-center'>{item.title}</td>
                        <td className='text-center'>
                            <button onClick={() => handleDecrement(item.productId)} className='btn btn-error btn-outline btn-sm'>-</button>
                           <button className='btn btn-sm'>{item.quantity}</button> 
                            <button onClick={() => handleIncrement(item.productId)} className='btn btn-info btn-outline btn-sm'>+</button>
                        </td>
                        <td className='text-center'>{item.price} €</td>
                        <td className='text-center'>{(item.quantity * item.price).toFixed(2)} €</td>
                        <td className='text-center'>
                            <button onClick={() => handleRemove(item.productId)}>
                                <TrashIcon className="h-6 w-6 text-error" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
                    </table>
                   
                    <div className="text-right">
                        <b>Total: {totalPrice.toFixed(2)} €</b>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CartPage;
