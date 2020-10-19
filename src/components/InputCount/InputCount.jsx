import React, { Component } from 'react';
import './style.scss';

export default class InputCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }
    handleButtonClick(isPlus) {
        const { value } = this.state;
        if (isPlus)
            this.setState({
                value: value + 1,
            });
        if (!isPlus) {
            if (value > 1)
                this.setState({
                    value: value - 1,
                });
        }
    }
    handleChange = (e) => {
        this.setState({ value: +e.target.value });
    };
    render() {
        const { value } = this.state;
        return (
            <div className="input-count">
                <button
                    onClick={() => this.handleButtonClick(false)}
                    className="input-count__button input-count__button_left"
                >
                    —
                </button>
                <input
                    onChange={(e) => this.handleChange(e)}
                    type="number"
                    value={value}
                    className="input-count__input"
                />
                <button
                    onClick={() => this.handleButtonClick(true)}
                    className="input-count__button input-count__button_right"
                >
                    +
                </button>
            </div>
        );
    }
}
