import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import { useTranslation } from 'react-i18next';


const Footer=()=>{
    const {t} = useTranslation();

    return(
        <div id="footer">
            <ul className="permalinks">
                <li><a href="#">{t("Home")}</a></li>
                <li><a href="#about">{t("About")}</a></li>
                <li><a href="#Portfolio">{t("Portfolio")}</a></li>
                <li><a href="#skills">{t("Skills")}</a></li>
                <li><a href="#contact">{t("Contact")}</a></li>
                
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/mahnaz.faizi.7?mibextid=ZbWKwL"><FaFacebookF/></a>
                <a href="https://instagram.com/mnz_1381?igshid=MzNlNGNkZWQ4Mg=="><FiInstagram/></a>
                <a href="https://twitter.com/mahnaz_faizi?t=1GWuN2fnDNHu9w1QH9RrNA&s=35"><IoLogoTwitter/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;{t("small_desc_footer")} </small>
            </div>
        </div>
    )
}

export default Footer;