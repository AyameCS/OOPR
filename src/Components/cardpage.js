import React, { useState } from "react";
import Buttons from "./Button";
import Card from "./Card";
import './cardpage.css';

import icon1 from './EvoX.jpg';
import icon2 from './LanEvo.jpg';
import icon3 from './Lancer.jpg';

function CardsPage() {
  const [activeButton, setActiveButton] = useState(1);
  const [data, setData] = useState({
    title: "Subaru WRX STI 2017",
    image: icon1,
    description: "Rally born and bred, the WRX STI is the world‑renowned race legend that's only grown better with every victory. With its track‑tuned suspension, supreme handling, exhilarating acceleration, and unmistakable hood scoop, the STI screams rally champion on any road — even when parked. Checkered flags sold separately.",
  });

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    switch (buttonNumber) {
      case 1:
        setData({
          title: "Subaru WRX STI 2017",
          image: icon1,
          description: "Rally born and bred, the WRX STI is the world‑renowned race legend that's only grown better with every victory. With its track‑tuned suspension, supreme handling, exhilarating acceleration, and unmistakable hood scoop, the STI screams rally champion on any road — even when parked. Checkered flags sold separately.",
        });
        break;
      case 2:
        setData({
          title: "Lancer Evolution X 2020",
          image: icon2,
          description: "The Mitsubishi Lancer Evolution X, also known as the Evo X, is a high-performance sports sedan that was produced by the Japanese automaker Mitsubishi between 2007 and 2016. The Evo X is the tenth generation of the Lancer Evolution series and was designed to provide a thrilling driving experience for enthusiasts.The Evo X features a turbocharged 2.0-liter four-cylinder engine that produces 291 horsepower and 300 lb-ft of torque. The engine is paired with a 5-speed manual transmission or an optional 6-speed dual-clutch automatic transmission with paddle shifters.",
        });
        break;
      case 3:
        setData({
          title: "Lancer Evolution IX",
          image: icon3,
          description: "The Mitsubishi Lancer Evolution IX, or simply the Evo IX, is a high-performance sports sedan that was produced by the Japanese automaker Mitsubishi between 2005 and 2007. The Evo IX is the ninth generation of the Lancer Evolution series and was designed to offer exceptional performance on both the track and the street.The Evo IX is powered by a turbocharged 2.0-liter four-cylinder engine that produces 286 horsepower and 289 lb-ft of torque. The engine is paired with a 5-speed manual transmission, which is well-known for its precise and responsive shifting.",
        });
        break;
      default:
        setData({
          title: "Naruto Uzumaki",
          image: icon1,
          description: "Naruto Uzumaki is a legendary ninja and the Seventh Hokage of the Hidden Leaf Village, known for his strength, optimism, and ability to inspire others. He has faced numerous challenges throughout his life, but has always persevered and trained tirelessly to become a skilled ninja. As an adult, he is still energetic and optimistic, and has mastered powerful techniques such as the Rasengan and Sage Mode. He is also a devoted husband and father, and a mentor to the next generation of ninja. Naruto's legacy as a ninja and a leader is one that will be remembered for generations to come.",
        });
    }
  };

  return (
    <div className="CardsPage">
      <p1>ADS powered by Google</p1><h1>TOP JDM CARS 2022</h1>
      <Buttons onClick={handleButtonClick} />
      <Card data={data} />
    </div>
  );
}

export default CardsPage;