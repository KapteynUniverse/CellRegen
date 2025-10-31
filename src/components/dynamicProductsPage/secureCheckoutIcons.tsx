import Image from "next/image";

const paymentIcons = [
  {
    id: "mastercard",
    name: "MasterCard",
    Icon: "/images/icons/mastercard.svg",
  },
  { id: "visa", name: "Visa", Icon: "/images/icons/visa.svg" },
  {
    id: "americanexpress",
    name: "American Express",
    Icon: "/images/icons/americanexpress.svg",
  },
  { id: "applepay", name: "Apple Pay", Icon: "/images/icons/applepay.svg" },
  {
    id: "256bitsslsecure",
    name: "256 bit SSL Secure",
    Icon: "/images/icons/256bitsslsecure.svg",
  },
  {
    id: "256bitsslsecure2",
    name: "256 bit SSL Secure",
    Icon: "/images/icons/256bitsslsecure_2.svg",
  },
  {
    id: "securecheckout",
    name: "Secure Checkout",
    Icon: "/images/icons/securecheckout.svg",
  },
  {
    id: "freeshipping",
    name: "Free Shipping",
    Icon: "/images/icons/freeshipping.svg",
  },
  { id: "moneyback", name: "Money Back", Icon: "/images/icons/moneyback.svg" },
  {
    id: "veganproduct",
    name: "Vegan Product",
    Icon: "/images/icons/veganproduct.svg",
  },
  {
    id: "fastshipping",
    name: "Fast Shipping",
    Icon: "/images/icons/fastshipping.svg",
  },
  {
    id: "100percentsatisfaction",
    name: "100 Percent Satisfaction",
    Icon: "/images/icons/100percentsatisfaction.svg",
  },
];

const SecureCheckoutIcons = () => {
  return (
    <ul className="flex flex-wrap gap-4">
      {paymentIcons.map((icon) => (
        <li key={icon.id}>
          <Image src={icon.Icon} alt={icon.name} width={115} height={80} />
        </li>
      ))}
    </ul>
  );
};

export default SecureCheckoutIcons;
