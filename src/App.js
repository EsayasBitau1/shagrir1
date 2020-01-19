import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Notification from './component/notifiction/Notifiction'
import Done from './component/done/Done'
import Form from './component/form/Form'





const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Notification} />
        <Route exact path='/form' component={Form} />
        <Route exact path='/done' component={Done} />

      </Fragment>
    </Router>
  );
}

export default App;
