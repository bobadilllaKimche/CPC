import React, { PropTypes, Component } from 'react';
import { Col, Nav, NavItem, Navbar, Collapse, Image } from 'react-bootstrap';
import pdf from '../../FTP-CPC.pdf';

import ModalYoutube from '../youtube';

import imgLogo from '../../img/logo.png';

export default class Main extends Component {

  static get propTypes() {
    return {
      router: PropTypes.object,
      location: PropTypes.object,
      title: PropTypes.string,
      width: PropTypes.number,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      openVideo: false,
    };
  }

  render() {
    const { location, width } = this.props;
    const { openVideo } = this.state;
    return (
      <Navbar collapseOnSelect fixedTop fluid>
        <Col sm={10} smOffset={1}>
          <Navbar.Header style={{ cursor: 'pointer' }} >
            <Image src={imgLogo} style={styles.logoSmall} onClick={() => this.props.router.push('/')} />
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem onClick={() => this.props.router.push('plataforma')} active={location.pathname === 'plataforma'}>Liceos de Educación Técnica Profesional (ETP)</NavItem>
              <NavItem onClick={() => window.open(pdf)}>Iniciativas del Sector Privado</NavItem>
            </Nav>
            <Nav pullRight>
              {width > 867 && <span style={styles.tutorial} />}
              <NavItem onClick={() => this.setState({ openVideo: true })} >
                Tutorial
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Col>
        <ModalYoutube show={openVideo} close={() => this.setState({ openVideo: false })} />
      </Navbar>
    );
  }
}

const styles = {
  logoSmall: {
    height: 48,
    marginTop: 6,
    paddingRight: 10,
  },
  tutorial: {
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
    borderLeftColor: '#EEEEEE',
    height: '70%',
    top: '15%',
    position: 'absolute',
  },
};
