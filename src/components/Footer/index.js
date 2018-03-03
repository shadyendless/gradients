import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Footer = ({ gradient, navColor }) => (
    <div className="footer container">
        <a className="footer-link" href="https://github.com/shadyendless/gradients">
            <i className="fab fa-github"></i>&nbsp;&nbsp;&nbsp;View on Github
        </a>
        <a className="footer-link" href="https://www.paypal.me/imjacobf">
            <i className="fab fa-paypal"></i>&nbsp;&nbsp;&nbsp;Found This Useful?
        </a>
    </div>
);
Footer.propTypes = {
    gradient: PropTypes.string.isRequired,
    navColor: PropTypes.string.isRequired
};

export default Footer;