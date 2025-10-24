import Main from "@/components/main";
import Image from "next/image";

const Page = () => {
  return (
    <Main title="Contact Us" srOnly style="bg-secondaryBg text-secondaryFg">
      <div className="wrapper">
        <div className="about-wrapper mx-auto">
          <Image
            src="/images/Partner_img.webp"
            width={850}
            height={322}
            alt=""
          />
          <h2 className="uppercase">Partner With Us</h2>
          <p>
            Experience the benefits of our Wholesale Partner Program! Gain
            access to exclusive wholesale pricing on our entire range of
            CELLREGEN products, tailored to support the well-being of your
            clients. Our unwavering commitment to quality and innovation
            guarantees that you have access to top-notch products designed to
            enhance the health and wellness of those you serve.
          </p>
          <p>
            For any inquiries or to discover more about our reseller program,
            feel free to reach out to our customer care team. Take the first
            step in our mission to elevate well-being by becoming a wholesale
            partner today.
          </p>

          <form>
            <h2>Form olacak, component yap abouttakini</h2>
          </form>
        </div>
      </div>
    </Main>
  );
};

export default Page;
