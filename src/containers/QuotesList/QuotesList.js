import React, {Component} from 'react';
import axiosApi from "../../axios-api";
import {Card, CardBody, CardTitle, CardText, Button} from 'reactstrap'

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
               {Object.keys(this.state.quotes).map(id => (
                   <Card className="mt-3 mb-3">
                       <CardBody>
                           <CardTitle>{this.state.quotes[id].author}</CardTitle>
                           <CardText>{this.state.quotes[id].text}</CardText>
                           <Button className="mr-3" color="danger">x</Button>
                           <Button color="success">Edit</Button>
                       </CardBody>
                   </Card>
               ))}
            </div>
        );
    }
}

export default QuotesList;