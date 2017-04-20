import React, { Component, PropTypes } from 'react';
import { Image, Col, Grid } from 'react-bootstrap';
import Colors from '../../styles';
import imgCPC from '../../img/cpc.png';

import imgSNA from '../../img/sna.png';
import imgCNC from '../../img/cnc.png';
import imgSONAMI from '../../img/mineria2.png';
import imgSOFOFA from '../../img/sofofa.png';
import imgCCHC from '../../img/cchc.png';
import imgBANCA from '../../img/banca.png';

const images = [
  {
    link: 'http://www.sna.cl/',
    image: imgSNA,
  },
  {
    link: 'http://www.cnc.cl/',
    image: imgCNC,
  },
  {
    link: 'http://www.sonami.cl/',
    image: imgSONAMI,
  },
  {
    link: 'http://www.sofofa.cl/',
    image: imgSOFOFA,
  },
  {
    link: 'http://www.cchc.cl/',
    image: imgCCHC,
  },

  {
    link: 'http://www.abif.cl/',
    image: imgBANCA,
  },
];

export default class Footer extends Component {

  static get propTypes() {
    return {
      router: PropTypes.object,
      location: PropTypes.object,
      title: PropTypes.string,
      width: PropTypes.int,
    };
  }

  constructor(props) {
    super(props);
    this.state = {

    };
    this.renderImage = this.renderImage.bind(this);
  }

  renderImage() {
    const { width } = this.props;
    if (width > 993) {
      return images.map((item, key) => (
        <a target="_blank" href={item.link} style={{ marginLeft: '2%', textDecoration: 'none' }} key={key}>
          <Image src={item.image} style={styles.images} />
        </a>
    )); } else {
      return images.map((item, key) => (
        <Col xs={4}>
          <center>
            <a target="_blank" href={item.link} style={{ textDecoration: 'none' }} key={key}>
              <Image src={item.image} style={styles.imagesResponsive} />
            </a>
          </center>
        </Col>
      ));
    }
  }

  render() {
    const { width } = this.props;
    if (width > 993) {
      return (
        <Grid style={styles.container} fluid>
          <Col xs={12} md={3} mdOffset={1}>
            <a target="_blank"href={'http://www.cpc.cl/'}>
              <Image src={imgCPC} style={styles.imagesCPC} />
            </a>
          </Col>
          <Col md={7} style={styles.renderImage}>
            {this.renderImage()}
          </Col>
        </Grid>
      );
    } else {
      return (
        <Grid style={styles.containerResponsive} fluid>
          <Col xs={12} style={{ verticalAlign: 'middle', fontSize: 11, padding: 0 }}>
            <a target="_blank" href={'http://www.cpc.cl/'}>
              <center>
                <Image src={imgCPC} style={{ marginTop: 20, marginBottom: 15, height: 50 }} />
              </center>
            </a>
          </Col>
          {this.renderImage()}
        </Grid>
      );
    }
  }
}

const styles = {
  container: {
    backgroundColor: Colors.PURPLE,
    color: 'white',
    padding: 15,
  },
  containerResponsive: {
    backgroundColor: Colors.PURPLE,
    color: 'white',
    paddingBottom: 40,
  },
  imagesCPC: {
    height: 80,
    width: 'auto',
  },
  renderImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  images: {
    marginTop: 10,
    height: 50,
    textAlign: 'center',
  },
  title: {
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: 11,
  },
  subtitle: {
    lineHeight: 1.3,
  },
  subtitleResponsive: {
    fontSize: 9,
    lineHeight: 1.3,
  },
  imagesResponsive: {
    height: 30,
    marginBottom: 10,
    marginTop: 10,
  },
};
