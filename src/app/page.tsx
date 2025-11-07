import Main from "@/components/main";
import BlogPosts from "@/components/mainPage/blogPosts";
import BuiltForBioOptimization from "@/components/mainPage/builtForBioOptimization";
import CallToAction from "@/components/mainPage/callToAction";
import ClinicallyProven from "@/components/mainPage/clinicallyProven";
import Hero from "@/components/mainPage/hero";
import Instagram from "@/components/mainPage/instagram";
import PressMentions from "@/components/mainPage/pressMentions";
import PreventivePowerOfCellRegen from "@/components/mainPage/preventivePowerOfCellRegen";
import RevitalizeYourLife from "@/components/mainPage/revitalizeYourLife";
import Shopify from "@/components/mainPage/shopify";
import Testimonials from "@/components/mainPage/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Main title="CellRegen Main Page" srOnly>
        <Hero />
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
        <div className="bg-secondaryBg">
          <Image
            src="/images/Icons_desktop.webp"
            alt=""
            width={6006}
            height={578}
            className="bg-secondaryBg scale-75"
          />
        </div>
      </Main>
    </>
  );
}
