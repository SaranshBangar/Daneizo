import React from "react";

interface ItemInfoDescriptionProps {}

const ItemInfoDescription: React.FC<ItemInfoDescriptionProps> = ({}) => {
  return (
    <div className="p-6 rounded-lg shadow-lg ">
      <table className="w-full text-left text-white border-collapse">
        <tbody>
          <tr className=" ">
            <th className="py-2 font-medium">Brand</th>
            <td className="py-2  text-white/80">Toyota</td>
          </tr>
          <tr className="">
            <th className="py-2  font-medium">Dimensions</th>
            <td className="py-2  text-white/80">4.8m x 1.9m x 1.4m</td>
          </tr>
          <tr className="">
            <th className="py-2  font-medium">Color</th>
            <td className="py-2  text-white/80">Red</td>
          </tr>
          <tr className="">
            <th className="py-2 font-medium">Rating</th>
            <td className="py-2  text-white/80">4.3</td>
          </tr>
        </tbody>
      </table>
      {/* About Items - Spanning two columns */}
      <div>
        <h1 className="py-2  font-medium align-top text-white">About items</h1>
        <p className="py-2 px-4 text-white/80 ">
          This car is designed for both comfort and performance. It features a
          powerful engine, luxurious interiors, and advanced safety features,
          making it a perfect choice for families and road trips. With a sleek
          design and top-tier ratings in fuel efficiency, it stands out in its
          category. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit aperiam fuga pariatur non, ipsa vitae labore animi distinctio
          ut fugiat sapiente tempore rem. Ut, tenetur provident? Ipsa ipsum
          tenetur voluptatem? Animi incidunt error ducimus.
        </p>
      </div>
    </div>
  );
};

export default ItemInfoDescription;
