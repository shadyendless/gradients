import React from 'react';
import PropTypes from 'prop-types';

import me from '../../images/me.jpg';

const InUse = ({ gradient, navColor }) => (
    <>
        <h1 class="header">In Use</h1>
        <div>
            <div class="in-use-wrapper container" style={{ color: navColor }}>
                <div class="in-use-section">
                    <div class="in-use-content label" style={{ background: gradient }}>
                        NEW
                    </div>
                    <h2 class="in-use-label">Label</h2>
                </div>
                <div class="in-use-section">
                    <div class="in-use-content button" style={{ background: gradient }}>
                        Sign Up
                    </div>
                    <h2 class="in-use-label">Button</h2>
                </div>
                <div class="in-use-section">
                    <div class="in-use-content image" style={{ background: `${gradient}, url(${me})`, backgroundSize: 'cover' }}>
                    </div>
                    <h2 class="in-use-label">Image</h2>
                </div>
                <div class="in-use-section wide">
                    <div class="in-use-content message" style={{ background: gradient }}>
                        Hey! Are you free tonight? We are going out for dinner.
                    </div>
                    <h2 class="in-use-label">Message</h2>
                </div>
                <div class="in-use-section wide">
                    <div class="in-use-content status" style={{ background: gradient }}>
                        Wow!<br />
                        Did you guys notice that everyone is putting gradients behind their posts? What's the point?
                    </div>
                    <h2 class="in-use-label">Post</h2>
                </div>
            </div>
        </div>
    </>
);
InUse.propTypes = {
    gradient: PropTypes.string.isRequired,
    navColor: PropTypes.string.isRequired
};

export default InUse;