import Main from "@/components/main";
import { Arrow2 } from "@/components/svgComponents";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <Main title="Collections" style="bg-secondaryBg text-secondaryFg">
      <div className="wrapper">
        <Link
          href="/collections/all"
          className="relative inline-block group scale-75"
        >
          <Image
            src="/images/Cellregen-Products-Logo.webp"
            width={600}
            height={600}
            alt="collections"
            className="group-hover:scale-110 transition-all duration-1000"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-4 text-white w-full flex justify-between">
            <span>Cellregen Longevity Products</span>
            <div
              className="relative flex items-center overflow-hidden w-6"
              aria-hidden
            >
              <Arrow2 style="arrow arrow--first" />
              <Arrow2 style="arrow arrow--second" />
            </div>
          </div>
        </Link>
      </div>
    </Main>
  );
};

export default Page;
