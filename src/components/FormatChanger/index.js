import React from 'react';
import PropTypes from 'prop-types';

const formats = ['hex', 'rgb', 'hsl'];

const FormatChanger = ({ changeFormat, originalFormat }) => (
    <div>
        <div class="format-changer">
            {
                formats.map(format => (
                    <button class={format === originalFormat ? 'active' : ''}
                        onClick={() => changeFormat(format)}>
                        {format.toUpperCase()}
                    </button>
                ))
            }
        </div>
    </div>
);
FormatChanger.propTypes = {
    changeFormat: PropTypes.func.isRequired,
    originalFormat: PropTypes.string.isRequired
};

export default FormatChanger;
