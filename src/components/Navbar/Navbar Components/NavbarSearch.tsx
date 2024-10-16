
"use client"
import { useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const NavbarSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const placeholders = [
    "Toys for children",
    "DSLR Camera",
    "SUV for rent",
    "Dell XPS 15 2021",
    "iPhone 13 Pro Max",
  ];
  const [href, setHref] = useState("");

  

  // Handle change event and filter suggestions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = placeholders.filter((placeholder) =>
        placeholder.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion); // Set the clicked suggestion as the input value
    setFilteredSuggestions([]); // Clear the dropdown after selection
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted:", inputValue);
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 md:h-[40rem] md:py-0 h-auto">
      <div className="relative w-full max-w-md">
        {/* Input Field */}
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          valuesearch={inputValue}
        />

        {/* Dropdown for filtered suggestions */}
        {filteredSuggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded shadow-lg max-h-40 overflow-y-auto z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarSearch;
