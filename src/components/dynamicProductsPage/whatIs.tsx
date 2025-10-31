import Image from "next/image";

const WhatIs = ({ formattedTitle }: { formattedTitle: string }) => {
  return (
    <section aria-label={`What is ${formattedTitle} ?`}>
      <Image
        src="/images/products/Nad_Burn/What_is_NAD_BURN.webp"
        width={900}
        height={515}
        alt=""
      />
      <h2 className="uppercase">Nad+Burn</h2>
      <p>
        Harnessing the power of{" "}
        <strong>NAD+ restoration, brown fat activation</strong>, and{" "}
        <strong>precision nutrient synergy</strong>, NAD+BURN
        <span aria-hidden>™</span> targets stubborn weight gain, insulin
        resistance, and metabolic slowdown. Each ingredient is clinically
        validated to support fat oxidation, blood sugar stability, and appetite
        control while boosting overall performance.
      </p>
      <h3>Key Benefits:</h3>
      <ul>
        <li>
          MitoBurn<span aria-hidden>™</span>, CaloriBurn GP
          <span aria-hidden>™</span>, Green Tea Extract, and Garcinia Cambogia
          work together to ignite thermogenesis, enhance fat oxidation, and
          suppress appetite.
        </li>
        <li>
          NAD+, Vitamin B3, and Acetyl L-Carnitine improve mitochondrial
          efficiency and energy production.
        </li>
        <li>
          G4S Plus<span aria-hidden>™</span> and Vitamin D3 improve insulin
          sensitivity and glucose transport.
        </li>
        <li>
          L-Theanine and Ginger Root Extract reduce cortisol and inflammation.
        </li>
        <li>
          BioPerine<span aria-hidden>®</span> ensures maximum bioavailability of
          all co-actives.
        </li>
        <li>
          Perfect for metabolic reset, PCOS protocols, HRT support, and
          performance-driven fat-loss programs. Ideal for individuals seeking
          science-backed, multi-pathway support for fat metabolism, appetite
          control, and energy optimization.
        </li>
      </ul>
      <details name="product-benefits">
        <summary>
          Comprehensive List of Health Conditions Supported by NAD+BURN
          <span aria-hidden>™</span>
        </summary>
        <p>
          This combination of ingredients not only supports weight loss but also
          addresses various health concerns associated with metabolism,
          inflammation, and overall well-being. Here&apos;s a list of illnesses
          it may help manage or prevent:
        </p>
        <h3>Health Conditions Supported</h3>
        <ol>
          <li>
            <h4>1. Metabolic and Endocrine Disorders</h4>
            <ul>
              <li>
                <h4>Type 2 Diabetes: </h4>Improves insulin sensitivity and
                regulates blood sugar levels.
              </li>
              <li>
                <h4>Metabolic Syndrome: </h4>Addresses obesity, high blood
                sugar, and elevated cholesterol.
              </li>
              <li>
                <h4>Thyroid Dysfunction: </h4>Supports metabolic processes
                linked to thyroid health.
              </li>
            </ul>
          </li>
          <li>
            <h4>2. Cardiovascular Conditions</h4>
            <ul>
              <li>
                <h5>High Cholesterol: </h5>Reduces LDL cholesterol and improves
                lipid profiles.
              </li>
              <li>
                <h5>Hypertension (High Blood Pressure): </h5>Improves blood
                circulation and reduces inflammation.
              </li>
              <li>
                <h5>Atherosclerosis: </h5>Prevents plaque buildup in arteries
                through antioxidant effects.
              </li>
            </ul>
          </li>
          <li>
            <h4>3. Digestive Health</h4>
            <ul>
              <li>
                <h5>Indigestion and Bloating: </h5>Ginger extract improves gut
                motility and digestion.
              </li>
              <li>
                <h5>Leaky Gut Syndrome: </h5>Gymnema Sylvestre and green tea
                extract support gut health and integrity.
              </li>
            </ul>
          </li>
          <li>
            <h4>4. Neurological and Cognitive Health</h4>
            <ul>
              <li>
                <h5>Brain Fog: </h5>NAD+ and L-Theanine improve focus and
                cognitive clarity.
              </li>
              <li>
                <h5>Stress and Anxiety: </h5>L-Theanine promotes relaxation
                without sedation.
              </li>
            </ul>
          </li>
          <li>
            <h4>5. Inflammatory and Oxidative Stress-Related Illnesses</h4>
            <ul>
              <li>
                <h5>Chronic Inflammation: </h5>EGCG and Hydroxycitric Acid
                reduce systemic inflammation.
              </li>
              <li>
                <h5>Arthritis: </h5>Ginger extract and EGCG help alleviate joint
                inflammation.
              </li>
              <li>
                <h5>Oxidative Stress Disorders: </h5>NAD+ and green tea extract
                combat free radicals.
              </li>
            </ul>
          </li>
          <li>
            <h4>6. Weight-Related Illnesses</h4>
            <ul>
              <li>
                <h5>Obesity: </h5>Targets stubborn fat, particularly visceral
                fat.
              </li>
              <li>
                <h5>Fatty Liver Disease: </h5>N-Acetyl L-Carnitine supports
                liver fat metabolism.
              </li>
            </ul>
          </li>
          <li>
            <h4>7. Hormonal and Reproductive Health</h4>
            <ul>
              <li>
                <h5>PCOS (Polycystic Ovary Syndrome): </h5>Gymnema Sylvestre
                supports blood sugar regulation and weight loss.
              </li>
              <li>
                <h5>Testosterone Deficiency (in Men): </h5>Vitamin D3 and
                L-BAIBA support hormonal balance.
              </li>
            </ul>
          </li>
        </ol>
        <h3>Weight Loss Benefits of This Blend</h3>
        <ol>
          <li>
            <h4>1. Fat Burning and Energy Production</h4>
            <ul>
              <li>
                <h5>Increases Fat Oxidation: </h5>L-Theanine and NAD+ promote
                fat burning and energy production.
              </li>
              <li>
                <h5>Thermogenesis Activation: </h5>Gymnema Sylvestre and green
                tea extract support thermogenesis activation.
              </li>
            </ul>
          </li>
          <li>
            <h4>2. Appetite Control</h4>
            <ul>
              <li>
                <h5>Craving Reduction: </h5>Ginger extract and N-Acetyl
                L-Carnitine reduce cravings and appetite.
              </li>
              <li>
                <h5>Blood Sugar Stabilization: </h5>L-Theanine supports blood
                sugar regulation and weight loss.
              </li>
            </ul>
          </li>
          <li>
            <h4>3. Metabolism Boost</h4>
            <ul>
              <li>
                <h5>Mitochondrial Efficiency: </h5>Gymnema Sylvestre and green
                tea extract promote mitochondrial efficiency.
              </li>
              <li>
                <h5>Thermogenic Metabolism: </h5>L-Theanine and NAD+ support
                thermogenic metabolism.
              </li>
            </ul>
          </li>
          <li>
            <h4>4. Hormonal Balance for Weight Loss</h4>
            <ul>
              <li>
                <h5>L-BAIBA: </h5>Encourages fat tissue to convert to
                energy-burning brown fat.
              </li>
              <li>
                <h5>Vitamin D3: </h5>Supports hormonal regulation that aids in
                weight management.
              </li>
            </ul>
          </li>
          <li>
            <h4>5. Enhanced Physical Performance</h4>
            <ul>
              <li>
                <h5>Exercise Efficiency: </h5>Gymnema Sylvestre and green tea
                extract support exercise efficiency.
              </li>
              <li>
                <h5>Recovery Support: </h5>L-Theanine and NAD+ promote recovery
                after exercise.
              </li>
            </ul>
          </li>
          <li>
            <h4>6. Mental and Emotional Support for Weight Loss</h4>
            <ul>
              <li>
                <h5>Improved Mood: </h5>L-Theanine and NAD+ support emotional
                well-being.
              </li>
              <li>
                <h5>Cognitive Focus: </h5>Gymnema Sylvestre and green tea
                extract promote cognitive focus.
              </li>
            </ul>
          </li>
        </ol>
        <h3>Overall Synergistic Benefits</h3>
        <p>This blend is designed to:</p>
        <ul>
          <li>Target stubborn fat.</li>
          <li>Enhance metabolism and thermogenesis.</li>
          <li>Suppress appetite and cravings.</li>
          <li>Improve hormonal balance for sustainable weight loss.</li>
          <li>
            Support physical and mental energy, ensuring long-term adherence to
            a healthy lifestyle.
          </li>
        </ul>
        <p>
          It&apos;s ideal for both men and women seeking a holistic and
          effective approach to weight management and overall health
          improvement.
        </p>
      </details>
      <details name="product-benefits">
        <summary>NAD+BURN®: Uniquely Effective Supplement</summary>
        <p>
          CELLREGEN® NAD+BURN® stands out from other supplements and vitamins
          due to its unique formulation that combines NAD+ precursors with
          specifically patented ingredients developed for effective weight loss.
          This product not only targets energy production but also enhances
          metabolism, making it an excellent choice for those looking to manage
          their weight effectively. The scientific backing behind its
          formulation ensures that the ingredients are not only high-quality and
          bioavailable but also specifically tailored to support weight loss
          while promoting overall vitality and wellness. This innovative
          approach and focus on cellular health contribute to its distinct
          position in the supplement market.
        </p>
      </details>
    </section>
  );
};

export default WhatIs;
