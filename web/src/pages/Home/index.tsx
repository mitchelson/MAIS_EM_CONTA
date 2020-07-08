import React from 'react';
import logo from '../../assets/logo.svg';
import imgSection1 from '../../assets/imgHome.png'
import imgSection2 from '../../assets/sectiontwo.png'
import appStore from '../../assets/appstore.png'
import playStore from '../../assets/playstore.png'
import { FaUser, FaRocket, FaClock, FaLeaf } from 'react-icons/fa';
import Footer from '../Footer';
import '../Home/styles.css';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <div className="menu">
                        <div><a href="/"><img src={logo} alt="Mais em Conta" /></a></div>
                        <div className="left-menu">
                            <a href="/" className="active-item">Home</a>
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
                            <img alt="Mulher com Celular na Mão" src={imgSection1}></img>
                        </div>
                        <a href="/cadastro">
                            <strong>Anuncie Conosco</strong>
                        </a>
                    </section>
                    <section>
                        <div className="column-section2">
                            <img alt="Diversidade de Pessoas" src={imgSection2}></img>
                            <div>
                                <h1>Não importa onde você
                                esteja ou quem você seja</h1>
                                <p>Levamos seus produtos e promoções a qualquer lugar
                                e a qualquer pessoa, seja você pequena, média
                                ou grande empresa. Mais alcance, impossível!
                                </p>
                                <br />
                                <br />
                                <strong>DISPONÍVEL EM:</strong>
                                <div className="groupbutton-download">
                                    <img alt="AppStore" className="download-img" src={appStore}></img>
                                    <img alt="PlayStore" className="download-img" src={playStore}></img>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="column-section3">
                            <h1>Benefícios</h1>
                            <p>Conheça alguns dos benefícios que só você pode ter</p>
                            <div className="boxs">
                                <div className="box">
                                    <FaRocket style={{ fontSize: "80px", color: '#fff' }} />
                                    <h1>Alcance</h1>
                                    <p>Veja seus produtos e promoções chegarem onde você nem imagina.</p>
                                </div>
                                <div className="box">
                                    <FaClock style={{ fontSize: "80px", color: '#fff' }} />
                                    <h1>Disponível 24h</h1>
                                    <p>Seus produtos e promoções estarão visivéis a qualquer hora e em qualquer lugar.</p>
                                </div>
                                <div className="box">
                                    <FaLeaf style={{ fontSize: "80px", color: '#fff' }} />
                                    <h1>Ajude o Planeta</h1>
                                    <p>Não utilizando papel para a divulgação dos seus produtos e promoções você ajuda o planeta.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </main>
            </div>
        </div >
    )
}
export default Home;