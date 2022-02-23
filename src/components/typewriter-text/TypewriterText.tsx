import React, { FC } from 'react';

import './TypewriterText.scss';


const TypewriterText: FC<{duration?: number, delay?: number, loop?: boolean, }> = ({children, duration=5, delay=0, loop=false}) => {
  const styles = {
    typingEffect: { 
      animation: `typing ${duration}s steps(29,end) ${delay}s ${loop ? 'infinite' : '1'} normal both, blink-cursor 600ms steps(29,end) infinite`,
    }
  }

  return (
    <div className='typing-container'>
      <div className='typing-wrapper' style={styles.typingEffect}>
        {children}
      </div>
    </div>
  )
}

export default TypewriterText;
