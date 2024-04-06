
import React from 'react';
import './header.css';
import ME from '../../assets/images/ME.png'
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Header = () => {
    const { t } = useTranslation();
    return (

        <section id="header">
            <h5 data-aos="fade-right" data-aos-delay="1000" data-aos-once="false">{t("greeting")}</h5>
            <h2 data-aos="fade-left" data-aos-delay="2000">{t("my_portfolio")}</h2>
            <div className="container header__container">
                <div className="header__me">
                    <div className="header__me-image" data-aos="fade-in" data-aos-delay="1500" data-aos-once="true">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="header__content">
                    <div className='header__p'>
                        <h3>
                            <span data-aos="fade-down" data-aos-delay="1500" data-aos-once="true">{t("name")}</span>
                        </h3>
                        <h2 data-aos="fade-down" data-aos-delay="2500" data-aos-once="true">{t("job")}</h2>
                    </div>

                    <div className='header__btn'>
                        <a href='#about' className="btn" data-aos="fade-in" data-aos-delay="3000" data-aos-once="true">{t('about_me')}</a>
                        <a href="#contact" className="btn btn-primary" data-aos="fade-in" data-aos-delay="3000" data-aos-once="true">{t('lets_talk')}</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Header;