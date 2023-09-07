import { useState } from "react";
import Review from "./Review";

const Clients = () => {
  const reviews = [
    {
      text: "I love the simple UI in the app. I don’t have to jump through hoops and 7 different screens in order to pay off my card, and adding funds is super easy.",
      author: "Dmitriy T.",
      role: "Customer",
    },
    {
      text: "Very unique concept. Difficult to imagine someone this app would not be helpful to. I recommend it to all my friends and family.",
      author: "Ariel E.",
      role: "Customer",
    },
    {
      text: "I never thought I’d enjoy opening a finance app this much. It just feels good. The rewards are a bonus. Instant cashback and so many of my favorite places are here!",
      author: "Ferron E.",
      role: "Customer",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="w-[70%] mt-56">
      <h1 className="tracking-widest">WHAT THEY SAID</h1>
      <div className="mt-8 flex flex-col gap-12">
        {reviews.map((review, index) => (
          <Review
            key={review.author}
            review={review}
            setActive={setActive}
            active={active}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
