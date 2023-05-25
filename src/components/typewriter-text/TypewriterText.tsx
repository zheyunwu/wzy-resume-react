import React, { FC } from 'react';

import './TypewriterText.scss';

interface TypewriterTextProps {
  text: string;
  duration?: number;
  delay?: number;
  loop?: boolean;
}

const TypewriterText: FC<TypewriterTextProps> = (props) => {
  const {
    text,
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
        {text}
      </div>
    </div>
  );
};

export default TypewriterText;
