import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';

const opts = {
  height: '500',
  width: '850',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export default class ModalYoutube extends Component {

  static get propTypes() {
    return {
      show: PropTypes.bool,
      close: PropTypes.func,
      onEndYoutube: PropTypes.func,
    };
  }

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.close}
        bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title>Aprende a usar esta Plataforma Interactiva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube
            videoId="nXsb-NvDk_I"
            opts={opts}
            onEnd={() => this.props.onEndYoutube()}
          />
        </Modal.Body>
      </Modal>
    );
  }
}
