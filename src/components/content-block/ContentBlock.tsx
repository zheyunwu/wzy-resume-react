import { FC } from 'react';

import './ContentBlock.scss';

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

const ContentBlock: FC<ContentBlockProps> = ({ title, children }) => {
  return (
    <div className='content-block'>
      <div className='title'>
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
};

export default ContentBlock;
