import Card from "@/components/Card";
import CategoriesSkeleton from "@/components/Skeletons/CategoriesSkeleton";
import ProductsSkeleton from "@/components/Skeletons/ProductsSkeleton";
import MainLayout from "@/layouts/MainLayout";
import { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductsQuery } from "@/store/api/productsSlice";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MainPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const { data: products, isLoading: isLoadingProducts } = useGetProductsQuery();
    const { data: categories, isLoading: isLoadingCategoryProducts } = useGetCategoriesQuery();
    const { data: productsByCategory, isLoading: isLoadingProductsByCategory } = useGetProductsByCategoryQuery(selectedCategory ?? '', {
        skip: !selectedCategory,
    });
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const displayedProducts = searchTerm
        ? products?.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : selectedCategory 
            ? productsByCategory : products;

    return (
        <MainLayout>
            <section className="w-full">
                <span className="w-full text-start">
                    <h3 className="ms-2 uppercase"><strong>Categories</strong></h3>
                </span>

                {isLoadingCategoryProducts ? <CategoriesSkeleton /> : (
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {categories?.map((category, index) => (
                            <div key={index} className="flex items-center justify-between border-2 border-black rounded-md p-2"
                                onClick={() => handleCategoryClick(category)}>
                                <span className="text-left">{category}</span>
                                <img
                                    src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt={category}
                                    className="h-10 w-10 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}

                <section>
                    <span className="w-full flex justify-between">
                        <h3 className="ms-2 uppercase mb-2"><strong>Products</strong></h3>
                        <div className="flex items-center me-2">
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button onClick={() => setSearchTerm('')} className="btn btn-square">
                                <MagnifyingGlassIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </span>
                    {(isLoadingProducts || isLoadingProductsByCategory) ? <ProductsSkeleton /> : (
                        <div className="grid grid-cols-3 gap-2">
                            {(searchTerm ? displayedProducts : (selectedCategory ? productsByCategory : products))?.map((product, index) => (
                                <Card key={index} product={product} />
                            ))}
                        </div>
                    )}
                </section>
            </section>
        </MainLayout>
    );
};

export default MainPage;
