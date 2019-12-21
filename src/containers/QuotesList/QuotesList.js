import React, {Component} from 'react';
import axiosApi from "../../axios-api";
import {Card, CardBody, CardTitle, CardText, Button, ListGroup, ListGroupItem} from 'reactstrap'
import {CATEGORIES} from "../../constants";
import {NavLink, NavLink as RouterNavLink, Link} from "react-router-dom";


class QuotesList extends Component {
    state = {
        quotes: [],
    };

    request = async () => {
        let url = '/quotes.json';

        if (this.props.match.params.name) {
            url += `?orderBy="category"&equalTo="${this.props.match.params.name}`;
        }

        const response = await axiosApi(url);
        if (response.data) {
            this.setState({quotes: response.data});
        }
    };

    async componentDidMount() {
        this.request()
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            return this.request()
        }
    };

    deleteQ = async (e, id) => {
        await axiosApi.delete('/quotes/' + id + '.json');
        this.props.history.push('/');
        const response = await axiosApi.get('/quotes.json');

        if (response.data) {
            this.setState({quotes: response.data});
        }
};


    render() {
        return (
            <div>
                <NavLink tag={RouterNavLink} to='/'>All</NavLink>
                <ListGroup>
                    {CATEGORIES.map(c => (
                        <ListGroupItem key={c} value={c}>
                            <NavLink to={'/quotes/' + c}>{c}</NavLink>
                        </ListGroupItem>
                    ))}
                </ListGroup>

               {Object.keys(this.state.quotes).map(q => (
                   <Card key={q} className="mt-3 mb-3">
                       <CardBody>
                           <CardTitle>{this.state.quotes[q].author}</CardTitle>
                           <CardText>{this.state.quotes[q].text}</CardText>
                           <Button className="mr-3" color="danger"
                                onClick={this.deleteQ(e, q)}
                           >x</Button>
                           <Button color="success"
                                tag={Link} to {'/quotes/' + q + "/edit"}
                           >Edit</Button>
                       </CardBody>
                   </Card>
               ))}
            </div>
        );
    }
}

export default QuotesList;