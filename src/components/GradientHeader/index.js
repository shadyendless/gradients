import React from 'react'
import PropTypes from 'prop-types';

const GradientHeader = ({ gradient, navColor, backgroundColor, setBackgroundColor, randomizeBackgroundColor }) => (
    <div className="gradient-display" style={{ background: gradient }}>
        <h1 className="input-header" style={{ color: navColor }}>Edit Color</h1>
        <div className="input-wrapper">
            <input spellCheck="false" className="color-input" style={{ color: navColor }} type="text" value={backgroundColor} onChange={(event) => setBackgroundColor(event.target.value)} />
            <button className="randomize-color" style={{ color: navColor }} onClick={randomizeBackgroundColor}>
                <i className="fas fa-sync"></i>
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
