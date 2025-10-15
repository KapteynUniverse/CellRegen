import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={"/images/Hero_img_desktop.webp"}
        />

        <Image
          src={"/images/Hero_img_mobile.webp"}
          alt=""
          className="w-full object-contain"
          width={700}
          height={700}
        />
      </picture>
      <Link
        href="/collections/all"
        className="underline absolute right-0 bottom-0 -translate-x-4 -translate-y-4"
      >
        Formulations
      </Link>
    </div>
  );
};

export default Hero;
