import Spinner from "@/components/Spinner";
import MainLayout from "@/layouts/MainLayout";
import { useDeleteProductMutation, useGetProductsQuery } from "@/store/api/productsSlice";
import { Product } from "@/types/ProductTypes";
import { TrashIcon } from "@heroicons/react/24/outline";

const AdminPage = () => {
    const { data: products, isLoading: isLoadingProducts } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();

    const handleDelete = async (id: number) => {
        await deleteProduct({id}).unwrap();
    };

    return (
        <MainLayout>
            {isLoadingProducts
                ? <Spinner isLoading={isLoadingProducts} loaderType="spinner" />
                : <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Liste des Produits</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full table-zebra">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Titre</th>
                                        <th>Prix</th>
                                        <th>Catégorie</th>
                                        <th>Avis</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products && products.map((product:Product) => (
                                        <tr key={product.id} className="hover text-center">
                                            <td>{product.id}</td>
                                            <td>{product.title}</td>
                                            <td>{product.price}</td>
                                            <td>{product.category}</td>
                                            <td>{product.rating.rate} pour {product.rating.count} avis</td>
                                            <td>
                                                <button
                                                    className="text-error"
                                                    onClick={() => handleDelete(product.id)}
                                                >
                                                    <TrashIcon className="h-6 w-6 text-error" />
                                                </button>
                                           </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </MainLayout>
    );
}

export default AdminPage;
