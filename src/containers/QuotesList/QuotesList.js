import React, {Component} from 'react';
import axiosApi from "../../axios-api";

class QuotesList extends Component {
    state = {
        quotes: [],
    };


    async componentDidMount() {
        const response = await axiosApi.get('/quotes.json');

        if (response.data) {
            this.setState({quotes: response.data})
        }
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default QuotesList;