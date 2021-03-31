import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

const PortfolioList = (props) => {
  const portfolioList = [
    {
      image: "https://fakeimg.pl/250x100/",
      description:
        "Projeto criado 100% em React JS, convertido a partir de um template html: Company",
      link: "https://mattfarley.ca/",
    },

    {
      image: "https://fakeimg.pl/250x100/",
      description: "outro trabalho aí",
      link: "https://mattfarley.ca/",
    },

    {
      image: "https://fakeimg.pl/250x100/",
      description: "outro trabalho aí",
      link: "https://mattfarley.ca/",
    },
  ];
  return (
    <div className="row">
      <div className="col">
        <h2 className="text-center">My recent works</h2>
        <div className="row">
          {Object.keys(portfolioList).map((key) => {
            return <ItemPortfolio key={key} conteudo={portfolioList[key]} />;
          })}
        </div>
        <p>{portfolioList.image}</p>
      </div>
    </div>
  );
};
export default PortfolioList;
