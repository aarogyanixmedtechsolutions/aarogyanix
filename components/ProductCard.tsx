import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

const ProductCard = ({
  name,
  short_description,
  img,
}: {
  name: string;
  short_description: string;
  img: string;
}) => {
  return (
    <div className="p-6 pb-8 border border-[#E6E6F0] rounded-xl shadow-md shadow-[#0A0D1208]">
      <Image
        src={img}
        alt="product"
        width={330}
        height={300}
        className="w-full"
        quality={100}
      />
      <div className="mt-4 sm:mt-6 lg:mt-8 flex items-center justify-between gap-2">
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800">
          {name}
        </p>
        <IconArrowUpRight className="text-[#26A2DC]" />
      </div>
      <p className="mt-3 text-[#666666] text-xs sm:text-sm lg:text-base">
        {short_description}
      </p>
    </div>
  );
};

export default ProductCard;
