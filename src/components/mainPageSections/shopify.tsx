import { Star } from "../svgComponents";

const Shopify = () => {
  return (
    <section aria-labelledby="shopify-section-title">
      <h2 id="shopify-section-title" className="sr-only">
        Customer Reviews and Products
      </h2>
      <div className="flex">
        <div className="flex-1/3 text-center">
          <p>4.9/5</p>
          <div className="flex justify-center" aria-hidden="true">
            <Star color={"yellow"} />
            <Star color={"yellow"} />
            <Star color={"yellow"} />
            <Star color={"yellow"} />
            <Star color={"yellow"} />
          </div>
          <p>202 reviews</p>
        </div>
        <div className="flex-2/3">
          <dl className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars, index) => {
              const values = [87, 13, 0, 0, 0];
              return (
                <div key={stars} className="flex items-center gap-2">
                  <dt className="flex items-center gap-1">
                    <span>{stars}</span>
                    <Star color="yellow" aria-hidden="true" />
                  </dt>
                  <dd className="flex-1">
                    <meter
                      min="0"
                      max="100"
                      value={values[index]}
                      aria-label={`${stars} star reviews`}
                      className="w-full rounded-full overflow-hidden"
                    >
                      {values[index]}%
                    </meter>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Shopify;
