import React, { useEffect } from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/images/photo1.PNG';
import IMG2 from '../../assets/images/photo2.PNG';
import IMG3 from '../../assets/images/photo3.PNG';
import IMG4 from '../../assets/images/photo4.PNG';
import IMG5 from '../../assets/images/photo5.PNG';
import IMG6 from '../../assets/images/photo6.PNG';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';





const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  const { t } = useTranslation();


  const data = [
    {
      id: 0,
      image: IMG1,
      title: t('projects.0.title'),
      github: 'https://github.com/Mahnazfaizi/Dice-Game',


    },

    {
      id: 1,
      image: IMG2,
      title: t('projects.1.title'),
      github: 'https://github.com/Mahnazfaizi/React-Website',


    },
    {
      id: 2,
      image: IMG3,
      title: t('projects.2.title'),
      github: 'https://github.com/Mahnazfaizi/Simon-Game',


    },
    {
      id: 3,
      image: IMG4,
      title: t('projects.3.title'),
      github: 'https://github.com/Mahnazfaizi/Bootstrap-Service-Project',


    },
    {
      id: 4,
      image: IMG5,
      title: t('projects.4.title'),
      github: 'https://github.com/Mahnazfaizi/PHP-Crud-App',


    },
    {
      id: 5,
      image: IMG6,
      title: t('projects.5.title'),
      github: 'https://github.com/Mahnazfaizi/Watch-Shop-Website',


    },
  ]
  return (

    <section id="Portfolio">
      <h5>{t("my_works")}</h5>
      <h2>{t("portfolio")}</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className="portfolio__item" data-aos="fade-down" data-aos-delay="1000" data-aos-once="true" >
                <div className="portfolio__item-image" >
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {/* <a href={github} className="btn" target='_blank'>Github</a> */}
                  <a href={github} className="btn btn-primary" target='_blank'>{t("github")}</a>
                </div>

              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;