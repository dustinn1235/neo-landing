type Product = {
  name: string;
  description: string;
  imgURL: string;
};

export const products: Product[] = [
  {
    name: "Neo Money™",
    description:
      "Get the benefits of a chequing account, savings account, and premium rewards card together for no monthly fees¹. Earn high interest and instant cashback in one place, along with free everyday transactions and worldwide ATM access.",
    imgURL: "neomoney.webp",
  },
  {
    name: "Neo Credit",
    description:
      "Get more from your credit card with guaranteed approval², unlimited instant cashback, and no annual fees³. Add perks⁴ to boost rewards on things you already buy. Use advanced features to move money and track your spending in real-time.",
    imgURL: "neocredit.webp",
  },
  {
    name: "Neo Invest™",
    description:
      "Get the convenience of robo-investing with the comfort of human expertise. Let Neo Invest™—powered by OneVest⁵ build you a custom portfolio designed to align with your values, timelines, and risk tolerances. Start with as little as $1.",
    imgURL: "neoinvest.webp",
  },
  {
    name: "Neo Mortgage™",
    description:
      "Get advice that feels close to home with personal mortgage advisors that support you every step of the way. Get your best rate and a simpler mortgage experience.",
    imgURL: "neomortgage.webp",
  },
];
