import React from 'react';
import imgSection1 from '../../assets/imgHome.png'
import imgSection2 from '../../assets/sectiontwo.png'
import { FaUser, FaRocket, FaClock, FaLeaf } from 'react-icons/fa';
import Header from '../../components/Header';
import ButtonStore from '../../components/ButtonStore';
import Footer from '../../components/Footer';
import '../Home/styles.css';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <Header />
                </header>
                <main>
                    <section className="section1">
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
                        <a href="/cadastro" className="anuncie">
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
                                <ButtonStore />
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