import Header from "@/components/Header"
import Spinner from "@/components/Spinner";
import { useGetCategoriesQuery } from "@/store/api/categoriesSlice";
import { useGetProductsQuery } from "@/store/api/productsSlice"
import { Product } from "@/types/ProductTypes";




const MainPage = () => {
    const { data: products, isLoading } = useGetProductsQuery<Product>(undefined);
    const { data: categories } = useGetCategoriesQuery(undefined)

    if (products) {
        console.log(products);
    }

    if (categories) console.log(categories);




    return (
        <div className="h-full w-full">
            <Header />
            {isLoading && <Spinner loaderType="spinner" isLoading={isLoading} />}
        </div>
    )
}

export default MainPage
