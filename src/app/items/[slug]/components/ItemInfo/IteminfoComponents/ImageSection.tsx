import Image from "next/image";

interface ImageGalleryProps {
  image: string;
  itemName: string;
}

const ImageSection: React.FC<ImageGalleryProps> = ({ image, itemName }) => {
  return (
    <div className="w-full md:w-1/2 flex gap-4 cursor-pointer">
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4].map((_, idx) => (
          <Image
            key={idx}
            src={image}
            alt={`${itemName} ${idx + 1}`}
            width={100}
            height={80}
            className="rounded-md object-cover  hover:opacity-80"
          />
        ))}
      </div>

      <div className="flex-grow ">
        <Image
          src={image}
          alt={itemName}
          width={500}
          height={400}
          className="rounded-md object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ImageSection;
