import React, {Fragment} from 'react';
import {Container} from "reactstrap";
import Navigation from "./components/UI/Navigation/Navigation";
import {Route, Switch} from 'react-router-dom';
import QuotesList from "./containers/QuotesList/QuotesList";
import NewQuote from './containers/NewQuote/NewQuote'
import EditQuote from "./containers/EditQuote/EditQuote";


function App() {
  return (
      <Fragment>
          <Navigation/>
          <Container>
              <Switch>
                  <Route path='/' exact component={QuotesList} />
                  <Route path='/quotes/new' component={NewQuote} />
                  <Route path='/quotes/:id/edit' component={EditQuote} />
                  <Route render={() => <h1>Not found</h1>} />
              </Switch>
          </Container>
      </Fragment>

  );
}

export default App;
