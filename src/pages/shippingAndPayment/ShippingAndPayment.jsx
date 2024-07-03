import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './ShippingAndPayment.scss';

const ShippingAndPayment = () => {
  // URL карты Google Maps
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.472414241399!2d37.56295731590789!3d55.85773798058244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5379c2d1e7f6f%3A0x5e3c2b8ca5c4150!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDEwMNGBMiwg0JzQvtGB0LrQstCwLCAxMjc1NzQ!5e0!3m2!1sru!2sru!4v1625584362550!5m2!1sru!2sru";

  return (
    <>
      <div className="payment">
        <div className="container">
          <div className="df">
            <div className="payment__title">
              <span>
                <Link to={'/'}>Главная</Link>
                <MdKeyboardArrowRight />
                <p>Доставка и оплата</p>
              </span>
              <h2>Доставка и оплата</h2>
            </div>
            <div className="payment__text">
              <span>
                <h2>Доставка</h2>
                <p>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</p>
              </span>
              <span>
                <h2>Курьерская доставка</h2>
                <p>БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽. Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
              </span>
              <span>
                <h2>Самовывоз</h2>
                <p>Любой заказ можно забрать самостоятельно по адресу: г. Москва, Дмитровское шоссе д.100с2</p>
              </span>
            </div>
          </div>
        </div>
        <iframe
          src={mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта местоположения магазина"
        ></iframe>
      </div>
    </>
  );
};

export default ShippingAndPayment;
