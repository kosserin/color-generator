import React from 'react';

import styles from './ColorList.module.css';

const ColorList = (props) => {

  let content;

  if(props.hslValue !== null) {
    let addedItems = [];
    let max = 100;
    let actualMaxStep = Math.floor((max - props.lightness)/10);
    let actualMinStep = Math.floor((props.lightness)/10);
    let lastOccurance = props.hslValue.lastIndexOf(props.lightness);
    
    let i = 0;
    while (i < (props.lightness-actualMinStep)) {
      const newHsl = props.hslValue.substring(0, lastOccurance) + `${i}%)`;
      addedItems.push({
        backgroundColor: newHsl, 
      })
      i = i + actualMinStep;
    }

    i = props.lightness;
    while(i <= max) {
      const newHsl = props.hslValue.substring(0, lastOccurance) + `${i}%)`;
      addedItems.push({
        backgroundColor: newHsl,
        lightness: i,
      })
      i = i + actualMaxStep;
    }
    content = addedItems.map((item, index) => {
      return <li key={`color-item__${index}`} style={{backgroundColor: item.backgroundColor}} className={styles['color-item']}>
        <h3 style={{color: item.lightness > props.lightness && "black"}}>{item.backgroundColor}</h3>
      </li>
    })
  }

  return (
    <ul className={styles['color-list']}>
        {content}
    </ul>
  )
}

export default ColorList