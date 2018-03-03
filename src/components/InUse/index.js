import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import me from '../../images/me.jpg';

const InUse = ({ gradient, navColor }) => (
    <Fragment>
        <h1 className="header">In Use</h1>
        <div className="in-use-wrapper container" style={{ color: navColor }}>
            <div className="in-use-section">
                <div className="in-use-content label" style={{ background: gradient }}>
                    Label
                </div>
                <h2 className="subheader">Label</h2>
            </div>
            <div className="in-use-section">
                <div className="in-use-content button" style={{ background: gradient }}>
                    A Button
                </div>
                <h2 className="subheader">Button</h2>
            </div>
            <div className="in-use-section">
                <div className="in-use-content image" style={{ background: `${gradient}, url(${me})`, backgroundSize: 'cover' }}>
                </div>
                <h2 className="subheader">Image</h2>
            </div>
        </div>
    </Fragment>
);
InUse.propTypes = {
    gradient: PropTypes.string.isRequired,
    navColor: PropTypes.string.isRequired
};

export default InUse;