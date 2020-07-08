import React from 'react';
import logo from '../../assets/logo.svg';
import ButtonStore from '../../components/ButtonStore';
import './styleFooter.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaFacebookF, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer">
            <div className="left-footer">
                <div className="logo">
                    <img src={logo} alt="Mais em Conta" />
                    <h3>Mais em Conta</h3>
                </div>
                <p>© Mais em Conta™, 2020. Todos os direitos reservados.</p>
            </div>
            <div className="center-footer">
                <ButtonStore />
            </div>
            <div className="right-footer">
                <h3>Redes Sociais</h3>
                <div className="socials">
                    <a href="https://facebook.com"><FaFacebook /></a>
                    <a href="https://instagram.com"><FaInstagram /></a>
                    <a href="https://web.whatsapp.com"><FaWhatsapp /></a>
                </div>
            </div>
        </div>
    );
}
export default Footer;