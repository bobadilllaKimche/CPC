import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Main from './components/main';
import Platform from './components/platform';

// TODO: Arreglar warnings #warnings
// TODO: minheight responsive

const Routing = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} title="CPC">
      <Route path="plataforma" component={Platform} />
      <Route path="estadoDelArte" component={Platform} />
    </Route>
  </Router>
);

ReactDOM.render(Routing, document.getElementById('root'));
