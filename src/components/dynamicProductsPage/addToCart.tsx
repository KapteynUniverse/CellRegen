import Image from "next/image";
import Link from "next/link";
import { MoneyIcon, SecureLock, ShoppingCart, Star } from "../svgComponents";
import SecureCheckoutIcons from "./secureCheckoutIcons";

const AddToCart = () => {
  return (
    <section aria-labelledby="product-title">
      <div>
        <h2 id="product-title">
          NAD+BURN™ | Thermogenic & Metabolic ComplexAdvanced fat-loss and
          metabolic reset formula designed to supercharge energy, regulate
          appetite, and optimize insulin function
        </h2>
        <div>
          <p>Cellregen</p>
          <p>SKU: 0680101612410</p>
        </div>
        <p>£89.99</p>
      </div>

      <div>
        <div className="flex gap-2">
          <Star color="yellow" />
          <Star color="yellow" />
          <Star color="yellow" />
          <Star color="yellow" />
          <Star color="yellow" />
          <Link href="#reviews">32 reviews</Link>
        </div>
        <Image
          src="/images/products/Nad_Burn/NAD_BURN-Infographics.webp"
          width={900}
          height={900}
          alt=""
        />
      </div>
      <div>
        <p className="capitalize">
          <ShoppingCart /> Free shipping to UK & EU on all orders
        </p>
        <p>
          <SecureLock /> Secure payment
        </p>
      </div>
      <h3 id="availability">Availability</h3>
      <p>In stock, and ready to ship</p>
      <form>
        <h3>Quantity</h3>
        <div className="flex gap-4 outline-1 max-w-fit px-4 py-2">
          <button type="button" aria-label="increase quantity">
            <span aria-hidden>-</span>
          </button>
          <p>1</p>
          <button type="button" aria-label="decrease quantity">
            <span aria-hidden>+</span>
          </button>
        </div>
        <div className="flex flex-col">
          <button className="uppercase outline-1 p-4" type="button">
            Add to cart
          </button>
          <button className="uppercase outline-1 p-4">Buy it now</button>
        </div>
      </form>
      <h3 className="capitalize">Secure checkout with</h3>
      <SecureCheckoutIcons />
      <p>
        Tax included. <Link href="policies/shipping-policy">Shipping </Link>
        calculated at checkout
      </p>
      <Image src="/images/fund-badge.webp" alt="" width={320} height={320} />
      <Link href="policies/refund-policy">
        <MoneyIcon /> Refund Policy
      </Link>
      <h3 id="questions" className="sr-only">
        Questions?
      </h3>
      <ul className="outline-1">
        <li className="flex items-center border-b-1 p-2">
          <Image
            src="/images/icons/User_request.avif"
            width={100}
            height={100}
            alt=""
          />
          <p>More information about</p>
          <Link href="" className="uppercase">
            Nad+Burn
          </Link>
        </li>
        <li className="flex items-center border-b-1 p-2">
          <Image
            src="/images/icons/Ask_question.avif"
            width={100}
            height={100}
            alt=""
          />
          <p className="uppercase">Nad+Burn </p>
          <Link href="">FAQ&apos;s</Link>
        </li>
        <li className="flex items-center border-b-1 p-2">
          <Image
            src="/images/icons/Phone_support.avif"
            width={100}
            height={100}
            alt=""
          />
          <p>Have questions? </p>
          <Link href="">Contact us</Link>
        </li>
        <li className="flex items-center border-b-1 p-2">
          <Image
            src="/images/icons/Free_shipping.avif"
            width={100}
            height={100}
            alt=""
          />
          <p>Free Shipping to UK & EU On All Orders </p>
          <Link href="" className="capitalize">
            Shipping policy
          </Link>
        </li>
        <li className="flex items-center p-2">
          <Image
            src="/images/icons/Money_back.avif"
            width={100}
            height={100}
            alt=""
          />
          <p className="capitalize">30 days money back guarantee </p>
          <Link href="" className="capitalize">
            Return policy
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default AddToCart;
