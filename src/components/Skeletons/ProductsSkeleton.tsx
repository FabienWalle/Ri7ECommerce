const ProductsSkeleton: React.FC = () => {
    return (
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="animate-pulse bg-base-100 shadow-xl h-[550px] w-[290px]">
            <div className="w-full h-1/2 bg-gray-300"></div>
            <div className="h-1/2 p-4 space-y-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="flex justify-around">
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductsSkeleton;
  