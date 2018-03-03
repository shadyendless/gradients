import tinycolor from 'tinycolor2';

const toFormatString = function (format) {
    return format ? `to${format[0].toUpperCase()}${format.substr(1)}String` : `toRgbString`;
}

const calculateTextColor = function (color) {
    const convertedColor = tinycolor(color);
    const { r, g, b } = convertedColor.toRgb();
    const brightness =
        ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness < 127.5 ?
        'rgb(255, 255, 255)' :
        'rgb(33, 35, 38)';
};

// Algorithm from https://medium.com/the-mvp/finally-a-definitive-way-to-make-gradients-beautiful-6b27af88f5f
const calculateGradient = function (color) {
    const convertedColor = tinycolor(color);
    const gradientColor = tinycolor(color)
        .spin(25)
        .desaturate(20)
        .lighten(10);

    const methodName = toFormatString(convertedColor.getFormat());
    return `linear-gradient(15deg, ${convertedColor[methodName]()}, ${gradientColor[methodName]()})`;
};


const getInitialBackgroundColor = function (hash) {
    if (hash !== '') {
        const convertedColor = tinycolor(hash);
        if (convertedColor.getFormat()) {
            return convertedColor[toFormatString(convertedColor.getFormat())]();
        }
    }

    return tinycolor.random().toRgbString();
}

export { calculateTextColor, calculateGradient, getInitialBackgroundColor, toFormatString };