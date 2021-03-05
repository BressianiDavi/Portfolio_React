import React from "react";

const ItemPortfolio = ({ conteudo }) => {
  const { image, description, link } = conteudo;
  return (
    <div className="col-sm-4">
      <div className="thumbnail imgPortfolio">
        <img src={image} alt="teste" width="200" height="100" />
        <p>{description}</p>
        <a href={link}>Visitar</a>
      </div>
    </div>
  );
};

export default ItemPortfolio;
