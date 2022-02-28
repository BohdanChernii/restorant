import React from 'react';
import lamb from '../images/lamb.jpg';
const Card = () => {
  return (
    <div className="page">
      <header className="header">
        <p className="header__logo">LOGOS</p>
        <div className="header__input">
          <input type="text" placeholder="Введите адрес доставки" />
        </div>
      </header>
      <div className="banner">
        <p className="banner__text">Доставка блюд за 60 минут</p>
        <button className="banner__button">Ещё не пробовал?</button>
      </div>
      <div className="cards">
        <article className="card">
          <img src={lamb} alt="" className="card__image" />
          <div className="card__info">
            <h3 className="card__info-title">Ягненок</h3>
            <p className="card__info-description">
              Фаршированный гречневой кашей, курагой, апельсином и зеленым
              яблоком
            </p>
            <p className="card__info-weight card__info-description">
              Вес:225 г
            </p>
            <p className="card__info-price">200 грн</p>
          </div>
          <div className="card__basket">
            <p className="card__basket-text">В корзину</p>
          </div>
        </article>
        <article className="card">
          <img src={lamb} alt="" className="card__image" />
          <div className="card__info">
            <h3 className="card__info-title">Ягненок</h3>
            <p className="card__info-description">
              Фаршированный гречневой кашей, курагой, апельсином и зеленым
              яблоком
            </p>
            <p className="card__info-weight card__info-description">
              Вес:225 г
            </p>
            <p className="card__info-price">200 грн</p>
          </div>
          <div className="card__basket">
            <p className="card__basket-text">В корзину</p>
          </div>
        </article>
        <article className="card">
          <img src={lamb} alt="" className="card__image" />
          <div className="card__info">
            <h3 className="card__info-title">Ягненок</h3>
            <p className="card__info-description">
              Фаршированный гречневой кашей, курагой, апельсином и зеленым
              яблоком
            </p>
            <p className="card__info-weight card__info-description">
              Вес:225 г
            </p>
            <p className="card__info-price">200 грн</p>
          </div>
          <div className="card__basket">
            <p className="card__basket-text">В корзину</p>
          </div>
        </article>
        <article className="card">
          <img src={lamb} alt="" className="card__image" />
          <div className="card__info">
            <h3 className="card__info-title">Ягненок</h3>
            <p className="card__info-description">
              Фаршированный гречневой кашей, курагой, апельсином и зеленым
              яблоком
            </p>
            <p className="card__info-weight card__info-description">
              Вес:225 г
            </p>
            <p className="card__info-price">200 грн</p>
          </div>
          <div className="card__basket">
            <p className="card__basket-text">В корзину</p>
          </div>
        </article>
        <article className="card">
          <img src={lamb} alt="" className="card__image" />
          <div className="card__info">
            <h3 className="card__info-title">Ягненок</h3>
            <p className="card__info-description">
              Фаршированный гречневой кашей, курагой, апельсином и зеленым
              яблоком
            </p>
            <p className="card__info-weight card__info-description">
              Вес:225 г
            </p>
            <p className="card__info-price">200 грн</p>
          </div>
          <div className="card__basket">
            <p className="card__basket-text">В корзину</p>
          </div>
        </article>
      </div>
    </div>
  );
};
export default Card;
