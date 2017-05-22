import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import Footer from './components/footer';
import AppSelector from './components/appSelector';
import ModalYoutube from './components/youtube';
import ModalFormando from './components/modalFormando';
import ModalFortaleciendo from './components/modalFortaleciendo';
import ModalCapacitar from './components/modalCapacitar';
import ModalExperiencia from './components/modalExperiencia';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-97048045-01', {
  debug: true,
});

import Platform from './components/platform';

// TODO: Arreglar warnings #warnings

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      openVideo: false,
      openExperiencia: false,
      openCapacitar: false,
      openFormando: false,
      openFortaleciendo: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.handleResize());
  }
  handleResize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { openVideo, openFormando, openFortaleciendo, openCapacitar, openExperiencia } = this.state;
    return (
      <Router onUpdate={logPageView}>
        <div>
          <NavBar
            {...this.props}
            {...this.state}
            openVideo={() => this.setState({ openVideo: true })}
            openFormando={() => this.setState({ openFormando: true })}
            openExperiencia={() => this.setState({ openExperiencia: true })}
            openFortaleciendo={() => this.setState({ openFortaleciendo: true })}
            openCapacitar={() => this.setState({ openCapacitar: true })}
          />
          <Route
            exact
            path="/"
            render={props =>
              <AppSelector
                {...props}
                {...this.state}
                openVideo={() => this.setState({ openVideo: true })}
                openFormando={() => this.setState({ openFormando: true })}
                openExperiencia={() => this.setState({ openExperiencia: true })}
                openFortaleciendo={() => this.setState({ openFortaleciendo: true })}
                openCapacitar={() => this.setState({ openCapacitar: true })}
              />
            }
          />
          <Route exact path="/plataforma" render={props => <Platform {...props} {...this.state} />} />
          <Footer {...this.props} {...this.state} />
          <ModalYoutube show={openVideo} close={() => this.setState({ openVideo: false })} />
          <ModalFormando show={openFormando} close={() => this.setState({ openFormando: false })} />
          <ModalFortaleciendo show={openFortaleciendo} close={() => this.setState({ openFortaleciendo: false })} />
          <ModalCapacitar show={openCapacitar} close={() => this.setState({ openCapacitar: false })} />
          <ModalExperiencia {...this.props} {...this.state} show={openExperiencia} close={() => this.setState({ openExperiencia: false })} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
