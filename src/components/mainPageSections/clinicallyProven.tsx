import Image from "next/image";

const ClinicallyProven = () => {
  return (
    <section
      aria-labelledby="clinically-proven-title"
      className="flex flex-col lg:flex-row"
    >
      <div className="flex-1">
        <p aria-hidden>CELLREGEN®</p>
        <h2 id="clinically-proven-title">Ultra-Pure. Clinically Proven.</h2>
        <p>
          Validated by Eurofins trusted by global pharmaceutical and biotech
          leaders.
        </p>
      </div>
      <Image
        src="/images/Globally_verified.webp"
        width={750}
        height={750}
        alt=""
        className="flex-1"
      />
    </section>
  );
};

export default ClinicallyProven;
