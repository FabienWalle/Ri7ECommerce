const ProductSkeleton:React.FC = () => {
    return (
        <div className="hero bg-base-200 animate-pulse">
            <div className="hero-content flex-col lg:flex-row">
                <div className="max-w-sm rounded-lg shadow-2xl bg-gray-300 h-48 lg:h-auto lg:w-48"></div>
                <div>
                    <div className="h-12 bg-gray-300 rounded-md w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-300 rounded-md w-full mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded-md w-5/6 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded-md w-2/3 mb-2"></div>
                    <div className="h-10 bg-gray-400 rounded-md w-32"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductSkeleton;
