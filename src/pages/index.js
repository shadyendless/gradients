import tinycolor from 'tinycolor2';
import React, { Component } from 'react'
import InUse from '../components/InUse';
import Navigation from '../components/Navigation';
import GradientCode from '../components/GradientCode';
import GradientHeader from '../components/GradientHeader';
import { calculateTextColor, calculateGradient, getInitialBackgroundColor, getRandomColor, toFormatString } from '../utils';

class IndexPage extends Component {
  state = {
    backgroundColor: getRandomColor()
  };

  setBackgroundColor = (color) => {
    this.setState(() => ({
      backgroundColor: color
    }));
  };

  randomizeBackgroundColor = () => {
    const formatString = toFormatString(tinycolor(this.state.backgroundColor).getFormat());
    this.setState((prevState, props) => ({
      backgroundColor: tinycolor.random()[formatString]()
    }));
  };

  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      if (event.which === 82) {
        this.randomizeBackgroundColor();
      }
    });

    if (window.location.hash !== '')
      this.setBackgroundColor(getInitialBackgroundColor(window.location.hash));
  };

  render() {
    const { children } = this.props;
    const { backgroundColor } = this.state;
    const navColor = calculateTextColor(backgroundColor);
    const gradient = calculateGradient(backgroundColor);

    return (
      <div className="site-wrapper is-flex flex-column">
        <Navigation fontColor={navColor} />
        <GradientHeader gradient={gradient}
          backgroundColor={backgroundColor}
          navColor={navColor}
          setBackgroundColor={this.setBackgroundColor}
          randomizeBackgroundColor={this.randomizeBackgroundColor} />
        <GradientCode gradient={gradient} />
        <InUse gradient={gradient} navColor={navColor} />
      </div>
    );
  }
}

export default IndexPage
