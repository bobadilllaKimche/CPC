import React, { Component } from 'react';

export default class MinTemplate extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={styles.container}>
        <p>Hello world</p>
      </div>
    );
  }
}

const styles = {
  container: {

  },
};
