import React, {Fragment} from 'react';
import {Container} from "reactstrap";
import Navigation from "./components/UI/Navigation/Navigation";
import {Route, Switch} from 'react-router-dom';
import QuotesList from "./containers/QuotesList/QuotesList";


function App() {
  return (
      <Fragment>
          <Navigation/>
          <Container>

              <Switch>
                  <Route path='/' exact component={QuotesList} />
                  <Route path='/quotes/new' component={QuotesList} />
                  <Route render={() => <h1>Not found</h1>} />
              </Switch>
          </Container>
      </Fragment>

  );
}

export default App;
