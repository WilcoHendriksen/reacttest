import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { value1: "qwerty", value2: "fd" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        const controlName = event.target.name;
        switch (controlName) {
            case "text1": this.setState({ value1: event.target.value });
                break;
            case "text2": this.setState({ value2: event.target.value });
                break;
            default: "";
        }

        console.log(event.target.value);
    }

    handleSubmit(event) {
        alert("I submitted a value of: " + this.state.value1 + " and " + this.state.value2);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text"
                        name="text1"
                        value={this.state.value1}
                        onChange={this.handleOnChange}
                    />
                </label>
                <label>
                    Name:
                    <input type="text"
                        name="text2"
                        value={this.state.value2}
                        onChange={this.handleOnChange} />
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export default Form;