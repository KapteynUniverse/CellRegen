import Image from "next/image";

const RevitalizeYourLife = () => {
  return (
    <section aria-labelledby="revitalize-your-life-title">
      <h2 id="revitalize-your-life-title">
        Revitalize Your Life with CellRegen<span aria-hidden>®</span>&apos;s
        Formulations
      </h2>
      <p>
        Advanced stem cell solutions for rejuvenation, vitality, and radiant
        beauty
      </p>
      <div className="flex flex-col lg:flex-row">
        <video
          playsInline
          autoPlay
          loop
          muted
          controls
          preload="metadata"
          poster="//cellregen.co.uk/cdn/shop/files/preview_images/c3c4da06ccfe4624a889a671ff4285d0.thumbnail.0000000000_1800x.jpg?v=1741794953"
          className="flex-1"
        >
          <source
            src="//cellregen.co.uk/cdn/shop/videos/c/vp/c3c4da06ccfe4624a889a671ff4285d0/c3c4da06ccfe4624a889a671ff4285d0.HD-1080p-4.8Mbps-44050252.mp4?v=0"
            type="video/mp4"
          />
        </video>
        <div className="flex-1">
          <ul className="grid grid-cols-1 lg:grid-cols-2">
            <li>
              <article>
                <Image
                  alt=""
                  src="/images/StemXR_90_Capsules.webp"
                  width={300}
                  height={450}
                />
                <p>
                  StemXR® 90 Capsules | Elevate Stem Cells & Revitalize Vitality
                  Amplify stem cell activity, enhance energy, rejuvenate skin,
                  and restore peak wellness. £130.00
                </p>
                <button className="uppercase">Quick View</button>
              </article>
            </li>
            <li>
              <article>
                <Image
                  alt=""
                  src="/images/NAD_HER_90_Capsules.webp"
                  width={300}
                  height={450}
                />
                <p>
                  NAD+HER® 90 Capsules | Radiant Beauty & Cellular Renewal
                  Enhance NAD+ levels, boost Glutathione, hydrate skin, and
                  repair DNA for timeless beauty and vitality. £89.99
                </p>
                <button className="uppercase">Quick View</button>
              </article>
            </li>
            <li>
              <article>
                <Image
                  alt=""
                  src="/images/NAD_HIM_90_Capsules.webp"
                  width={300}
                  height={450}
                />
                <p>
                  NAD+HIM® 90 Capsules |Boost Testosterone, NAD+, Stem Cell
                  Health & Glutathione for Vitality, Energy, and Performance
                  £89.99
                </p>
                <button className="uppercase">Quick View</button>
              </article>
            </li>
            <li>
              <article>
                <Image
                  alt=""
                  src="/images/NAD_BURN_60_Capsules.webp"
                  width={300}
                  height={450}
                />
                <p>
                  NAD+BURN™ | Thermogenic & Metabolic ComplexAdvanced fat-loss
                  and metabolic reset formula designed to supercharge energy,
                  regulate appetite, and optimize insulin function. £89.99
                </p>
                <button className="uppercase">Quick View</button>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RevitalizeYourLife;
