import React from "react";

const ItemPortfolio = ({ conteudo }) => {
  const { image, description, link } = conteudo;
  return (
    <div className="col-sm-4">
      <a href={link}>
        <div className="thumbnail imgPortfolio">
          <img src={image} alt="teste" width="200" height="100" />
          <p>{description}</p>
          <button className="text-center">
            <a href={link}>Visitar</a>
          </button>
        </div>
      </a>
    </div>
  );
};

export default ItemPortfolio;
