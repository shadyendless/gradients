import React from 'react';
import PropTypes from 'prop-types';

import me from '../../images/me.jpg';

const InUse = ({ gradient, navColor }) => (
    <>
        <h1 class="header">In Use</h1>
        <div class="in-use-wrapper container" style={{ color: navColor }}>
            <div class="in-use-section">
                <div class="in-use-content label" style={{ background: gradient }}>
                    Label
                </div>
                <h2 class="subheader">Label</h2>
            </div>
            <div class="in-use-section">
                <div class="in-use-content button" style={{ background: gradient }}>
                    A Button
                </div>
                <h2 class="subheader">Button</h2>
            </div>
            <div class="in-use-section">
                <div class="in-use-content image" style={{ background: `${gradient}, url(${me})`, backgroundSize: 'cover' }}>
                </div>
                <h2 class="subheader">Image</h2>
            </div>
        </div>
    </>
);
InUse.propTypes = {
    gradient: PropTypes.string.isRequired,
    navColor: PropTypes.string.isRequired
};

export default InUse;