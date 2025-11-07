import Image from "next/image";

const PressMentions = () => {
  return (
    <section aria-labelledby="press-mentions-title" className="py-8">
      <h2 id="press-mentions-title" className="font-bold">
        Endorsed by 400+ Trusted Publications
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(22.5rem,1fr))] gap-8">
        <li>
          <Image src="/images/Forbes.webp" width={360} height={360} alt="" />
          <h3>&quot;Advanced Cellular Solutions&quot;</h3>
          <p>
            &quot;
            <strong>
              CellRegen<span aria-hidden>™</span>
            </strong>{" "}
            stands out with its science-first approach,{" "}
            <strong>
              targeting the root causes of aging, energy depletion
            </strong>
            , and <strong>weight struggles</strong>.&quot;
          </p>
        </li>
        <li>
          <Image src="/images/La_weekly.webp" width={360} height={360} alt="" />
          <h3>&quot;Turning Science into Solutions&quot;</h3>
          <p>
            &quot;
            <strong>
              CellRegen<span aria-hidden>™</span>
            </strong>{" "}
            isn&apos;t just selling supplements it&apos;s bridging the gap
            between{" "}
            <strong>scientific research and tangible health benefits</strong>
            .&quot;
          </p>
        </li>
        <li>
          <Image src="/images/USA_today.webp" width={360} height={360} alt="" />
          <h3>&quot;The Future of Wellness&quot;</h3>
          <p>
            &quot;Regarding staying ahead in the{" "}
            <strong>
              race against aging, CellRegen<span aria-hidden>™</span>
            </strong>{" "}
            is rewriting the playbook.&quot;
          </p>
        </li>
        <li>
          <Image
            src="/images/Business_insider.webp"
            width={360}
            height={360}
            alt=""
          />
          <h3>
            &quot;CellRegen<span aria-hidden>™</span> Is Redefining Wellness
            with Advanced Cellular Solutions.&quot;
          </h3>
          <p>
            &quot;More than just a wellness brand,{" "}
            <strong>
              CellRegen<span aria-hidden>™</span>
            </strong>{" "}
            represents a movement. By leveraging{" "}
            <strong>cutting-edge research and advanced formulations</strong>
            .&quot;
          </p>
        </li>
        <li>
          <Image
            src="/images/Scienfinite.webp"
            width={360}
            height={360}
            alt=""
          />
          <h3>&quot;Science-Backed Supplements Transform Vitality&quot;</h3>
          <p>
            &quot;Discoveries from <strong>renowned scientists</strong> who have
            focused on <strong>key compounds</strong> that promote{" "}
            <strong>health and vitality</strong>.&quot;
          </p>
        </li>
        <li>
          <Image
            src="/images/Hollywood_In.webp"
            width={360}
            height={360}
            alt=""
          />
          <h3>
            &quot;Cellregen&apos;s innovation is built on foundational
            research&quot;
          </h3>
          <p>
            &quot;Unlike fad supplements, <strong>Cellregen&apos;s</strong>{" "}
            products are{" "}
            <strong>
              built on a foundation of scientific rigor and validation
            </strong>
            .&quot;
          </p>
        </li>
      </ul>
    </section>
  );
};

export default PressMentions;
