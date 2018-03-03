import Helmet from 'react-helmet'
import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import GradientCode from '../components/GradientCode';
import GradientHeader from '../components/GradientHeader';
import { calculateTextColor, calculateGradient } from '../utils';

import '../sass/main.scss';

class TemplateWrapper extends Component {
  state = {
    backgroundColor: 'rgb(255, 0, 0)'
  };

  setBackgroundColor = (color) => {
    this.setState(() => ({
      backgroundColor: color
    }));
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
