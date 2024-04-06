import React from 'react';
import './Contact.css';
import 'leaflet/dist/leaflet.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';



const Contact = () => {
  const { t } = useTranslation();
  const position = [34.336030, 69.187530];
  return (
    <section id="contact">
      <h5 data-aos="fade-right" data-aos-delay="600" data-aos-once="true">{t("Get_in_touch")}</h5>
      <h2 data-aos="fade-left" data-aos-delay="1200" data-aos-once="true">{t("contact_me")}</h2>

      <div className="container contact__container  ">
        <div className="contact__options">
          <article className="contact__option" data-aos="flip-up" data-aos-delay="1200" data-aos-once="true">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>{t("email_text")}</h4>
            <h5>{t("email")}</h5>
            <a href="mailto:Mahnazfaizi1398@gmail.com" target="_blank">{t("send_message")}</a>
          </article>
          <article className="contact__option" data-aos="fade-right" data-aos-delay="1600" data-aos-once="true">
            <RiMessengerLine className="contact__option-icon" />
            <h4>{t("message")}</h4>
            <h5>{t("fullname")}</h5>
            <a href="https://www.facebook.com/mahnaz.faizi.7?mibextid=ZbWKwL" target="_blank">{t("send_message")}</a>
          </article>
          <article className="contact__option" data-aos="flip-down" data-aos-delay="2000" data-aos-once="true">
            <BsWhatsapp className="contact__option-icon" />
            <h4>{t("whatsapp")}</h4>
            <h5>{t("number")}</h5>
            <a href="https://wa.me/qr/M4HE4XY2FVN3I1" target="_blank">{t("send_message")}</a>
          </article>
        </div>
        <form action="" className='form__container'>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea type="message" name="message" placeholder="Your Message" required ></textarea>
          <button type="submite" className="btn btn__contact">{t("send_message")}</button>
        </form>
        <div className="contact-page" data-aos="slide-up" data-aos-delay="2000" data-aos-once="true">
          <MapContainer
            center={position} // Set your desired coordinates here
            zoom={13} // Set the initial zoom level
            scrollWeelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Provide a tile layer source
              attribution='Map data &copy; <a href="https:www.openstreetmap.org/"> openStreetMap</a> contributors' />

            <Marker position={position}>
              <Popup>
                {t("exact_location")}
              </Popup>
            </Marker>
          </MapContainer>
        </div>

      </div>
    </section>
  );



}

export default Contact;