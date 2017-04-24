import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-97048045-01', {
  debug: true,
});

import Main from './components/main';
import Platform from './components/platform';

// TODO: Arreglar warnings #warnings
// TODO: minheight responsive

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}


const Routing = (
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path="/" component={Main} title="CPC">
      <Route path="plataforma" component={Platform} />
      <Route path="estadoDelArte" component={Platform} />
    </Route>
  </Router>
);

ReactDOM.render(Routing, document.getElementById('root'));
