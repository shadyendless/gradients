import React from 'react';
import PropTypes from 'prop-types';
import CopyButton from '../CopyButton';

const CopyBox = ({ copyText, tooltipText }) => (
    <div class="gradient-code">
        {copyText}
        <CopyButton copyText={copyText} tooltipText={tooltipText} btnClass="copy-button">
            <i class="far fa-copy"></i>
        </CopyButton>
    </div>
);
CopyBox.propTypes = {
    copyText: PropTypes.string.isRequired,
    tooltipText: PropTypes.string.isRequired
};

export default CopyBox;