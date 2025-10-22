import Image from "next/image";
import Link from "next/link";

const BlogPosts = () => {
  return (
    <section aria-labelledby="blog-posts-title">
      <Link href="/pages/cellregen-global-publications">
        See all Global Publications
      </Link>
      <div>
        <h2 id="blog-posts-title">Blog Posts</h2>
        <p>Health & Wellness Insights</p>
      </div>
      <Link href="/blogs/health-wellness-insights">View all posts</Link>
      <div className="flex">
        <article className="grid lg:grid-cols-[24]">
          <Image
            src="/images/8-Ingredients-to-Look-for-in-Supplements.webp"
            width={850}
            height={595}
            alt=""
            className="lg:col-start-1 lg:col-end-[16] lg:row-start-1 lg:row-end-1"
          />
          <div className="lg:col-start-11 lg:col-end-[24] lg:row-start-1 lg:row-end-1 bg-white text-black mt-7">
            <h3>
              8 Ingredients to Look for in Supplements to Support Type 2
              Diabetes
            </h3>
            <p>
              Managing type 2 diabetes can feel like a daunting task, but
              certain supplements may help support blood sugar control alongside
              your regular medication and healthy lifestyle choices. When
              shopping for...
            </p>
            <Link href="/blogs/health-wellness-insights/type-2-diabetes-supplements">
              Read more
            </Link>
          </div>
        </article>
        <article className="grid lg:grid-cols-[24] place-items-center">
          <Image
            src="/images/7-Natural-Remedies-for-Enhanced-Cardiovascular-Support.webp"
            width={850}
            height={567}
            alt=""
            className="lg:col-start-1 lg:col-end-[16] lg:row-start-1 lg:row-end-1 "
          />
          <div className="lg:col-start-11 lg:col-end-[24] lg:row-start-1 lg:row-end-1 bg-white text-black mt-7">
            <h3>
              8 Ingredients to Look for in Supplements to Support Type 2
              Diabetes
            </h3>
            <p>
              Managing type 2 diabetes can feel like a daunting task, but
              certain supplements may help support blood sugar control alongside
              your regular medication and healthy lifestyle choices. When
              shopping for...
            </p>
            <Link href="/blogs/health-wellness-insights/type-2-diabetes-supplements">
              Read more
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPosts;
