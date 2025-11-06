import Image from "next/image";

const PreventivePowerOfCellRegen = () => {
  return (
    <section
      aria-labelledby="preventive-power-of-cell-regen-title"
      className="flex flex-col lg:flex-row gap-8 py-12"
    >
      <div className="flex-1 flex flex-col justify-center gap-8">
        <p aria-hidden>CELLREGEN®</p>
        <h2 id="preventive-power-of-cell-regen-title">
          The Preventive Power of CellRegen
        </h2>
        <p>
          The Future of Health Is Preventive And It Starts at the Cellular
          Level.
        </p>
        <p>
          <strong>
            CellRegen is more than a supplement it&apos;s a strategic investment
            in long-term vitality
          </strong>
          , crafted for those who understand that true wellness begins with
          prevention.
        </p>
        <p>
          Developed through the lens of preventive medicine, CellRegen features{" "}
          <strong>StemXR</strong>®, our proprietary formula designed to
          <strong>
            support the mobilization of stem cells from the bone marrow
          </strong>
          critical for the body&apos;s natural ability to repair tissue,
          regenerate organs, and sustain systemic resilience.
        </p>
        <ul className="list-disc px-8">
          <li>Supports early intervention at the cellular level</li>
          <li>
            Strengthens natural defense systems before dysfunction appears
          </li>
          <li>
            Promotes resilience against inflammation, oxidative stress, and
            immune aging
          </li>
          <li>Helps preserve optimal function and delay biological aging</li>
          <li>
            Powered by <strong>StemXR</strong>
            <span aria-hidden>®</span> to support whole-body cellular
            regeneration from within
          </li>
        </ul>
        <strong>This is not for everyone.</strong>
        <p>It&apos;s for those who prioritize prevention over prescriptions.</p>
        <p>Who choose to act early not react late.</p>
        <p>Only 500 bottles are released per batch.</p>
        <strong>
          Secure your supply before this limited allocation closes.
        </strong>
      </div>
      <Image
        src="/images/Preventive_power_of_cellRegen.webp"
        alt=""
        width={320}
        height={320}
        className="flex-1 w-full h-auto object-contain"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </section>
  );
};

export default PreventivePowerOfCellRegen;
