import Address from "@/components/address";
import Main from "@/components/main";
import Image from "next/image";

const Page = () => {
  return (
    <Main title="Contact Us" srOnly style="bg-secondaryBg text-secondaryFg">
      <div className="wrapper">
        <div className="about-wrapper mx-auto">
          <Image
            src="/images/Contact_us.webp"
            width={1000}
            height={349}
            alt=""
          />
          <p>
            Looking for some help or need a question answering? Feel free to use
            the contact form below to get in contact with one of our specialists
            that will gladly help you with any Query you have.
          </p>
          <Address />
        </div>
        <form>
          <h2>Form olacak, component yap abouttakini</h2>
        </form>
      </div>
    </Main>
  );
};

export default Page;
