import Image from "next/image";

const PressMentions = () => {
  return (
    <section aria-labelledby="press-mentions-title">
      <h2 id="press-mentions-title">Endorsed by 400+ Trusted Publications</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(22.5rem,1fr))]">
        <li>
          <Image src="/images/Forbes.webp" width={360} height={360} alt="" />
          <h3>&quot;Advanced Cellular Solutions&quot;</h3>
          <p>
            &quot;CellRegen™ stands out with its science-first approach,
            targeting the root causes of aging, energy depletion, and weight
            struggles.&quot;
          </p>
        </li>
        <li>
          <Image src="/images/La_weekly.webp" width={360} height={360} alt="" />
          <h3>&quot;Turning Science into Solutions&quot;</h3>
          <p>
            &quot;CellRegen isn&apos;t just selling supplements it&apos;s
            bridging the gap between scientific research and tangible health
            benefits.&quot;
          </p>
        </li>
        <li>
          <Image src="/images/USA_today.webp" width={360} height={360} alt="" />
          <h3>&quot;The Future of Wellness&quot;</h3>
          <p>
            &quot;Regarding staying ahead in therace against aging,CellRegenis
            rewriting the playbook.&quot;
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
            &quot;CellRegen Is Redefining Wellness with Advanced Cellular
            Solutions.&quot;
          </h3>
          <p>
            &quot;More than just a wellness brand, CellRegen represents a
            movement. By leveraging cutting-edge research and advanced
            formulations.&quot;
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
            &quot;Discoveries from renowned scientists who have focused on key
            compounds that promote health and vitality&quot;
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
            &quot;Unlike fad supplements, Cellregen&apos;s products are built on
            a foundation of scientific rigor and validation.&quot;
          </p>
        </li>
      </ul>
    </section>
  );
};

export default PressMentions;
