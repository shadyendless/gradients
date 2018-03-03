import React from 'react'
import PropTypes from 'prop-types';

const GradientHeader = ({ gradient, navColor, backgroundColor, setBackgroundColor, randomizeBackgroundColor }) => (
    <div class="gradient-display" style={{ background: gradient }}>
        <h1 class="input-header" style={{ color: navColor }}>Edit Color</h1>
        <div class="input-wrapper">
            <input spellCheck="false" autoComplete="false" class="color-input" style={{ color: navColor }} type="text" value={backgroundColor} onChange={(event) => setBackgroundColor(event.target.value)} />
            <button class="randomize-color" style={{ color: navColor }} onClick={randomizeBackgroundColor}>
                <i class="fas fa-sync"></i>
            </button>
        </div>
    </div>
);

GradientHeader.propTypes = {
    gradient: PropTypes.string.isRequired,
    navColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    setBackgroundColor: PropTypes.func.isRequired,
    randomizeBackgroundColor: PropTypes.func.isRequired
};

export default GradientHeader
