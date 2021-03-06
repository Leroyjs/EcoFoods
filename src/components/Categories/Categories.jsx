import React, { Component } from 'react';
import Title from '../Title';
import './style.scss';

import milk from './img/milk.svg';

export default class Categories extends Component {
    render() {
        return (
            <section className="categories__wrapper">
                <Title h2="Категории" aText="Больше категорий"></Title>
                <ul className="categories">
                    <li className="categories__item categories__item_active">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Молоко</span>
                    </li>
                    <li className="categories__item ">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Чай</span>
                    </li>
                    <li className="categories__item ">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Кофе</span>
                    </li>
                    <li className="categories__item">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Мясо</span>
                    </li>
                    <li className="categories__item">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Крупа</span>
                    </li>
                    <li className="categories__item">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Трава(газон)</span>
                    </li>
                    <li className="categories__item">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Удобрение</span>
                    </li>
                </ul>
            </section>
        );
    }
}
