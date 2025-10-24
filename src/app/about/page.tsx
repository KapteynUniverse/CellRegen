import Main from "@/components/main";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <Main title="About Us" style="bg-secondaryBg text-secondaryFg">
      <div className="wrapper flex flex-col items-center">
        <Image src="/images/About_us.webp" width={750} height={366} alt="" />
        <div className="about-wrapper">
          <h2>Cellregen®: Redefining the Future of Aging</h2>
          <p>
            Cellregen<span aria-hidden>®</span> is an innovative startup based
            in the United States, committed to transforming how the world
            approaches aging. Our mission is to unravel the secrets of the aging
            process and deliver groundbreaking solutions that empower
            individuals to live longer, healthier, and more vibrant lives. We
            believe that with the right research, collaboration, and
            cutting-edge products, we can significantly slow down or even
            reverse the effects of aging.
          </p>
        </div>
        <div className="about-wrapper">
          <h2>Driving Innovation Through Trusted Collaboration</h2>
          <p>
            At Cellregen<span aria-hidden>®</span>, we work hand-in-hand with
            some of the most respected experts in longevity research to stay at
            the forefront of scientific progress. The founders and collaborators
            work seamlessly together, driven by a shared vision. Dr SB Hasan PhD
            and AKpharm strategic collaborations include renowned leaders Dr.
            Hywel Yuen , as well as NNB Nutrition and Sabinsa, globally
            recognized pioneers in nutritional science and bioactive ingredient
            innovation.
          </p>
          <p>
            These trusted partnerships ensure that every step of our process is
            rooted in expertise and credibility. By leveraging cutting-edge
            research and clinically tested ingredients, we deliver supplements
            that you can rely on to support your health and vitality. With
            Cellregen<span aria-hidden>®</span>, you&apos;re not just getting a
            product—you&apos;re investing in science, integrity, and results.
          </p>
        </div>
        <div className="about-wrapper">
          <h2>The Science Behind the Breakthroughs</h2>
          <p>
            <strong>Cellregen</strong>
            <span aria-hidden>®</span>&apos;s mission is rooted in decades of
            research into the fundamental building blocks of health, including{" "}
            <strong>NAD+</strong> and <strong>stem cell regeneration</strong>.
            These groundbreaking studies, led by experts such as{" "}
            <strong>Dr. Hywel Yuen</strong>, draw on the findings of leading
            scientists who have explored the efficacy of the very ingredients
            used in Cellregen<span aria-hidden>®</span>&apos;s products.
          </p>
          <h3>Notable contributors to research include:</h3>
          <ol>
            <li>
              <strong>David Sinclair, PhD:</strong> NAD+ and mitochondrial
              function.
            </li>
            <li>
              <strong>Charles Brenner, PhD:</strong> Nicotinamide Riboside (NR)
              research.
            </li>
            <li>
              <strong>Leonard Guarente, PhD:</strong> NAD+ and sirtuins.
            </li>
            <li>
              <strong>Dr. Kathy F. Benson:</strong> Vahona for stem cell
              mobilization.
            </li>
            <li>
              <strong>Dr. Kyung-Hoon Kim:</strong> Triterpenoids for bone
              health.
            </li>
            <li>
              <strong>Dr. Hywel Yuen:</strong> Plant extracts for stem cell
              mobilization.
            </li>
            <li>
              <strong>Dr. Gitte S. Jensen:</strong> Hippophe Rhamnoides boosts
              stem cells by 40%.
            </li>
            <li>
              <strong>Dr. Shin-ichiro Imai:</strong> NAD+ and metabolic health.
            </li>
            <li>
              <strong>Dr. K.P. Srivastava:</strong> Gymnema Sylvestre for weight
              management.
            </li>
            <li>
              <strong>Dr. Shibnath Ghosh:</strong> GS4 and sugar cravings.
            </li>
            <li>
              <strong>Dr. Samuel Klein:</strong> Obesity and fat metabolism.
            </li>
            <li>
              <strong>Dr. Jeffrey Friedman:</strong> Discovered leptin.
            </li>
            <li>
              <strong>Dr. Frank Greenway:</strong> CaloriBurn GP™ and fat
              burning.
            </li>
          </ol>
          <p>
            These scientific luminaries have conducted extensive research on the{" "}
            <strong>core compounds</strong> integral to Cellregen
            <span aria-hidden>®</span>&apos;s patented formulations, validating
            their effectiveness and safety.
          </p>
        </div>
        <div className="about-wrapper">
          <h2>Science Meets Quality: Our Commitment</h2>
          <p>
            Our formulations are crafted with patented organic ingredients,
            carefully selected for their proven benefits and backed by rigorous
            clinical trials. Every product is developed using advanced
            technology to ensure maximum efficacy and tangible results.
          </p>
          <p>
            To uphold our commitment to safety and excellence, our manufacturing
            facilities are not only FDA- and GMP-approved but also
            HACCP-accredited. This ensures that every step of our production
            process adheres to the highest standards of safety, quality, and
            hygiene. Each supplement undergoes comprehensive testing for purity
            and potency, guaranteeing that it exceeds industry standards. This
            meticulous approach ensures that our customers receive only the
            finest, most effective products available on the market.
          </p>
        </div>
        <div className="about-wrapper">
          <h2>Investing in a Better Future</h2>
          <p>
            At Cellregen<span aria-hidden>®</span>, we believe in giving back to
            the science that drives us forward. That&apos;s why we allocate a
            percentage of our profits to the research and development of new
            longevity ingredients. By supporting cutting-edge research, we aim
            to extend the boundaries of what&apos;s possible in promoting
            healthspan and vitality for all.
          </p>
        </div>
        <div className="about-wrapper">
          <h2>Join Us in Transforming Aging</h2>
          <p>
            The future of aging is within reach—and you can be a part of it.
            When you choose Cellregen<span aria-hidden>®</span>, you&apos;re not
            just investing in your health; you&apos;re supporting a mission to
            redefine what it means to age gracefully and healthily. Together, we
            can unlock the secrets to a longer, healthier life and shape a world
            where aging no longer limits the joy and vibrancy of living.
          </p>
          <p>
            Let&apos;s embark on this journey together. Support Cellregen
            <span aria-hidden>®</span>—because the future of aging starts now.
          </p>
          <strong>
            Cellregen<span aria-hidden>®</span>: Where Science Meets Innovation
            for a Better You.
          </strong>
        </div>
        <Image
          src="/images/Icons_mobile.webp"
          width={1000}
          height={484}
          alt=""
        />
        <form className="about-wrapper">
          <h2>Contact us</h2>
          <fieldset>
            <legend className="sr-only">Your Contact Information</legend>
            <div>
              <div>
                <label htmlFor="name">
                  Name <span aria-hidden>*</span>
                </label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">
                  Email <span aria-hidden>*</span>
                </label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div>
              <label htmlFor="tel">Phone number</label>
              <input type="tel" id="tel" name="tel" />
            </div>
          </fieldset>
          <div>
            <label htmlFor="message">
              Message <span aria-hidden>*</span>
            </label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button className="uppercase cursor-pointer">Submit</button>
          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <Link href="https://policies.google.com/privacy">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="https://policies.google.com/terms">
              Terms of Service
            </Link>{" "}
            apply.
          </p>
        </form>
      </div>
    </Main>
  );
};

export default Page;
