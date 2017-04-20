import React, { PropTypes, Component } from 'react';
import NavBar from '../navbar';
import Footer from '../footer';
import AppSelector from '../appSelector';

export default class Main extends Component {

  static get propTypes() {
    return {
      route: PropTypes.object,
      children: React.PropTypes.object,
      router: PropTypes.object,
      renderChildren: PropTypes.object,
    };
  }

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.handleResize());
  }
  handleResize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { route, ...props } = this.props;
    const { width, height } = this.state;
    const { title } = route;
    return (
      <div>
        <NavBar title={title} {...props} path={route} width={width} />
        <div style={{ minHeight: height - 60 - 110 }}>
          {React.Children.map(this.props.children, (child) => React.cloneElement(child, { height, width })) || <AppSelector router={this.props.router} width={width} height={height} />}
        </div>
        <Footer title={title} {...props} path={route} width={width} />
      </div>
    );
  }
}
