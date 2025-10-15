import Image from "next/image";
import Socials from "./socials";
import Details from "./details";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex-1">
            <p>
              <strong className="font-bold">
                Cellregen<span aria-hidden>®</span>
              </strong>
              is an innovative US startup dedicated to advancing gerontology and
              longevity research.
            </p>
            <ul>
              <li>
                <p className="font-bold" aria-hidden>
                  Cellregen®
                </p>
                <strong>UK</strong>
                <address>
                  <p>45 Albemarle Street, London W1S 4JL</p>
                  <a href="mailto:info@cellregen.co.uk">info@cellregen.co.uk</a>
                </address>
              </li>
              <li>
                <strong>USA</strong>
                <address>
                  <p>407 Lincoln Road Suite 8N-283,</p>
                  <p>Miami Beach, FL 33139, USA</p>
                  <a href="mailto:info@cellregen.us">info@cellregen.us</a>
                </address>
              </li>
              <li>
                <strong>EU</strong>
                <address>
                  <p>Grosse Gallusstrasse 16-18, Frankfurt, 60312, Germany.</p>
                  <a href="mailto:info@cellregen.eu">info@cellregen.eu</a>
                </address>
              </li>
            </ul>
          </div>
          <div className="flex-1 self-center flex flex-col items-center ">
            <Image
              src="/images/fund-badge.webp"
              alt=""
              width={320}
              height={320}
            />
            <Socials />
          </div>
          <div className="flex-1 flex justify-center">
            <Details
              title="SHOP"
              content={[
                "All Products",
                "Track my order",
                "Health Benefits",
                "Research",
                "NAD TIPS",
                "Health Benefits",
                "Contact",
                "Explore Regeneration Bundles",
              ]}
            />
            <Details
              title="Our Policies"
              content={[
                "Blog Posts",
                "Privacy Policy",
                "Return & Refund Policy",
                "Shipping Policy",
                "Payment Policy",
                "Cancellation Policy",
                "Terms of Service",
              ]}
            />
          </div>
        </div>
        <div>
          <h3>Newsletter</h3>
          <form action="#">
            <label htmlFor="email" className="sr-only">
              Please write your e-mail address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              autoCorrect="email"
            />
            <button>Subscribe</button>
          </form>
        </div>
        <div>
          <p>
            Copyright <span aria-hidden>©</span> 2025,
            <Link href="/">Cellregen UK</Link>. All rights reserved. See our
            terms of use and privacy notice.
          </p>
          <p>
            MitoBurn<span aria-hidden>®</span> & CaloriBurn GP
            <span aria-hidden>®</span> are registered trademarks of NNB
            Nutrition - GS4<span aria-hidden>™</span> is a registered trademark
            of Sabinsa - Cynatox<span aria-hidden>®</span> & Omegia
            <span aria-hidden>®</span> are registered trademarks of Puredia inc.
          </p>
          <p>
            *The statements made within this website have not been evaluated by
            the U.S. Food and Drug Administration. These statements and the
            products of this company are not intended to diagnose, treat, cure
            or prevent any disease.
          </p>
          <Link href="/">Powered by Cellregen UK</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
