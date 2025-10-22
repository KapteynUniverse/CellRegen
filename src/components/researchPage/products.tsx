import Image from "next/image";
import Link from "next/link";

const productResearchItems = [
  {
    name: "StemXR",
    image: "STEMXR-Infographics.webp",
    link: "/research/cellregen-stemxr®-scientific-research",
  },
  {
    name: "NAD+HER",
    image: "NAD_HER-Infographics.webp",
    link: "/research/cellregen-stemxr®-scientific-research",
  },
  {
    name: "NAD+HIM",
    image: "NAD_HIM-Infographics.webp",
    link: "/research/cellregen-stemxr®-scientific-research",
  },
  {
    name: "NAD+BURN",
    image: "NAD_BURN-Infographics.webp",
    link: "/research/cellregen-stemxr®-scientific-research",
  },
];

const Products = () => {
  return (
    <section aria-labelledby="product-research">
      <h2 id="product-research" className="sr-only">
        Research of our products
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        {productResearchItems.map(({ image, name, link }) => (
          <li key={name}>
            <article>
              <Link href={link}>
                <Image
                  src={`/images/research/products/${image}`}
                  alt={`Go to Cellregen ${name} research references page`}
                  width={700}
                  height={700}
                />
              </Link>

              <h3>
                Research References for Cellregen {name}
                <span aria-hidden>™</span> Ingredients
              </h3>

              <p>
                Scientific Breakdown and Research References for Cellregen{" "}
                {name}
                <span aria-hidden>™</span> Ingredients
              </p>

              <Link href={link}>
                Read More{" "}
                <span className="sr-only">about Cellregen {name}</span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
