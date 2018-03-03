/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    setHeadComponents([
        <link key="nunito-preload" rel="preload" href="https://fonts.googleapis.com/css?family=Nunito:400,700,900" as="style" onLoad="this.rel='stylesheet'" />,
        <noscript key="nunito"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,700,900" /></noscript>,
        <link key="source-code-pro-preload" rel="preload" href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400" as="style" onLoad="this.rel='stylesheet'" />,
        <noscript key="source-code-pro"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400" /></noscript>
    ]);
};