import Header from './components/header/MainHeader';
import { useState, useEffect } from 'react';


import IMAGEM1 from './img/IMAGEM 1.jpg';
import IMAGEM2 from './img/IMAGEM 2.jpg';
import logoRodape from './img/footer_logo_360x.png';
import img_portfolio_1 from './img/portfolio-imagem-1.jpg';
import img_portfolio_2 from './img/portfolio-imagem-2.jpg';
import img_portfolio_3 from './img/portfolio-imagem-3.jpg';
import img_portfolio_4 from './img/portfolio-imagem-4.jpg';
import img_portfolio_5 from './img/portfolio-imagem-5.jpg';
import img_portfolio_6 from './img/portfolio-imagem-6.jpg';

import config from './config.json';

import Avatar from 'react-avatar';

import './App.css';
import './AppMedia.css';
import './carossel.css';

function App() {
  const [carosselNumber, setCarosselNumber] = useState(0);
  const [commentNumber, setCommentNumber] = useState(3);
  const [selectSobre, setSelectSobre] = useState(false);
  const [selectPortfolio, setSelectPortfolio] = useState(false);

  const [listSobre, setListSobre] = useState(true);
  const [listSobreOpen, setListSobreOpen] = useState(true);

  const [listMenu, setListMenu] = useState(true);
  const [listMenuOpen, setListMenuOpen] = useState(true);


  useEffect(() => {
    if (window.screen.width < 600) {
      setCommentNumber(1);
      setListSobre(false);
      setListSobreOpen(false);
      setListMenu(false);
      setListMenuOpen(false);
    } else {
      setCommentNumber(3);
    }
    console.log("Tamanho da tela att");
  }, []);

  const NextCarossel = () => {
    if (carosselNumber > (Object.keys(config['Comments']).length - commentNumber - 1))
      setCarosselNumber(0);
    else
      setCarosselNumber(carosselNumber + 1);
  };

  const BeforeCarossel = () => {
    if (carosselNumber <= 0)
      setCarosselNumber((Object.keys(config['Comments']).length - commentNumber - 1));
    else
      setCarosselNumber(carosselNumber - 1);
  };


  return (
    <div className="App">

      <Header />


      <div className="App-sobre">
        <p className="titulo" id="sobre">SOBRE</p>
        <div className="paragrafo-1">
          <img src={IMAGEM1} className="image-1" alt="img" />
          <div className="info">
            <p>A Vasta Web é uma firma especializada em desenvolvimento de sites profissionais
              para empresas e indivíduos. Utilizamos as últimas tecnologias e tendências para criar paginas
              atraentes, funcionais e otimizadas para mecanismos de busca. Oferecemos uma ampla gama de
              serviços, desde a criação de conteudo web do zero até a manutenção e otimização de produtos
              existentes. Nossa equipe de designers e desenvolvedores experientes trabalham em estreita
              colaboração com nossos clientes para entender suas necessidades e criar formulas
              personalizadas para atender aos seus objetivos de negócios. </p>
            {!selectSobre && <button onClick={() => { setSelectSobre(!selectSobre) }} className="botao">SAIBA MAIS</button>}
            {!selectSobre && <button onClick={() => { setSelectSobre(!selectSobre) }} className="botaoMobile">
              <span className="material-icons">expand_more</span>
              LEIA MAIS
              <span className="material-icons">expand_more</span>
            </button>}</div>
        </div>

        {selectSobre && <div className="paragrafo-2">
          <img src={IMAGEM2} className="image-2-M" alt="img" />
          <div className="info">
            <p>Além de desenvolver websites, também oferecemos serviços de SEO e marketing digital para ajudar
              a maximizar o alcance e a eficácia do seu estabelecimento comercial. Isso inclui a otimização de mecanismos de
              busca, criação de conteúdo de qualidade, geração de leads e análise de dados para entender
              como os visitantes estão interagindo com o seu site e como podemos melhorar a sua experiência.
              Nós também oferecemos suporte contínuo e manutenção para garantir que ele continue
              funcionando corretamente e esteja sempre atualizado.
              Se você está procurando uma empresa confiável para ajudá-lo a criar ou melhorar o seu conteudo digital,
              a empresa Vasta Web é a escolha certa.</p>
          </div>
          <img src={IMAGEM2} className="image-2" alt="img" />
        </div>}
      </div>


      <div className="App-portfolio" id="portfolio">
        <p className="titulo">PORTFÓLIO</p>
        <div className="linha-portfolio">
          <img src={img_portfolio_1} className="image" alt="img" />
          <img src={img_portfolio_2} className="image" alt="img" />
          <img src={img_portfolio_3} className="image" alt="img" />
          <img src={img_portfolio_4} className="image" alt="img" />
          <img src={img_portfolio_5} className={selectPortfolio ? "image" : "image-M"} alt="img" />
          <img src={img_portfolio_6} className={selectPortfolio ? "image" : "image-M"} alt="img" />
        </div>
        <button onClick={() => { setSelectPortfolio(!selectPortfolio) }} className="botao">CARREGAR MAIS PROJETOS</button>
      </div>


      <p className="titulo-depoimento" id="depoimentos">DEPOIMENTOS</p>
      <div className="App-depoimentos">
        <button className="icon_next" onClick={() => { BeforeCarossel(); }}>
          <span className="material-icons">navigate_before</span>
        </button>
        {Object.keys(config['Comments']).map((comm, n) =>
          <div key={n} className={(n >= carosselNumber && n < carosselNumber + commentNumber) ? 'box-depoimento-visible' : 'box-depoimento-invisible'}>

            <div className="box-info">
              <Avatar size="80" name={comm} />
              <div className="info">
                <p className="nome">{comm}</p>
                <p className="star">&#9733; &#9733; &#9733; &#9733; &#9733; </p>
                <p className="dp"> {config['Comments'][comm][1]} </p>
              </div>
            </div>
          </div>
        )}
        <button className="icon_next" onClick={() => { NextCarossel(); }}>
          <span className="material-icons">navigate_next</span>
        </button>
      </div>


      <p className="titulo-contato" id="contato">CONTATO</p>
      <div className="App-contato">
        <div className='personalinfo'>
          <div><input type="nome" /* onChange={changeInfo} */ id="InputNome" placeholder="Nome"></input></div>
          <div><input type="sobrenome" /* onChange={changeInfo} */ id="InputSobrenome" placeholder="Sobrenome"></input></div>
          <div><input type="email" /* onChange={changeInfo} */ id="InputEmail" placeholder="Email"></input></div>
        </div>
        <div className='divdata'>
          <div className='msg'>
            <textarea type="mensagem" /* onChange={changeInfo} */ id="InputMensagem" placeholder="Mensagem"></textarea>
          </div>
          <div className='tellbutton'>
            <input type="telefone" /* onChange={changeInfo} */ id="InputTelefone" placeholder="Telefone"></input>
            <div className='msgbutton'>
              <p>Todos os dados serão guardados de forma segura, saiba mais <a>aqui</a>.</p>
              <button className="botao">ENVIAR</button></div>
          </div>
        </div>
      </div>


      <div className='rodape'>
        <div className='E'>
          <div className="div-image-E">
            <img src={logoRodape} className="image" alt="img" /></div>
          <div>
            <p className='news'> SE INSCREVA PARA RECEBER NOSSAS NOVIDADES</p>
            <div>
              <input type="emailnews" /* onChange={changeInfo} */ id="InputEmailNews" placeholder="Email"></input>
              <button className="botao">INSCREVER</button>
            </div>
          </div>
          <p className='tittle-port'>PORTFÓLIO</p>
          <div className='port'>
            <div className='port-div1'>
              <div>
                <img src={img_portfolio_2} className="image" alt="img" />
                <p>LINK 1</p>
              </div>
              <div>
                <img src={img_portfolio_3} className="image" alt="img" />
                <p>LINK 2</p>
              </div>
            </div>
            <div className='port-div1'>
              <div>
                <img src={img_portfolio_5} className="image" alt="img" />
                <p>LINK 3</p>
              </div>
              <div>
                <img src={img_portfolio_4} className="image" alt="img" />
                <p>LINK 4</p>
              </div>
            </div>
          </div>
        </div>

        <div className='D'>
          <div className='D-menu'>
            <div className="d1">
              <p className="p1">
                <span onClick={() => { setListMenuOpen(!listMenuOpen) }} className={!listMenu ? "material-icons" : "itemHide"}>{listMenuOpen ? "expand_less" :"expand_more"} </span>
                MENU
                <span onClick={() => { setListMenuOpen(!listMenuOpen) }} className={!listMenu ? "material-icons" : "itemHide"}> {listMenuOpen ? "expand_less" :"expand_more"}</span>
                
                </p>
              {listMenuOpen && <div>
                <p className="p2"><a href="#sobre">Sobre</a></p>
                <p className="p2"><a href="#portfolio">Portfolio</a></p>
                <p className="p2"><a href="#depoimentos">Depoimentos</a></p>
                <p className="p2"><a href="#contato">Contato</a></p></div>}
            </div>
            <div className="d2">
              <p className="p2">
                <span onClick={() => { setListSobreOpen(!listSobreOpen) }} className={!listSobre ? "material-icons" : "itemHide"}>{listSobreOpen ? "expand_less" :"expand_more"} </span>
                SOBRE
                <span onClick={() => { setListSobreOpen(!listSobreOpen) }} className={!listSobre ? "material-icons" : "itemHide"}>{listSobreOpen ? "expand_less" :"expand_more"} </span>
                </p>
                {listSobreOpen && <div>
                <p className="p2">Politica de Privacidade</p>
                <p className="p2">Termos de Uso</p></div>}
            </div>
          </div>
          <div className="div-image-D">
            <img src={logoRodape} className="image" alt="img" /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
