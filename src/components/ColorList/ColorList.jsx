import React from 'react';

import styles from './ColorList.module.css';

const ColorList = (props) => {

  let content;
  if(props.hexValue !== null) {
    let addedItems = [];
    let i = 100;
    while(i >= 0) {
      if(i == 100) {
        addedItems.push({
          hexValue: props.hexValue,
          opacity: i,
        })
      } else if(i == 0) {
        addedItems.push({
          hexValue: props.hexValue + "00",
          opacity: "00",
        })
      } else {
        addedItems.push({
          hexValue: props.hexValue + i,
          opacity: i,
        })
      }
      i = i - 10;
    }
    content = addedItems.map((item, index) => {
      return <li className={styles['color-item']} style={{backgroundColor: item.hexValue}} key = {`color-item__${index}`}>
        <h3>{item.opacity}</h3>
        <h2>{item.hexValue}</h2>
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