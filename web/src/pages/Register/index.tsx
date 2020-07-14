import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './register.css';
import { FaFacebook, FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <Header />
                </header>
                <main className="registerMain">
                    <div className="register">
                        <div className="boxNameRegister">
                            <label>Cadastre-se</label>
                            <div className="registerSocials">
                                <FaFacebook />
                                <FaGoogle />
                            </div>
                        </div>
                        <section>
                            <div className="left">
                                <div className="inputRegister">
                                    <FaEnvelope />
                                    <input type="text" placeholder="Email..." />
                                </div>
                                <div className="inputRegister">
                                    <FaLock />
                                    <input type="password" placeholder="Senha..." />
                                </div>
                                <div className="inputRegister">
                                    <FaLock />
                                    <input type="password" placeholder="Senha..." />
                                </div>
                            </div>
                            <div className="right">
                                <div className="inputRegister">
                                    <FaLock />
                                    <input type="password" placeholder="Senha..." />
                                </div>
                            </div>
                        </section>
                        <label id="forgot"><a href="/forgot">Esqueceu a senha?</a></label>
                        <button>Entrar</button>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Register;