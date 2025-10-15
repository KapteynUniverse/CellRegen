const CallToAction = () => {
  return (
    <section aria-labelledby="call-to-action-title" className="text-center">
      <h2 id="call-to-action-title">
        Join the CellRegen Prestige Club - Secure Your Access
      </h2>
      <p>
        Unlock a world of cutting-edge longevity insights, VIP research, and
        early access to the latest advancements in cellular rejuvenation. As a
        Prestige Club Insider, you&apos;ll receive exclusive science-backed
        health strategies, personalized wellness tips, and first access to elite
        biohacking breakthroughs—reserved for those who demand the absolute best
        in longevity.
      </p>
      <p>
        Apply for membership today and become part of an exclusive circle of
        high performers, wellness visionaries, and longevity seekers. Your
        journey to enhanced vitality and peak cellular health starts now.
      </p>
      <p>&quot;Secure Your Access - Join Free&quot;</p>
      <form action="post">
        <label htmlFor="email" className="sr-only">
          Please write your e-mail address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your e-mail"
          autoCorrect="email"
        />
        <button className="uppercase">Sign Up</button>
      </form>
    </section>
  );
};

export default CallToAction;
