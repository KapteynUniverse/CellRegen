import ProductCard from "@/components/collections/productCard";
import Main from "@/components/main";

const Products = [
  {
    imgUrl: "/images/products/CellRegen-Female-Renewal-Protocol.webp",
    title: "CellRegen Female Renewal Protocol",
    oldPrice: "£220.00",
    currentPrice: "£195.00",
    discount: "11% off",
    inStock: true,
  },
  {
    imgUrl: "/images/products/CellRegen-Male-Vitality-Protocol.webp",
    title: "CellRegen Male Vitality Protocol",
    oldPrice: "£220.00",
    currentPrice: "£195.00",
    discount: "11% off",
    inStock: true,
  },
  {
    imgUrl: "/images/products/CellRegen-Metabolic-Reset-Protocol.webp",
    title: "CellRegen Metabolic Reset Protocol",
    oldPrice: "£220.00",
    currentPrice: "£195.00",
    discount: "11% off",
    inStock: true,
  },
  {
    imgUrl:
      "/images/products/NAD_BURN_-60-Capsules-_-Lose-Weight_-Burn-Fat_-Boost-Energy-_-Enhance-Anti-Aging-Support.webp",
    title:
      "NAD+BURN™ | Thermogenic & Metabolic ComplexAdvanced fat-loss and metabolic reset formula designed to supercharge energy, regulate appetite, and optimize insulin function",
    currentPrice: "£89.99",
    inStock: true,
  },
  {
    imgUrl:
      "/images/products/NAD_HER_-90-Capsules-_Radiant-Beauty-_-Anti-Aging-Power_-Boost-NAD_-Glutathione_-Skin-Hydration-_-DNA-Repair.webp",
    title:
      "NAD+HER® 90 Capsules | Radiant Beauty & Cellular Renewal Enhance NAD+ levels, boost Glutathione, hydrate skin, and repair DNA for timeless beauty and vitality",
    currentPrice: "£89.99",
    inStock: true,
  },
  {
    imgUrl:
      "/images/products/NAD_HIM_-90-Capsules-_Boost-Testosterone_-NAD_-Stem-Cell-Health-_-Glutathione-for-Vitality_-Energy_-and-Performance.webp",
    title:
      "NAD+HIM® 90 Capsules |Boost Testosterone, NAD+, Stem Cell Health & Glutathione for Vitality, Energy, and Performance",
    currentPrice: "£89.99",
    inStock: true,
  },
  {
    imgUrl:
      "/images/products/StemXR_-90-Capsules-_-Amplify-Stem-Cells_-Supercharge-Energy_-Rejuvenate-Skin_-and-Transform-Your-Vitality.webp",
    title:
      "StemXR® 90 Capsules | Elevate Stem Cells & Revitalize Vitality Amplify stem cell activity, enhance energy, rejuvenate skin, and restore peak wellness",
    currentPrice: "£89.99",
    inStock: true,
  },
];

const Page = () => {
  return (
    <Main title="CellRegen Collections">
      <div className="wrapper">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(22.5rem,1fr))] gap-4">
          {Products.map((product) => (
            <ProductCard
              key={product.title}
              imgUrl={product.imgUrl}
              title={product.title}
              oldPrice={product.oldPrice}
              currentPrice={product.currentPrice}
              discount={product.discount}
              inStock={product.inStock}
            />
          ))}
        </ul>
      </div>
    </Main>
  );
};

export default Page;
