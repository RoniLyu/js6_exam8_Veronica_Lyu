import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import axiosApi from "../../axios-api";
import {CATEGORIES} from "../../constants";

class NewQuote extends Component {
    state = {
        author: '',
        text: '',
        category: CATEGORIES[0],
    };

    inputChangeHandler = e => this.setState({[e.target.name]:  e.target.value});

     formSubmitHandler = async (e) => {
        e.preventDefault();

        const newQuote = {
            author: this.state.author,
            text: this.state.text,
            category: this.state.category,
        };

        await axiosApi.post('/quotes.json', newQuote);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>New Quote</h1>
                <Form onSubmit={this.formSubmitHandler}>
                    <FormGroup>
                        <Label for="author">Author: </Label>
                        <Input type="text" name="author" id="author" placeholder="Enter the name of author"
                               value={this.state.author}
                               onChange={this.inputChangeHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Text: </Label>
                        <Input type="text" name="text" id="text" placeholder="Enter a new quote"
                               value={this.state.text}
                               onChange={this.inputChangeHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Select category</Label>
                        <Input type="select" name="category" id="category"
                               value={this.state.category}
                               onChange={this.inputChangeHandler}
                        >
                            {CATEGORIES.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        )
    }
}

export default NewQuote;