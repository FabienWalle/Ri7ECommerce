const CategoriesSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 h-[80px]">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="flex items-center justify-between border-2 border-black rounded-md p-2 animate-pulse w-[180px] h-[40px] ">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSkeleton;
