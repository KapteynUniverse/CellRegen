"use client";

import { formattedDate } from "@/utils/formatDate";
import { Arrow, Dot, Star } from "../svgComponents";
import { useAutoCarousel } from "@/hooks/useAutoCarousel";
import { testimonials } from "@/data/testimonials";

const colors = ["red", "blue", "green", "yellow", "purple", "pink", "teal"];

const getColorByName = (name: string) => {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  const color = colors[sum % colors.length];
  return `bg-${color}-500 text-${color}-100`;
};

const testimonialData = testimonials.map((item) => ({
  ...item,
  colorClass: getColorByName(item.name),
}));

const Rating = ({ score }: { score: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star key={i} color={i < score ? "yellow" : "black"} />
  ));
  return <div className="flex justify-center gap-4">{stars}</div>;
};

const Testimonials = () => {
  const [index, setIndex] = useAutoCarousel(testimonials.length, 5000);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-secondaryBg py-8 text-center"
    >
      <div className="wrapper">
        <h2 id="testimonials-title" className="uppercase font-bold mb-8">
          Testimonials
        </h2>
        <p className="font-bold">
          Nothing makes us happier than hearing how happy we make you!
        </p>
        <div className="relative overflow-hidden">
          <button
            onClick={handlePrev}
            className="absolute left-40 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors z-50 cursor-pointer"
            aria-label="Slide to the previous testimonial"
          >
            <span aria-hidden>
              <Arrow style="carousel-arrow--left" />
            </span>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-40 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors z-50 cursor-pointer"
            aria-label="Slide to the next testimonial"
          >
            <span aria-hidden>
              <Arrow style="carousel-arrow--right" />
            </span>
          </button>
          <ul
            className="flex mt-24 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonialData.map((item) => (
              <li key={item.name} className="min-w-full flex-shrink-0">
                <article className="max-w-xl mx-auto">
                  <blockquote className="flex flex-col items-center gap-4">
                    {Rating({ score: item.score })}
                    <p className="font-bold">{item.title}</p>
                    <p>{item.description}</p>
                    <p
                      aria-hidden
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${item.colorClass}`}
                    >
                      {item.name.charAt(0).toUpperCase()}
                    </p>
                    <cite className="flex items-center justify-center">
                      <span className="font-bold">{item.name}</span> <Dot />{" "}
                      {item.place}
                    </cite>
                    <time dateTime={formattedDate(item.time).iso}>
                      {formattedDate(item.time).display}
                    </time>
                  </blockquote>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
