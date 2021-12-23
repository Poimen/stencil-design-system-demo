function getBasePxFontSize(options) {
  return (options && options.basePxFontSize) || 16;
}

const isFont = props => props.attributes.category === 'font' && (props.attributes.type === 'size' || props.attributes.type === 'height');

module.exports = {
  name: 'size/pxToRem',
  type: 'value',
  matcher: props => isFont(props),
  transformer: (prop, options) => {
    if (prop.value.endsWith('rem')) return prop.value;

    const val = parseFloat(prop.value.split('px')[0]);
    if (isNaN(val)) {
      throw new Error(`Invalid Number: '${prop.name}: ${prop.value}' is not a valid number, cannot transform to rem`);
    }

    if (val === 0) return '0';

    const baseFontSize = getBasePxFontSize(options);
    const remVal = val / baseFontSize;
    return `${+(remVal.toFixed(3))}rem`;
  }
};
