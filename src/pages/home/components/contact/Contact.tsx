import './Contact.scss';

import { FC } from 'react';
import ContentBlock from 'components/content-block/ContentBlock';

// Icons
import { IconName, getIcon } from 'assets/icons/icons';

const Contact: FC = () => {
  return (
    <ContentBlock
      title='CONTACT'
    >
      <div className='contact'>
        <div className='contact-container'>
          <div className='contact-item'>
            {getIcon(IconName.gmail)}
            <span className='contact-item-value'>zheyun.wu.work@gmail.com</span>
          </div>
          <div className='contact-item'>
            {getIcon(IconName.github)}
            <a href='https://github.com/crispinwzy/' className='contact-item-value'>https://github.com/zheyunwu/</a>
          </div>
          <div className='contact-item'>
            {getIcon(IconName.linkedin)}
            <a href='https://www.linkedin.com/in/zheyun-wu/' className='contact-item-value'>https://www.linkedin.com/in/zheyun-wu/</a>
          </div>
        </div>
      </div>
    </ContentBlock>
  );
};

export default Contact;
