import tinycolor from 'tinycolor2';

exports.calculateTextColor = function (color) {
    const convertedColor = tinycolor(color);
    const { r, g, b } = convertedColor.toRgb();
    const brightness =
        ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness < 127.5 ?
        'rgba(255, 255, 255, 1.0)' :
        'rgba(0, 0, 0, 1.0)';
};

// Algorithm from https://medium.com/the-mvp/finally-a-definitive-way-to-make-gradients-beautiful-6b27af88f5f
exports.calculateGradient = function (color) {
    const convertedColor = tinycolor(color);
    const format = convertedColor.getFormat();
    const gradientColor = tinycolor(color)
        .spin(25)
        .desaturate(20)
        .lighten(10);

    let methodName = `toRgbString`;
    if (format) {
        methodName = `to${format[0].toUpperCase()}${format.substr(1)}String`;
    }

    return `linear-gradient(15deg, ${convertedColor[methodName]()}, ${gradientColor[methodName]()})`;
};