import Helmet from 'react-helmet'
import React, { Fragment } from 'react'

import '../sass/main.scss';

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet
      title="Gradients by Jacob Foster"
      meta={[
        { name: 'description', content: 'Create, share, and discover great looking gradients to use in your projects.' },
        { name: 'keywords', content: 'gradients, generator, good, modern, share, save' },
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA=Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ]}
    />
    {children()}
  </Fragment>
);

export default TemplateWrapper;
