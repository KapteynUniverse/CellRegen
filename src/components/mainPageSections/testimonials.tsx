import { Dot, Star } from "../svgComponents";

const Testimonials = () => {
  return (
    <section aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="uppercase font-bold">
        Testimonials
      </h2>
      <p className="font-bold">
        Nothing makes us happier than hearing how happy we make you!
      </p>
      <div className="carousel">
        <ul>
          <li>
            <article>
              <blockquote>
                <div className="flex">
                  <Star color={"yellow"} />
                  <Star color={"yellow"} />
                  <Star color={"yellow"} />
                  <Star color={"yellow"} />
                  <Star color={"yellow"} />
                </div>
                <p>More Energy For Everyday Life</p>
                <p>
                  Not only do I have more energy for workouts, but I&apos;m also
                  feeling more energetic in my daily life. This product is
                  helping me feel better overall. My workouts are better, my
                  mood is better, and I feel more energized. NAD+HIM has really
                  improved my vitality and health.
                </p>
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-red-100"
                >
                  S
                </span>
                <cite className="flex items-center">
                  SallyBananas <Dot /> Uk
                </cite>
                <time dateTime="2025-01-21">Jan 21, 2025</time>
              </blockquote>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
