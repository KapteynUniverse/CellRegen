import Image from "next/image";
import Link from "next/link";

const UnderstandingProduct = () => {
  return (
    <section aria-labelledby="understanding-title" className="bg-secondaryBg ">
      <div className="wrapper flex flex-row-reverse">
        <div className="flex-1">
          <Image
            src="/images/products/Nad_Burn/NAD_BURN_60_Capsules-Burn-Fat.webp"
            width={1600}
            height={1600}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2 id="understanding-title">
            Understanding NAD+BURN<span aria-hidden>®</span> Ingredients &
            Clinical Trials
          </h2>
          <p>
            NAD+BURN<span aria-hidden>®</span>
          </p>
          <p>
            Boost metabolism, accelerate fat loss, and enhance energy with
            CellRegen<span aria-hidden>®</span> NAD+BURN
            <span aria-hidden>™</span>, formulated to support thermogenesis,
            optimize mitochondrial function, and promote lean muscle
            preservation. Learn more about its ingredients and health benefits.
          </p>
          <Link href="/products/nad-burn">Learn More</Link>
          <Image
            src="/images/products/Nad_Burn/NAD_BURN_60_Capsules-Lose-Weight.webp"
            width={1600}
            height={1600}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default UnderstandingProduct;
