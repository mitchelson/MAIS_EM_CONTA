import React from 'react';
import logo from '../../assets/logo.svg';
import imgSection1 from '../../assets/imgHome.png'
import { FaUser } from 'react-icons/fa';
import './styles.css';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <div className="menu">
                        <div><a href="/"><img src={logo} alt="Mais em Conta" /></a></div>
                        <div className="left-menu">
                            <a href="/" className="active item">Home</a>
                            <a href="/" className="item">Sobre</a>
                            <a href="/" className="item">Ajuda</a>
                            <a href="/" className="item">Mercados</a>
                            <a href="/" className="item">Anuncie Aqui</a>
                        </div>
                        <div className="right-menu">
                            <a href="/login">
                                <span><FaUser style={{ fontSize: "40px" }} /></span>
                                <strong>Faça seu Login ou<br />Cadastre-se</strong>
                            </a>
                        </div>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="column-section">
                            <div>
                                <h1>Suas promoções já foram vistas hoje?</h1>
                                <p>Ter os melhores preços e os melhores produtos pode não adiantar de nada se ninguém
                                puder ve-los. Afinal, “quem não é visto não é lembrado”.  A Mais em Conta proporciona
                                uma ótima forma para que seus produtos e promoções possam alcançar o maior número
                                de pessoas.
                                </p>
                            </div>
                            <img src={imgSection1}></img>
                        </div>
                        <a href="/cadastro">
                            <strong>Anuncie Conosco</strong>
                        </a>
                    </section>
                </main>
            </div>
        </div>
    )
}
export default Home;