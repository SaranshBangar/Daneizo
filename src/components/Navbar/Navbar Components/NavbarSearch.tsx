"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const NavbarSearch = () => {
  const placeholders = [
    "Toys for children",
    "DSLR Camera",
    "SUV for rent",
    "Dell XPS 15 2021",
    "iPhone 13 Pro Max",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 md:h-[40rem] md:py-0 h-auto">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default NavbarSearch;
