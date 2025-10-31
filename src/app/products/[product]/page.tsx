import AddToCart from "@/components/dynamicProductsPage/addToCart";
import ProductImgs from "@/components/dynamicProductsPage/productImgs";
import UnderstandingProduct from "@/components/dynamicProductsPage/understandingProduct";
import WhatIs from "@/components/dynamicProductsPage/whatIs";
import Main from "@/components/main";
import { upperCaseWithoutSymbol } from "@/utils/formatTitle";

const Page = ({ params }: { params: { product: string } }) => {
  const { product } = params;
  const formattedTitle = upperCaseWithoutSymbol(product, "-");

  console.log(formattedTitle);
  return (
    <Main title={formattedTitle} srOnly style="bg-secondaryBg text-secondaryFg">
      <ProductImgs />
      <AddToCart />
      <WhatIs formattedTitle={formattedTitle} />
      <UnderstandingProduct />
    </Main>
  );
};

export default Page;
