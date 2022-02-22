import React, { FC } from 'react';

import './TypewriterText.scss';

const TypewriterText: FC = ({children}) => {

  return (
    <div className='typing-container'>
      <div className='typing-wrapper'>
        {children}
      </div>
    </div>
  )
}

export default TypewriterText;
