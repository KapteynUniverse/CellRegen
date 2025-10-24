import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  imgUrl: string;
  title: string;
  oldPrice?: string;
  currentPrice: string;
  discount?: string;
  inStock: boolean;
};

const ProductCard = ({
  imgUrl,
  title,
  oldPrice,
  currentPrice,
  discount,
  inStock,
}: ProductCardProps) => {
  return (
    <li className={`group ${inStock ? "opacity-100" : "opacity-50"}`}>
      <div className="relative">
        <Image
          src={imgUrl}
          alt=""
          width={450}
          height={675}
          className="w-full"
        />
        <button className="absolute right-1/2 translate-x-1/2 bottom-4 uppercase text-center bg-secondaryBg w-11/12 outline-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
          Quick View
        </button>
        {discount && (
          <p className="absolute top-2 left-2 px-1 py-1.5 uppercase bg-secondaryBg text-accent outline-1 outline-accent w-fit">
            {discount}
          </p>
        )}
      </div>
      <div className="text-center">
        <h2>
          <Link
            href="/collections/CellRegen-Female-Renewal-Protocol"
            className="uppercase"
          >
            {title}
          </Link>
        </h2>
        <p>Cellregen UK</p>
        <dl className="flex justify-center">
          {oldPrice && (
            <>
              <dt className="sr-only">Old Price</dt>
              <dd className="line-through">{oldPrice}</dd>
            </>
          )}
          <dt className="sr-only">Current Price</dt>
          <dd className={`${oldPrice ? "text-accent" : ""}`}>{currentPrice}</dd>
        </dl>
      </div>
    </li>
  );
};

export default ProductCard;
