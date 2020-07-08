import React from 'react';
import logo from '../../assets/logo.svg';
import { FaUser } from 'react-icons/fa';
import './styleHeader.css';
const Header = () => {
    return (
        <div className="menu">
            <div><a href="/"><img src={logo} alt="Mais em Conta" /></a></div>
            <div className="left-menu">
                <a href="/" className="active-item">Home</a>
                <a href="/sobre" className="item">Sobre</a>
                <a href="/ajuda" className="item">Ajuda</a>
                <a href="/mercado" className="item">Mercados</a>
                <a href="/anuncie" className="item">Anuncie Aqui</a>
            </div>
            <div className="right-menu">
                <a href="/login">
                    <span><FaUser style={{ fontSize: "40px" }} /></span>
                    <strong>Faça seu Login ou<br />Cadastre-se</strong>
                </a>
            </div>
        </div>
    );
}
export default Header;