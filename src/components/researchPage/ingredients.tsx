import Image from "next/image";
import Link from "next/link";

const ingredientItems = [
  {
    name: "NAD+",
    title: "NAD+ Research",
    description:
      "Across the kingdom of life, an increase in intracellular levels of NAD+ triggers shifts that enhance survival, including boosting energy production and upregulating cellular repair. In fact, the slow, ineluctable process of aging has been described as a “cascade of robustness breakdown triggered by a decrease in systemic NAD+ biosynthesis and the resultant functional defects in susceptible organs and tissues.",
    img: {
      path: "Nad+.webp",
      width: 600,
      height: 337,
    },
    link: "/research/nad+",
  },
  {
    name: "CyanthOx Hippophe Rhamnoides",
    title: "CyanthOx Hippophe Rhamnoides",
    description: (
      <>
        As we age, our cells need to stay healthy for us to feel our best, but
        ageing can slow them down, leading to tiredness and weakened immunity.
        CyanthOx<span aria-hidden>™</span> Hippophe Rhamnoides Extract (50% PAC)
        is a powerful plant-based antioxidant that surpasses traditional
        extracts.
      </>
    ),
    img: {
      path: "CyanthOx.webp",
      width: 450,
      height: 318,
    },
    link: "/research/cyanthox",
  },
  {
    name: "ALOEXR Vahona",
    title: "Research Report on ALOEXR™ Vahona",
    description: (
      <>
        ALOEXR<span aria-hidden>™</span> Vahona is a premium extract derived
        from Aloe macroclada. Clinical studies highlight its role instem cell
        mobilization,anti-inflammatory properties, andimmune modulation. It is
        particularly effective in promoting tissue repair and improving skin
        health through enhanced collagen production.
      </>
    ),
    img: {
      path: "Aloexr.webp",
      width: 450,
      height: 450,
    },
    link: "/research/aloexr",
  },
  {
    name: "Omegia Sea Buckthorn fruit seed",
    title: "Omegia Sea Buckthorn fruit seed",
    description: (
      <>
        Comprising of both the sea buckthorn fruit and seed oil, Omegia
        <span aria-hidden>®</span> is aunique standardized formula containing a
        balanced ratio of all theunsaturated fatty acids: Omega-3-6-7-9.
        Moreover, it also consists ofmany antioxidants, such as beta-carotene
        and vitamin E, and plantsterols, which are essential for human health.
      </>
    ),
    img: {
      path: "Omegia.webp",
      width: 400,
      height: 400,
    },
    link: "/research/omegia",
  },
  {
    name: "Calori Burn",
    title: "Calori Burn Grains of Paradise",
    description: (
      <>
        CaloriBurn GP<span aria-hidden>™</span> is 100% Aframomum Melegueta
        (grains of paradise) extract, which isethanol and water extracted
        through a natural proprietary technologywith HPLC & HPTLC standards.It
        preserves ALL the metabolism-enhancing bioactive compounds from human
        studies: 6-Paradol, 6-Shogaol, and 6-Gingerol. Grains of paradise has
        been shown to increase energy expenditure and improve body composition
        in humans.
      </>
    ),
    img: {
      path: "CaloriBurn.webp",
      width: 280,
      height: 256,
    },
    link: "/research/caloriburn",
  },
  {
    name: "Mito Burn",
    title: "Mito Burn L-Baiba",
    description: (
      <>
        MitoBurn<span aria-hidden>™</span> is L-BAIBA, which the muscles produce
        during exercise. It is an amino acid metabolite of L-valine, is
        triggered by the PGC-1α protein from exercising muscles.Known as an
        “exercise factor”, increased levels of L-BAIBA are associated with many
        of exercise’s numerous benefits. For example, L-BAIBA helps regulate
        metabolism, increase energy expenditure, manage fuel selection, and
        more. Up until now, the best way to increase levels of BAIBA was through
        intense exercise…but that all changes with MitoBurn, which is designed
        to help ignite the metabolic fire within!
      </>
    ),
    img: {
      path: "MitoBurn.webp",
      width: 280,
      height: 273,
    },
    link: "/research/mitoburn",
  },
  {
    name: "Pruriens80",
    title: (
      <>
        Pruriens80<span aria-hidden>™</span>: Natural Dopamine and Testosterone
        Booster
      </>
    ),
    description: (
      <>
        Pruriens80<span aria-hidden>™</span> is a premium Mucuna pruriens
        extract standardized to 80% L-DOPA. Known for enhancing dopamine levels,
        it supports mood, focus, and cognitive health. Additionally, Pruriens80
        <span aria-hidden>™</span> promotes natural testosterone production,
        improving energy, vitality, and hormonal balance. With antioxidant
        properties, it aids in cellular protection and overall wellness.
      </>
    ),
    img: {
      path: "Pruriens.webp",
      width: 450,
      height: 450,
    },
    link: "/research/pruriens",
  },
  {
    name: "AFAlo",
    title: (
      <>
        AFAlo<span aria-hidden>™</span>: Rejuvenation and Vitality Enhancer
      </>
    ),
    description: (
      <>
        AFAlo<span aria-hidden>™</span> is a premium extract of Aphanizomenon
        flos-aquae (AFA), known for its ability to support natural stem cell
        release, cellular rejuvenation, and overall vitality. By promoting
        cellular repair and regeneration, AFAlo™ enhances energy, focus, and
        well-being. With antioxidant and anti-inflammatory properties, it
        contributes to improved skin health, immunity, and hormonal balance,
        making it a holistic solution for enhanced vitality and longevity.
      </>
    ),
    img: {
      path: "Afalo.webp",
      width: 450,
      height: 450,
    },
    link: "/research/afalo",
  },
  {
    name: "GS4 PLUS",
    title: (
      <>
        GS4 PLUS<span aria-hidden>™</span>: Advanced Blood Sugar Support and
        Weight Loss
      </>
    ),
    description: (
      <>
        GS4 PLUS<span aria-hidden>™</span> is a standardized extract of Gymnema
        sylvestre containing 75% gymnemic acids, renowned for its ability to
        support healthy blood sugar levels and aid in weight loss. By regulating
        glucose metabolism and reducing sugar cravings, GS4 PLUS
        <span aria-hidden>™</span> helps control appetite and supports fat
        management. Additionally, it promotes insulin efficiency, metabolic
        health, and energy balance. With antioxidant properties, GS4 PLUS
        <span aria-hidden>™</span> protects cells and enhances overall wellness,
        making it an excellent choice for holistic weight management and
        vitality.
      </>
    ),
    img: {
      path: "GS4.webp",
      width: 450,
      height: 432,
    },
    link: "/research/gs4",
  },
];

const Ingredients = () => {
  return (
    <section aria-labelledby="other-research">
      <h2 id="other-research" className="sr-only">
        Research of other products
      </h2>
      <ul className="sm:grid sm:grid-cols-3">
        {ingredientItems.map(({ name, title, description, img, link }) => (
          <li key={name}>
            <article className="relative">
              <Link href={link}>
                <Image
                  src={`/images/research/ingredients/${img.path}`}
                  alt={`Go to ${name} research page`}
                  width={img.width}
                  height={img.height}
                  className="w-full aspect-square object-fill"
                />
              </Link>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link href={link}>
                Learn More{" "}
                <span className="sr-only">about {name} research</span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ingredients;
