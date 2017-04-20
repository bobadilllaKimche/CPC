import React, { PropTypes, Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import Img1 from './img/1.png';
import Img2 from './img/2.png';
import Img3 from './img/3.png';
import Img4 from './img/4.png';
import Img5 from './img/5.png';
import Img6 from './img/6.png';

export default class TableView extends Component {

  static get propTypes() {
    return {
      router: PropTypes.object,
      location: PropTypes.object,
      title: PropTypes.string,
      listEducation: PropTypes.array,
      hoverItem: PropTypes.func,
      clickedItem: PropTypes.func,
      height: PropTypes.int,
      width: PropTypes.int,
    };
  }

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      index: -1,
    };
  }

  selectIcon(type) {
    if (type === 0) return <Image src={Img1} style={styles.image} />;
    else if (type === 1) return <Image src={Img1} style={styles.image} />;
    else if (type === 2) return <Image src={Img2} style={styles.image} />;
    else if (type === 3) return <Image src={Img3} style={styles.image} />;
    else if (type === 4) return <Image src={Img4} style={styles.image} />;
    else if (type === 5) return <Image src={Img5} style={styles.image} />;
    else if (type === 6) return <Image src={Img6} style={styles.image} />;
    else return null;
  }

  renderItem(key, index) {
    const style = this.state.hover === key ? styles.hover : index % 2 ? styles.row1 : styles.row2;
    return (
      <Row
        style={style}
        key={key.id}
        onMouseEnter={() => {
          this.setState({ hover: key });
          this.props.hoverItem(key.id);
        }}
        onClick={() => this.props.clickedItem(key.id)}
      >
        <Col xs={2}>
          {this.selectIcon(key.tipo)}
        </Col>
        <Col xs={6}>
          <p style={{ fontWeight: 'bold', marginTop: 5 }}>{key.nombre}</p>
          <p>{key.direccion}</p>
        </Col>
        <Col xs={4}>
          {key.ImagenLogo === '' ? null : <Image src={key.ImagenLogo} style={{ height: 60 }} />}
        </Col>
      </Row>
    );
  }

  render() {
    const { listEducation, height, width } = this.props;
    const list = {
      overflowY: 'scroll',
      overflowX: 'hidden',
      maxHeight: width > 993 ? height - (146 + 20 + 170 + 30) : height * 0.6,
    };
    if (width > 993) {
      return (
        <Col xs={3} xsPull={1} style={styles.container} className="animated fadeInRight">
          <h4 style={{ paddingLeft: 15 }} >CENTRO EDUCACIONALES</h4>
          {listEducation.length > 0 ?
            <div style={list}>
              {listEducation.map((key, index) => this.renderItem(key, index))}
            </div>
            :
            <div>
              <hr />
              Tu búsqueda no ha entregado resultados
            </div>
          }
        </Col>
      );
    } else {
      return (
        <Col xs={12} style={{ padding: 0 }}>
          <h4 style={{ paddingLeft: 15, color: '#fafafb' }} >CENTRO EDUCACIONALES</h4>
          {listEducation.length > 0 ?
            <div style={list}>
              {listEducation.map((key, index) => this.renderItem(key, index))}
            </div>
            :
            <div>
              <hr />
              <p style={{ color: '#fafafb', paddingLeft: 15 }}>Tu búsqueda no ha entregado resultados</p>
              <hr />
            </div>
          }
        </Col>
      );
    }
  }
}

const styles = {
  container: {
    backgroundColor: '#ffffff',
    position: 'fixed',
    top: 146,
    zIndex: 5,
    borderRadius: 5,
    padding: 0,
    alignItems: 'center',
    boxShadow: '3px 3px 3px #888888',
  },
  row1: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    textAlign: 'center',
    margin: 0,
  },
  row2: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#dbdbdb',
    margin: 0,
  },
  hover: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#a9a9b7',
    margin: 0,
  },
  image: {
    height: 30,
  },
};
