import tinycolor from 'tinycolor2';
import { Helmet } from 'react-helmet';
import InUse from './components/InUse';
import Footer from './components/Footer';
import React, { Component } from 'react'
import CopyBox from './components/CopyBox';
import Navigation from './components/Navigation';
import GradientHeader from './components/GradientHeader';
import { calculateTextColor, calculateGradient, getGradientEnd, getInitialBackgroundColor, toFormatString } from './utils';

class App extends Component {
  state = {
    backgroundColor: tinycolor.random().toRgbString()
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

    if (window.location.hash !== '') {
      this.setBackgroundColor(getInitialBackgroundColor(window.location.hash));
    }
  };

  render() {
    const { backgroundColor } = this.state;
    const navColor = calculateTextColor(backgroundColor);
    const gradient = calculateGradient(backgroundColor);
    const gradientStart = tinycolor(backgroundColor).toHex();
    const gradientEnd = getGradientEnd(backgroundColor).toHex();

    const content = `http://do.jacob-foster.com/gradient?start=${gradientStart}&end=${gradientEnd}`;

    return (
      <div class="site-wrapper is-flex flex-column">
        <Helmet>
          <meta property="og:image" content={content} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1200" />
        </Helmet>
        <Navigation fontColor={navColor} />
        <GradientHeader gradient={gradient}
          backgroundColor={backgroundColor}
          navColor={navColor}
          setBackgroundColor={this.setBackgroundColor}
          randomizeBackgroundColor={this.randomizeBackgroundColor} />
        <CopyBox copyText={gradient} tooltipText="Code Copied!" />
        <h1 class="header">In Use</h1>
        <InUse gradient={gradient} navColor={navColor} />
        <Footer gradient={gradient} navColor={navColor} />
      </div >
    );
  }
}

export default App;
