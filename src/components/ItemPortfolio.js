import React from "react";

import "../styles/ItemPortfolio.css";

const ItemPortfolio = ({ conteudo }) => {
  const { image, description, link } = conteudo;
  return (
    <div className="col-sm-4">
      <div className="transition">
        <div className="thumbnail imgPortfolio">
          <img src={image} alt="teste" />
          <p>{description}</p>
          <button className="text-center">
            <a href={link}>Visitar</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPortfolio;
