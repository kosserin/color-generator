import React, {useState, useRef} from 'react';

import styles from './ColorForm.module.css';

const ColorForm = (props) => {

  const [error, setError] = useState(false);
  const hexRef = useRef();

  const hexSubmitHandler = e => {
    e.preventDefault();
    const hexValue = hexRef.current.value;
    if(hexValue.length < 4) {
      setError(true);
    } else {
      props.submitHex(hexValue);
      setError(false);
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
        <p>{error && "Please enter valid hexcode"}</p>
    </form>
  )
}

export default ColorForm