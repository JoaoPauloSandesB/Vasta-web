import { Routes, Route, BrowserRouter, Navigate, Switch, useNavigate } from "react-router-dom";

import React, { useEffect, Fragment } from 'react';

import './navbar.css';

import logo from '../../img/Vasta.png';
import banner from '../../img/Banner.jpg';
import bannerMobile from '../../img/BANNER - IMAGE - MOBILE.png';

const MainHeader = (props) => {
  const navigate = useNavigate();

  const update = () => {
    props.onChangeState(true);
  }

  const toggleMenuOpen = () => { document.body.classList.toggle("open"); }
  var title = "Vasta";

  return (
    <div className="headerstyle">
      <img src={banner} className="App-banner-img" alt="Banner" />
      <img src={bannerMobile} className="App-banner-img-media" alt="Banner" />
      <div className="App-banner-tittle">
        <p className="titulo">
          <span class="blinking1">SOLUÇÕES EM DESENVOLVIMENTO WEB</span>
        </p>
        <p className="subtitulo">Projetos personalizados para o sucesso dos seus negócios!</p>
        <button className="botao">FAÇA UM ORÇAMENTO</button>
      </div>
      <nav className="navbar">

        <div className="navbar-overlay" onClick={toggleMenuOpen}></div>

        <img src={logo} onClick={() => { navigate("/"); }} className="navbar-title" alt="logo" />



        <nav className="navbar-menu">
          <img src={logo} className="navbar-img-menu" alt="logo" />
          <button><a href="#sobre">Sobre</a></button>
          <button><a href="#portfolio">Portfólio</a></button>
          <button><a href="#depoimentos">Depoimentos</a></button>
          <button><a href="#contato">Contato</a></button>
          <section>
            <input type="search" id="InputSearch" placeholder="Search"></input>
            <button onClick={() => { navigate("#search"); }}> <div> <span className="material-icons">search</span> </div></button>
          </section>
        </nav>

        <button type="button" className="navbar-burger" onClick={toggleMenuOpen}>
          <span className="material-icons">menu</span>
        </button>

      </nav> 



    </div>

  );
};

export default MainHeader;