import React, {useState} from 'react';
import ColorList from './components/ColorList/ColorList';
import ColorForm from './components/ColorForm/ColorForm';

const App = () => {

  const [hslValue, setHslValue] = useState(null);
  const [lightness, setLightness] = useState(null);

  const onSubmitHslHandler = (hslValue, lightnessValue) => {
    setHslValue(hslValue);
    setLightness(lightnessValue);
  }

  return (
    <React.Fragment>
      <ColorForm submitHsl={onSubmitHslHandler} />
      <ColorList hslValue={hslValue} lightness={lightness} />
    </React.Fragment>
  )
}

export default App