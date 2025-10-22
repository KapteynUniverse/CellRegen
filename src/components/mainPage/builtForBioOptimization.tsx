import Image from "next/image";
import Link from "next/link";

const BuiltForBioOptimization = () => {
  return (
    <section
      aria-labelledby="built-for-bio-optimization-title"
      className="flex flex-col lg:flex-row"
    >
      <div className="flex-1">
        <h2 id="built-for-bio-optimization-title">
          Built for Bio-Optimization. Powered by Stem Science.
        </h2>
        <strong>
          CELLREGEN<span aria-hidden>™</span> activates your body&apos;s innate
          repair system.
        </strong>
        <p>
          With proprietary compounds like <strong>StemXR</strong>
          <span aria-hidden>™</span>, we go beyond skincare and supplements
          <strong>
            mobilizing new stem cells from the bone marrow to restore vitality,
            energy, and systemic resilience.
          </strong>
        </p>
        <p>
          This isn&apos;t wellness.
          <strong>It&apos;s cellular reengineering.</strong>
        </p>
        <strong>
          Our NAD+ formulations are more than energy boosters they support the
          very biology of renewal.
        </strong>
        <p>
          By fueling mitochondrial function, activating sirtuins, and enhancing
          DNA repair, NAD+ helps regulate the body&apos;s stem cell signals
          <strong>
            creating a cellular environment primed for regeneration and
            longevity.
          </strong>
        </p>
        <p>
          From metabolism to brain health, this full-spectrum matrix powers
          <strong>total-body vitality</strong> from within.
        </p>
        <Link href="/pages/research" className="uppercase">
          Learn More About Our Science
        </Link>
      </div>
      <Image
        src="/images/Built_for_bio_optimization.webp"
        alt=""
        width={320}
        height={320}
        className="flex-1 w-full"
      />
    </section>
  );
};

export default BuiltForBioOptimization;
