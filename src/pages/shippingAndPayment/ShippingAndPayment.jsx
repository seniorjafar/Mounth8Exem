import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './ShippingAndPayment.scss';

const ShippingAndPayment = () => {
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
            allowFullScreen=""
            frameBorder={0}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0730692531147!2d69.2012376766596!3d41.28551417131297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719839644954!5m2!1sru!2s"
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    </>
  );
};

export default ShippingAndPayment;
