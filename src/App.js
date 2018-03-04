import tinycolor from 'tinycolor2';
import { Helmet } from 'react-helmet';
import InUse from './components/InUse';
import React, { Component } from 'react'
import Footer from './components/Footer';
import CopyBox from './components/CopyBox';
import Navigation from './components/Navigation';
import FormatChanger from './components/FormatChanger';
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

  changeFormat = (newFormat) => {
    const formatMethod = `to${newFormat[0].toUpperCase()}${newFormat.substr(1)}String`;
    this.setBackgroundColor(
      tinycolor(this.state.backgroundColor)[formatMethod]()
    );
  };

  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      if (event.which === 82) {
        this.randomizeBackgroundColor();
      }
    });

    if (window.location.search !== '') {
      this.setBackgroundColor(getInitialBackgroundColor(decodeURIComponent(window.location.search.substr(1))));
    }
  };

  render() {
    const { backgroundColor } = this.state;
    const navColor = calculateTextColor(backgroundColor);
    const gradient = calculateGradient(backgroundColor);
    const gradientStart = tinycolor(backgroundColor);
    const gradientEnd = getGradientEnd(backgroundColor);

    const contentImage = `http://do.jacob-foster.com/gradient?start=${gradientStart.toHex()}&end=${gradientEnd.toHex()}`;
    const contentTitle = `#${gradientStart.toHex().toUpperCase()} to #${gradientEnd.toHex().toUpperCase()}`;
    const contentUrl = `https://gradients.jacob-foster.com/?${backgroundColor.replace(/\s/g, '')}`;

    return (
      <div class="site-wrapper is-flex flex-column">
        <Helmet>
          <meta property="og:url" content={contentUrl} />
          <meta property="og:title" content={contentTitle} />
          <meta property="og:description" content="Generated with Gradients by Jacob Foster" />
          <meta property="og:image" content={contentImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1200" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@im_jacobf" />
          <meta name="twitter:title" content={contentTitle} />
          <meta name="twitter:description" content="Generated with Gradients by Jacob Foster" />
          <meta name="twitter:image" content={contentImage} />
        </Helmet>
        <Navigation fontColor={navColor} />
        <GradientHeader gradient={gradient}
          backgroundColor={backgroundColor}
          navColor={navColor}
          setBackgroundColor={this.setBackgroundColor}
          randomizeBackgroundColor={this.randomizeBackgroundColor} />
        <FormatChanger originalFormat={gradientStart.getFormat()} changeFormat={this.changeFormat} />
        <CopyBox copyText={gradient} tooltipText="Code Copied!" />
        <h1 class="header">In Use</h1>
        <InUse gradient={gradient} navColor={navColor} />
        <Footer gradient={gradient} navColor={navColor} />
      </div >
    );
  }
}

export default App;
