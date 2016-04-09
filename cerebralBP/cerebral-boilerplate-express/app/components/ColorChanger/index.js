import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import Title from './Title';

@Cerebral({
  title: ['example', 'title'],
  color: ['example', 'color']
})
class Home extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    const signals = this.props.signals.example;

    return (
      <div>
        <Title id="displayedColor" color={this.props.color}>{this.props.title}</Title>
        <button onClick={() => signals.colorChanged({color: 'yellow'})}>Yellow</button>
        {' | '}
        <button onClick={() => signals.colorChanged({color: 'blue'})}>Blue</button>
        {' | '}
        <button onClick={() => signals.randomColorClicked()}>Random</button>
        {' | '}
        <button onClick={() => this.alertColor()}>Click Me</button>
      </div>
    );
  }
  alertColor(){
    alert(document.getElementById('displayedColor').innerHTML);
  }
}

export default Home;
