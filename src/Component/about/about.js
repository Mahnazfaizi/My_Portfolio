import React from 'react';
import './about.css';
import ME from '../../assets/images/My.jpg'
import { GiTrophyCup } from 'react-icons/gi';
import { PiCertificate } from 'react-icons/pi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import CV from '../../assets/images/CV.pdf';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';



const About = () => {
    const { t } = useTranslation();
    return (
        <section id="about">
            <h5 data-aos="fade-right" data-aos-delay="800">{t("get_to_know_me")}</h5>
            <h2 data-aos="fade-left" data-aos-delay="1200">{t("about_me_page")}</h2>

            <div className="container about__container ">
                <div className="about__me ">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card" data-aos="fade-right" data-aos-delay="2000" data-aos-once="true">
                            <GiTrophyCup className="about__icon" />
                            <h5>{t("awards_1_title")}</h5>
                            <small>{t("award_1_number")}<br />({t("award_1_year")})</small>
                        </article>

                        <article className="about__card " data-aos="fade-up" data-aos-delay="2300" data-aos-once="true">
                            <PiCertificate className="about__icon" />
                            <h5>{t("Certificate_1_title")}</h5>
                            <small>{t("Certificate_1_number")} <br /> ({t("Certificate_1_year")}) </small>
                        </article>

                        <article className="about__card " data-aos="fade-down" data-aos-delay="2700" data-aos-once="true">
                            <AiFillSafetyCertificate className="about__icon" />
                            <h5>{t("achievements")}</h5>
                            <small>{t("achievements_desc")}<br /> ({t("achievements_year")})<br />
                            </small>

                        </article>
                    </div>
                    <p id="pragraph" data-aos="fade-left" data-aos-delay="2000" data-aos-once="true" >{t("about_me_description")}</p>

                    <a href={CV} download className="btn">{t("Download_CV")}</a>
                </div>
            </div>
        </section>
    )
}

export default About;