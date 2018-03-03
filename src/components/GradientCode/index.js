import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ClipboardJS from 'clipboard';

class GradientCode extends Component {
    static propTypes = {
        gradient: PropTypes.string.isRequired
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
        const { gradient } = this.props;
        const { tooltipShown } = this.state;

        return (
            <div className="gradient-code">
                {gradient}
                <button className="copy-button"
                    data-clipboard-text={gradient}
                    ref={(input) => { this.copyButton = input }}
                    onClick={this.showTooltip}>
                    <i className="far fa-copy"></i>
                </button>
                <div className={`copy-message ${tooltipShown ? 'active' : ''}`}>Code Copied!</div>
            </div>
        );
    }
}

export default GradientCode;