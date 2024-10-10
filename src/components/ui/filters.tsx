const FiltersColumn = () => {
    return (
      <div className="w-1/4 p-4 mt-14 bg-gray-100 border border-gray-300 rounded-lg space-y-6 max-h-screen overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Filters</h1>
  
        {/* Category Filter */}
        <div>
          <h2 className="font-semibold mb-2">Category</h2>
          <div className="flex flex-col space-y-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox rounded text-purple-600 focus:ring focus:ring-purple-500" />
              <span className="ml-2">Electronics</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox rounded text-purple-600 focus:ring focus:ring-purple-500" />
              <span className="ml-2">Furniture</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox rounded text-purple-600 focus:ring focus:ring-purple-500" />
              <span className="ml-2">Appliances</span>
            </label>
          </div>
        </div>
  
        {/* Price Filter */}
        <div>
          <h2 className="font-semibold mb-2">Price Range</h2>
          <div className="flex items-center space-x-2">
            <span>$0</span>
            <input
              type="range"
              min="0"
              max="1000"
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
            <span>$1000</span>
          </div>
        </div>
  
        {/* Sort Filter */}
        <div>
          <h2 className="font-semibold mb-2">Sort By</h2>
          <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-500">
            <option value="popularity">Popularity</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default FiltersColumn;
  