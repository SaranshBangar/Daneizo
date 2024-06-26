"use client";

const searchIcon = require("./../../../../public/Search.svg");

const searchItem = () => {
  console.log("Search Initiated");
}

const SearchNavbar = () => {
  return (
    <div className="flex gap-2 items-center">
      <img
        src={searchIcon}
        alt="Search"
        className="cursor-pointer"
        onClick={searchItem}
      />
      <input
        type="text"
        placeholder="Search For Home Appliances..."
        className="bg-transparent outline-none border-b-2 w-[220px] border-white text-white placeholder-[rgba(255, 255, 255, 0.66)] placeholder:text-[14px]"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            searchItem();
          }
        }}
      />
    </div>
  );
}

export default SearchNavbar;