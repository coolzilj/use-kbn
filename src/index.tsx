import React, { useEffect, useState } from 'react';
import './lib/live2d.min.js';

import styles from './styles';

export const useKbn = (
  model: string, 
  initMessage: string, 
  width: number, 
  height: number, 
  rootStyles?: React.CSSProperties,
  messageStyles?: React.CSSProperties
) => {
  const [message, setMessage] = useState(initMessage)

  useEffect(() => {
    const linkElement = document.createElement("style");
    linkElement.innerHTML = styles.trim();
    document.getElementsByTagName("head")[0].appendChild(linkElement);
  }, []);

  useEffect(() => {
    loadlive2d('use-kbn-canvas', model);
  }, []);

  const computedRootStyles = Object.assign({}, rootStyles)
  const computedMessageStyles = Object.assign({}, messageStyles)
  const element = (
    <div id='use-kbn-root' style={computedRootStyles}>
      <div id='use-kbn-message' style={computedMessageStyles}>{message}</div>
      <canvas id='use-kbn-canvas' width={width} height={height}/>
    </div>
  )

  return {
    element,
    say: setMessage
  }
};
