import React, { Component } from 'react';
import Search from '../Search';
import Advertising from '../Advertising';
import Categories from '../Categories';
import AdsList from '../AdsList';
import NotFound from '../NotFound';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import axios from 'axios';
import URL from '../../utils/url';
import token from '../../utils/token';
import MakeConfig from '../../utils/AxiosConfig';

const dataSearch = {
    announcements: [
        {
            id: 1,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 2,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 3,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 4,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 5,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 6,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
    ],
    advertisings: [
        {
            img: img1,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 1,
        },
        {
            img: img2,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 2,
        },
        {
            img: img3,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 3,
        },
        {
            img: img1,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 4,
        },
        {
            img: img2,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 5,
        },
    ],
};

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advertisings: [],
            announcements: [],
            searchValue: '',
        };
    }

    componentDidMount() {
        const url = URL + 'api/home';
        const settings = MakeConfig(token.get());
        axios
            .get(url, settings)
            .then((resp) => {
                console.log(resp);
                this.setState({
                    announcements: resp.data.announcements.map((s) => ({
                        ...s,
                        id: s.uuid,
                    })),
                    advertisings: resp.data.advertisings.map((adv) => ({
                        ...adv,
                        id: adv.uuid,
                    })),
                });
            })
            .catch((err) => console.error(err));
    }
    handleSearchChange = (e) => {
        this.setState({
            searchValue: e.target.value,
        });
    };
    handleSearchSend = (e) => {
        e.preventDefault();
        console.log('handleSearchSend', e);
    };
    handleSearchcancel = () => {
        this.setState({
            searchValue: '',
        });
    };
    render() {
        const { advertisings, announcements, searchValue } = this.state;
        return (
            <>
                <Search
                    handleSearchSend={this.handleSearchSend}
                    handleSearchChange={this.handleSearchChange}
                    searchValue={searchValue}
                ></Search>
                {!searchValue && (
                    <>
                        <Advertising
                            url="/product"
                            advertisings={dataSearch.advertisings}
                        ></Advertising>
                        <Categories></Categories>
                    </>
                )}
                <AdsList
                    title={
                        !searchValue
                            ? 'Рекомендации'
                            : `Найдено ${announcements.length} позиций:`
                    }
                    announcements={announcements}
                ></AdsList>
                {announcements.length === 0 && searchValue && (
                    <NotFound
                        title="Товар не найден"
                        desc="Спасибо за покупки с помощью EcoFoods"
                        buttonText="Вернуться на Главную"
                        button={this.handleSearchcancel}
                    ></NotFound>
                )}
            </>
        );
    }
}
