import Helmet from 'react-helmet'
import tinycolor from 'tinycolor2';
import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import GradientCode from '../components/GradientCode';
import GradientHeader from '../components/GradientHeader';
import { calculateTextColor, calculateGradient, getInitialBackgroundColor, getRandomColor, toFormatString } from '../utils';

import '../sass/main.scss';

class TemplateWrapper extends Component {
  state = {
    backgroundColor: null
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

  componentDidMount = () => {
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
    let { backgroundColor } = this.state;

    if (backgroundColor === null) {
      this.setBackgroundColor(getRandomColor());
    }

    const navColor = calculateTextColor(backgroundColor || 'rgb(255, 255, 255)');
    const gradient = calculateGradient(backgroundColor || 'rgb(255, 255, 255)');

    return (
      <div className="site-wrapper is-flex flex-column">
        <Helmet
          title="Gradients by Jacob Foster"
          meta={[
            { name: 'description', content: 'Create, share, and discover great looking gradients to use in your projects.' },
            { name: 'keywords', content: 'gradients, generator, good, modern, share, save' },
          ]}
        />
        <Navigation fontColor={navColor} />
        <GradientHeader gradient={gradient}
          backgroundColor={backgroundColor || 'rgb(255, 255, 255)'}
          navColor={navColor}
          setBackgroundColor={this.setBackgroundColor}
          randomizeBackgroundColor={this.randomizeBackgroundColor} />
        <GradientCode gradient={gradient} />
        {children()}
      </div>
    );
  }
}

export default TemplateWrapper;
