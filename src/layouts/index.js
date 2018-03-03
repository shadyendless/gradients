import Helmet from 'react-helmet'
import tinycolor from 'tinycolor2';
import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import GradientCode from '../components/GradientCode';
import GradientHeader from '../components/GradientHeader';
import { calculateTextColor, calculateGradient, toFormatString } from '../utils';

import '../sass/main.scss';

const getInitialBackgroundColor = function () {
  const hash = location.hash;
  if (hash !== '') {
    const convertedColor = tinycolor(hash);
    if (convertedColor.getFormat()) {
      return convertedColor[toFormatString(convertedColor.getFormat())]();
    }
  }

  return tinycolor.random().toRgbString();
};

class TemplateWrapper extends Component {
  state = {
    backgroundColor: getInitialBackgroundColor()
  };

  setBackgroundColor = (color) => {
    this.setState(() => ({
      backgroundColor: color
    }));
  }

  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      if (event.which === 82) {
        const formatString = toFormatString(tinycolor(this.state.backgroundColor).getFormat());
        this.setState((prevState, props) => ({
          backgroundColor: tinycolor.random()[formatString]()
        }));
      }
    });
  }

  render() {
    const { children } = this.props;
    const { backgroundColor } = this.state;
    const navColor = calculateTextColor(backgroundColor);
    const gradient = calculateGradient(backgroundColor);

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
          backgroundColor={backgroundColor}
          navColor={navColor}
          setBackgroundColor={this.setBackgroundColor} />
        <GradientCode gradient={gradient} />
        {children()}
      </div>
    );
  }
}

export default TemplateWrapper;
