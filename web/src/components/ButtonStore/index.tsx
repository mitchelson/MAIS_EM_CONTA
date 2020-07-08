import React from 'react';
import appStore from '../../assets/appstore.png'
import playStore from '../../assets/playstore.png'
import './styleButtonDownload.css';
const ButtonDownload = () => {
    return (
        <div className="groupbutton">
            <strong>DISPONÍVEL EM:</strong>
            <div className="groupbutton-download">
                <a href="https://apps.apple.com/"><img alt="AppStore" className="download-img" src={appStore} /></a>
                <a href="https://play.google.com/"><img alt="PlayStore" className="download-img" src={playStore} /></a>
            </div>
        </div>
    );
}
export default ButtonDownload;