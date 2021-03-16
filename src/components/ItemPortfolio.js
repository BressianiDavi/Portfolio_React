import React from "react";

import "../styles/ItemPortfolio.css";

const ItemPortfolio = ({ conteudo }) => {
  const { image, description, link } = conteudo;
  return (
    <div className="col-sm-4">
      <a href={link}>
        <div className="transition">
          <div className="thumbnail imgPortfolio">
            <img src={image} alt="teste" />
            <p>{description}</p>
            <button className="text-center bntVisitar">Visitar</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ItemPortfolio;
