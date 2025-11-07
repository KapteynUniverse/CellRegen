const CallToAction = () => {
  return (
    <section aria-labelledby="call-to-action-title" className="text-center">
      <div className="max-w-3xl flex flex-col gap-8 mx-auto">
        <h2 id="call-to-action-title" className="font-bold">
          Join the CellRegen Prestige Club - Secure Your Access
        </h2>
        <p>
          Unlock a world of{" "}
          <strong>
            cutting-edge longevity insights, VIP research, and early access
          </strong>{" "}
          to the latest advancements in cellular rejuvenation.{" "}
          <strong>As a Prestige Club Insider</strong>, you&apos;ll receive{" "}
          <strong>exclusive science-backed health strategies</strong>,
          personalized wellness tips, and first access to{" "}
          <strong>elite biohacking breakthroughs</strong>—reserved for those who
          demand the absolute best in longevity.
        </p>
        <p>
          <strong>Apply for membership today</strong> and become part of an
          exclusive circle of{" "}
          <strong>
            high performers, wellness visionaries, and longevity seekers
          </strong>
          . Your journey to enhanced vitality and peak cellular health starts
          now.
        </p>
        <strong>&quot;Secure Your Access - Join Free&quot;</strong>
        <form
          action="post"
          className="flex justify-center flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            Please write your e-mail address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your e-mail"
            autoCorrect="email"
            className="bg-white text-secondaryFg py-2 px-4 min-w-96"
          />
          <button className="uppercase bg-primaryFg text-secondaryFg py-2 px-4">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
