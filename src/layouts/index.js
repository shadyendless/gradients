import Helmet from 'react-helmet'
import React, { Component } from 'react'
import { calculateTextColor, calculateGradient } from '../utils';
import Navigation from '../components/Navigation';

import '../sass/main.scss';

class TemplateWrapper extends Component {
  state = {
    backgroundColor: 'rgba(255, 0, 0, 1.0)'
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
        <div className="gradient-display" style={{ background: gradient }}>
          <h1 className="input-header" style={{ color: navColor }}>Edit Color</h1>
          <input className="color-input" style={{ color: navColor }} type="text" value={backgroundColor} onChange={(event) => this.setBackgroundColor(event.target.value)} />
        </div>
        {children()}
      </div>
    );
  }
}

export default TemplateWrapper;
