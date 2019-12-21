import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import axiosApi from "../../axios-api";

class NewQuote extends Component {
    state = {
        author: '',
        text: '',
    };

    inputChangeHandler = e => this.setState({[e.target.name]:  e.targer.value});

     formSubmitHandler = async (e) => {
        e.preventDefault();

        const newQuote = {
            author: this.state.author,
            text: this.state.text
        };

        await axiosApi.post('/quotes.json', newQuote);
        this.props.history.push('/');
    };


    render() {
        return (
            <div>
                <h1>New Quote</h1>
                <Form>
                    <FormGroup>
                        <Label for="author">Author: </Label>
                        <Input type="text" name="author" id="author" placeholder="Enter the name of author" />
                    <FormGroup/>
                    <FormGroup>
                        <Label for="text">Text: </Label>
                        <Input type="textarea" name="text" id="text" placeholder="Enter a new quote" />
                    <FormGroup/>
                    <Button>Save</Button>
                </Form>
            </div>
        );
    }
}

export default NewQuote;