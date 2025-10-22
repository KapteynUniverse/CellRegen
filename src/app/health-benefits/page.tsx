import Main from "@/components/main";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <Main title="Health Benefits of Our Products" srOnly>
      <div className="wrapper">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(21.75rem,1fr))] gap-4">
          <li>
            <Image
              src="/images/StemXR_90_Capsules.webp"
              width={300}
              height={450}
              alt=""
            />
            <h2 className="uppercase">
              StemXR<span aria-hidden>®</span>
            </h2>
            <p>
              <strong className="uppercase">
                StemXR<span aria-hidden>®</span>
              </strong>{" "}
              is designed to enhance overall health and longevity through the
              innovative approach of increasing the number of circulating stem
              cells within the body. Stem cells play a crucial role in repairing
              and regenerating tissues, as they have the unique ability to
              transform into various cell types and support the body&apos;s
              healing processes.
            </p>
            <Link href="/health-benefits/stemxr">Learn More</Link>
          </li>
          <li>
            <Image
              src="/images/NAD_HER_90_Capsules.webp"
              width={300}
              height={450}
              alt=""
            />
            <h2 className="uppercase">
              Nad+Her<span aria-hidden>®</span>
            </h2>
            <p>
              <strong className="uppercase">
                Nad+Her<span aria-hidden>®</span>
              </strong>{" "}
              is an innovative and groundbreaking formula specifically designed
              for women looking to enhance their health, vitality, and beauty.
              This unique supplement not only harnesses the benefits of NAD+
              (Nicotinamide Adenine Dinucleotide) in promoting longevity and
              supporting the body&apos;s natural rejuvenation processes but also
              includes Omegia—an essential component for overall wellness.
            </p>
            <Link href="/health-benefits/nad-her">Learn More</Link>
          </li>
          <li>
            <Image
              src="/images/NAD_HIM_90_Capsules.webp"
              width={300}
              height={450}
              alt=""
            />
            <h2 className="uppercase">
              Nad+Him<span aria-hidden>®</span>
            </h2>
            <p>
              <strong className="uppercase">
                Nad+Him<span aria-hidden>®</span>
              </strong>{" "}
              formula is a groundbreaking supplement designed to enhance stem
              cell longevity and boost testosterone levels, ultimately promoting
              overall vitality and well-being. This innovative formula harnesses
              the power of NAD+ (Nicotinamide Adenine Dinucleotide), a crucial
              coenzyme found in every cell of the body that plays a significant
              role in energy production and metabolic processes.
            </p>
            <Link href="/health-benefits/nad-him">Learn More</Link>
          </li>
          <li>
            <Image
              src="/images/NAD_BURN_60_Capsules.webp"
              width={300}
              height={450}
              alt=""
            />
            <h2 className="uppercase">
              Nad+Burn<span aria-hidden>®</span>
            </h2>
            <p>
              <strong className="uppercase">
                Nad+Burn<span aria-hidden>®</span>
              </strong>{" "}
              by Cellregen is an advanced weight loss supplement that integrates
              the transformative power of NAD+ along with three key components:
              Metoburn, Caloriburn, and GS4 Plus. This unique combination is
              designed to support effective weight management and enhance
              overall health and wellness. The fusion of NAD+, Metoburn,
              Caloriburn, and GS4 Plus in NAD+BURN creates a comprehensive
              approach to weight loss and wellness.
            </p>
            <Link href="/health-benefits/nad-burn">Learn More</Link>
          </li>
        </ul>
      </div>
    </Main>
  );
};

export default Page;
