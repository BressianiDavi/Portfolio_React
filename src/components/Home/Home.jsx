import React, { Link } from "react";

import Particles from "../Particles";
import Luminaria from "../../assets/img/luminaria (1).png";
import PortfolioList from "../PortfolioList/PortfolioList";

import "./Home.css";

const Home = (props) => {
  return (
    <div id="hero">
      <div className="particles-js">
        <Particles />
      </div>
      <div className="container">
        <header className="row cabecalho">
          <div className="col-2">
            <div className="lampada">
              <img src={Luminaria} alt="lâmpada" />
            </div>
          </div>
          <div className="col-10 social">
            <p>
              <a
                className="btn button-outline btn-lg"
                href="https://github.com/BressianiDavi"
                role="button"
                target="_blank"
                rel="external noreferrer"
              >
                <i
                  style={{ color: "#24292e" }}
                  className="fab fa-fw fa-github"
                ></i>
              </a>
            </p>
            <p>
              <a
                className="btn button-outline btn-lg"
                href="https://www.linkedin.com/in/davi-bressiani-14a5761a8/"
                role="button"
                target="_blank"
                rel="external noreferrer"
              >
                <i
                  style={{ color: "#0a66c2" }}
                  className="fab fa-fw fa-linkedin-in"
                ></i>
              </a>
            </p>
            <p>
              <a
                className="btn button-outline btn-lg"
                href="https://www.facebook.com/davi.bressiani"
                role="button"
                target="_blank"
                rel="external noreferrer"
              >
                <i
                  style={{ color: "#1094f4" }}
                  className="fab fa-fw fa-facebook"
                ></i>
              </a>
            </p>
            <p>
              <a
                className="btn button-outline btn-lg"
                href="https://www.instagram.com/davi_bressiani/"
                role="button"
                target="_blank"
                rel="external noreferrer"
              >
                <i
                  style={{ color: "#d43089" }}
                  className="fab fa-fw fa-instagram"
                ></i>
              </a>
            </p>
            <p>
              <a
                className="btn btn-outline btn-lg"
                href="https://clicano.link/Contato-Davi-Bressiani"
                role="button"
                target="_blank"
                rel="external noreferrer"
              >
                <i
                  style={{ color: "#38d754" }}
                  className="fab fa-fw fa-whatsapp"
                ></i>{" "}
              </a>
            </p>
          </div>
        </header>
        <section className="row title">
          <p>Front-end Developer</p>
        </section>
        <section className="row text-center">
          <h2 className="text-center">
            Olá, eu sou o Davi. Que bom ter você por aqui!
          </h2>
          <p className="small-text">
            Eu estou desenvolvendo minhas habilidades em web developer e todos
            os dias me esforço para alcançar minhas metas, cumprir meus
            objetivos buscando sempre o desenvolvimento pessoal.
            <br />
            Acredito que bons hábitos nós levamos para o serviço e sou uma
            pessoa naturalmente curiosa, proativa, estou sempre tentando
            melhorar os processos e o meu trabalho, sei que posso ser um novo
            talento na criação de softwares. Tenho experiência com
            React/JS/HTML/CSS/Node.js/firebase/Bootstrap/GIT. Posso trabalhar
            tanto remoto como presencialmente.
          </p>
        </section>
        <PortfolioList />
      </div>
    </div>
  );
};
export default Home;
