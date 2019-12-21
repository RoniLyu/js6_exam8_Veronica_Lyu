import React, {Component} from 'react';
import axiosApi from "../../axios-api";
import Form from "../../components/UI/Form/Form";
import Spiner from "../../components/UI/Spiner/Spiner";

class EditQuote extends Component {
    state = {
        author: '',
        text: '',
        category: '',
        loading: false,
    };

    async componentDidMount() {
        const id = this.props.match.params.id;


        const response = await axiosApi.get('/quotes/' + id + '.json');

        if (response.data) {
            this.setState({
                category: response.data.category,
                author: response.data.author,
                text: response.data.text})
        }
    };

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    formSubmitHandler = async (e) => {
        e.preventDefault();
        this.setState({loading: true});

        const newQuote = {
            author: this.state.author,
            text: this.state.text,
            category: this.state.category
        };

        const id = this.props.match.params.id;

        this.setState({author: '', text: ''});

        await axiosApi.put('/quotes/' + id + '.json', newQuote);
        this.props.history.push('/');

    };

    render() {
        let form = (<Form
            formSubmit={this.formSubmitHandler}
            author={this.state.author}
            authorChange={this.inputChangeHandler}
            text={this.state.text}
            textChange={this.inputChangeHandler}

        />);

        if (this.state.loading) {
            form = <Spiner/>
        }

        return (
            <div>
                <h1>Edit Quote</h1>
                {form}
            </div>
        );
    }
}

export default EditQuote;