import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './login.css';
import { FaFacebook, FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <Header />
                </header>
                <main className="loginMain">
                    <div className="login">
                        <div className="boxNameLogin">
                            <label>Login</label>
                            <div className="registerSocial">
                                <FaFacebook />
                                <FaGoogle />
                            </div>
                        </div>
                        Preencha o formulário abaixo
                        <div className="inputLogin">
                            <FaEnvelope />
                            <input type="text" placeholder="Email..." />
                        </div>
                        <div className="inputLogin">
                            <FaLock />
                            <input type="password" placeholder="Senha..." />
                        </div>
                        <label id="forgot"><a href="/forgot">Esqueceu a senha?</a></label>
                        <button>Entrar</button>
                        <label id="register">Não é cadastrado? <a href="/register">Clique aqui</a></label>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Login;