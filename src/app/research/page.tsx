import Main from "@/components/main";
import Ingredients from "@/components/researchPage/ingredients";
import Products from "@/components/researchPage/products";

const Page = () => {
  return (
    <Main
      title="CellRegen Research Page"
      srOnly
      style="bg-secondaryBg text-secondaryFg"
    >
      <div className="wrapper">
        <Products />
        <Ingredients />
      </div>
    </Main>
  );
};

export default Page;
