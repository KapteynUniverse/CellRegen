import Main from "@/components/main";
import BlogPosts from "@/components/mainPageSections/blogPosts";
import BuiltForBioOptimization from "@/components/mainPageSections/builtForBioOptimization";
import CallToAction from "@/components/mainPageSections/callToAction";
import ClinicallyProven from "@/components/mainPageSections/clinicallyProven";
import Hero from "@/components/mainPageSections/hero";
import Instagram from "@/components/mainPageSections/instagram";
import PressMentions from "@/components/mainPageSections/pressMentions";
import PreventivePowerOfCellRegen from "@/components/mainPageSections/preventivePowerOfCellRegen";
import RevitalizeYourLife from "@/components/mainPageSections/revitalizeYourLife";
import Shopify from "@/components/mainPageSections/shopify";
import Testimonials from "@/components/mainPageSections/testimonials";

export default function Home() {
  return (
    <>
      <Main title="CellRegen Main Page">
        <Hero />
        <div className="wrapper">
          <BuiltForBioOptimization />
          <PreventivePowerOfCellRegen />
          <RevitalizeYourLife />
          <ClinicallyProven />
          <Testimonials />
          <Instagram />
          <CallToAction />
          <PressMentions />
          <BlogPosts />
          <Shopify />
        </div>
      </Main>
    </>
  );
}
