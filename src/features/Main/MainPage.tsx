import Card from "@/components/Card";
import Header from "@/components/Header"
import Spinner from "@/components/Spinner";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/store/api/productsSlice"
import { useSelector } from "react-redux";

const MainPage = () => {
    const { data: products, isLoading } = useGetProductsQuery(undefined);
    const { data: categories } = useGetCategoriesQuery(undefined)
    const theme = useSelector((state) => state.theme.theme);


    return (
        <div className="h-full w-full" data-theme={theme}>
            <Header />
            {isLoading && <Spinner loaderType="spinner" isLoading={isLoading} />}
            <section className="w-full">
                <span className="w-full text-start">
                    <h3 className="ms-2 uppercase"><strong>Categories</strong></h3>
                </span>
                <div className="grid grid-cols-4 gap-4 p-4">
                    {
                        categories?.map((category, index) => (
                            <div key={index} className="flex items-center justify-between border-2 border-black rounded-md p-2">
                                <span className="text-left">{category}</span>
                                <img
                                    src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt={category}
                                    className="h-10 w-10 object-cover"
                                />
                            </div>
                        ))
                    }
                </div>
                <section>
                    <span className="w-full text-start">
                        <h3 className="ms-2 uppercase">
                            <strong>

                            Products
                            </strong>
                        </h3>
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                        {
                            products?.map((product, index) => (
                                <Card key={index} product={product} />
                            ))
                        }
                    </div>
                </section>
            </section>

        </div>

    )
}

export default MainPage
