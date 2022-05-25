import React, {useState, useRef} from 'react';

import styles from './ColorForm.module.css';

const ColorForm = (props) => {

  const [error, setError] = useState(false);
  const hexRef = useRef();

  const hexToRgb = hexValue => {
    let r, g, b = 0;

    if (hexValue.length == 4) {
      r = "0x" + hexValue[1] + hexValue[1];
      g = "0x" + hexValue[2] + hexValue[2];
      b = "0x" + hexValue[3] + hexValue[3];
      
    } else if (hexValue.length == 7) {
      r = "0x" + hexValue[1] + hexValue[2];
      g = "0x" + hexValue[3] + hexValue[4];
      b = "0x" + hexValue[5] + hexValue[6];
    }

    return {
      r: +r,
      g: +g,
      b: +b,
    };
  }

  const rgbToHsl = (r,g,b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
    cmax = Math.max(r,g,b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;
    
    // Calculate hue
    // No difference
    if (delta == 0)
    h = 0;

    // Red is max
    else if (cmax == r)
    h = ((g - b) / delta) % 6;

    // Green is max
    else if (cmax == g)
    h = (b - r) / delta + 2;

    // Blue is max
    else
    h = (r - g) / delta + 4;

    h = Math.round(h * 60);
  
    // Make negative hues positive behind 360°
    if (h < 0)
    h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return {
      hsl: "hsl(" + h + "," + s + "%," + l + "%)",
      lightness: l,
    };
    }

  const hexSubmitHandler = e => {
    e.preventDefault();
    const hexValue = hexRef.current.value;
    let isnum = /^#[0-9]{6}$/i.test(hexValue);
    if(isnum) {
      const {r, g, b} = hexToRgb(hexValue);
      const hslValue = rgbToHsl(r,g,b);
      const { hsl,lightness } = hslValue;
      props.submitHsl(hsl, lightness);
    } else {
      setError(true)
    }
  }

  const inputFocusHandler = () => {
    setError(false);
  }

  return (
    <form onSubmit={hexSubmitHandler} className={styles['color-form']}>
        <label htmlFor='colorInput'>Enter hexcode:</label>
        <input onFocus={inputFocusHandler} className={`${error && styles['error-input']}`} ref={hexRef} type="text" defaultValue={'#'} />
        <button type="submit">Submit</button>
        <p>{error && "Please enter 6 digits hexcode and only numbers allowed"}</p>
    </form>
  )
}

export default ColorForm