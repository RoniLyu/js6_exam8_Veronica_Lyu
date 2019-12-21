import React from 'react';
import {CATEGORIES} from "../../../constants";
import {Button, FormGroup, Input, Label} from "reactstrap";

const Form = (props) => {
    return (
        <Form onSubmit={props.formSubmit}>
            <FormGroup>
                <Label for="author">Author: </Label>
                <Input type="text" name="author" id="author" placeholder="Enter the name of author"
                       value={props.author}
                       onChange={props.authorChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="text">Text: </Label>
                <Input type="text" name="text" id="text" placeholder="Enter a new quote"
                       value={props.text}
                       onChange={props.textChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="category">Select category</Label>
                <Input type="select" name="category" id="category"
                       value={props.category}
                       onChange={props.categoryChange}
                >
                    {CATEGORIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </Input>
            </FormGroup>
            <Button color="warning">Save</Button>
        </Form>
    );
};

export default Form;