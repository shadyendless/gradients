import PropTypes from 'prop-types';
import ClipboardJS from 'clipboard';
import React, { Component } from 'react';

class CopyButton extends Component {
    static propTypes = {
        copyText: PropTypes.string.isRequired,
        tooltipText: PropTypes.string.isRequired,
        btnClass: PropTypes.string.isRequired
    };

    state = {
        tooltipShown: false
    };

    showTooltip = () => {
        this.setState(() => ({
            tooltipShown: true
        }));

        setTimeout(() => {
            this.setState(() => ({
                tooltipShown: false
            }));
        }, 400);
    };

    componentDidMount() {
        new ClipboardJS(this.copyButton);
    }

    render() {
        const { copyText, tooltipText, btnClass, btnColor, children } = this.props;
        const { tooltipShown } = this.state;

        return (
            <button class={btnClass} style={btnColor ? { color: btnColor } : {}}
                data-clipboard-text={copyText}
                ref={(input) => { this.copyButton = input }}
                onClick={this.showTooltip}>
                {children}
                <span style={{ color: 'rgb(33, 35, 38)' }} class={`copy-message ${tooltipShown ? 'active' : ''}`}>{tooltipText}</span>
            </button>
        );
    }
}

export default CopyButton;