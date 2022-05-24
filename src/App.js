import React, {useState} from 'react';
import ColorList from './components/ColorList/ColorList';
import ColorForm from './components/ColorForm/ColorForm';

const App = () => {

  const [hexValue, setHexValue] = useState(null);

  const onSubmitHexHandler = (value) => {
    setHexValue(value);
  }

  return (
    <React.Fragment>
      <ColorForm submitHex={onSubmitHexHandler} />
      <ColorList hexValue={hexValue} />
    </React.Fragment>
  )
}

export default App