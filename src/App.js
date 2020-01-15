import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Landing from './component/layout/landing/Landing';
import Form from './component/form/Form';
import Done from './component/done/Done';





const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/done' component={Done} />
            <Route exact path='/form' component={Form} />
          </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
