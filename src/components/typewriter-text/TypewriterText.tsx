import React, { FC } from 'react';

import './TypewriterText.scss';

interface TypewriterTextProps {
  duration?: number;
  delay?: number;
  loop?: boolean;
}

const TypewriterText: FC<TypewriterTextProps> = (props) => {
  const {
    children,
    duration=5,
    delay=0,
    loop=false
  } = props;

  const styles = {
    typingEffect: {
      animation: `typing ${duration}s steps(29,end) ${delay}s ${loop ? 'infinite' : '1'} normal both, blink-cursor 600ms steps(29,end) infinite`,
    }
  };

  return (
    <div className='typing-container'>
      <div className='typing-wrapper' style={styles.typingEffect}>
        {children}
      </div>
    </div>
  );
};

export default TypewriterText;
