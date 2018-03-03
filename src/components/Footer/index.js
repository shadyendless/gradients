import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Footer = ({ gradient, navColor }) => (
    <Fragment>
        <div className="footer container">
            <a className="footer-link" href="https://github.com/shadyendless/gradients">
                <i className="fab fa-github"></i>&nbsp;&nbsp;&nbsp;View on Github
            </a>
        </div>
        <div className="notice">
            Based on <a href="https://medium.com/the-mvp/finally-a-definitive-way-to-make-gradients-beautiful-6b27af88f5f">this article</a> by <a href="https://twitter.com/renebrandel?lang=en">@renebrandel</a>.
        </div>
    </Fragment>
);
Footer.propTypes = {
    gradient: PropTypes.string.isRequired,
    navColor: PropTypes.string.isRequired
};

export default Footer;