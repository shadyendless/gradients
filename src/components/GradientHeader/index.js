import PropTypes from 'prop-types';
import React, { Component } from 'react'
import GradientDisplay from '../GradientDisplay';
import Observer from 'react-intersection-observer';

class GradientHeader extends Component {
    static propTypes = {
        gradient: PropTypes.string.isRequired,
        navColor: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        setBackgroundColor: PropTypes.func.isRequired,
        randomizeBackgroundColor: PropTypes.func.isRequired
    };

    state = {
        isFixed: false
    };

    setHeaderFixed = (fixed) => {
        this.setState(() => ({
            isFixed: fixed
        }));
    };

    render() {
        const { gradient, navColor, backgroundColor, setBackgroundColor, randomizeBackgroundColor } = this.props;
        const { isFixed } = this.state;

        return (
            <>
                <div class="header-watch">
                    <Observer onChange={(inView) => { this.setHeaderFixed(!inView); }}>
                    </Observer>
                </div>
                <GradientDisplay
                    backgroundColor={backgroundColor}
                    isFixed={false}
                    gradient={gradient}
                    navColor={navColor}
                    randomizeBackgroundColor={randomizeBackgroundColor}
                    setBackgroundColor={setBackgroundColor} />
                {(
                    isFixed ?
                        <GradientDisplay
                            backgroundColor={backgroundColor}
                            isFixed={true}
                            gradient={gradient}
                            navColor={navColor}
                            randomizeBackgroundColor={randomizeBackgroundColor}
                            setBackgroundColor={setBackgroundColor} />
                        : <></>
                )}
            </>
        );
    }
};

export default GradientHeader
