import './Skills.scss';

import { FC } from 'react';
import ContentBlock from 'components/content-block/ContentBlock';

import { getIcon, IconName } from 'assets/icons/icons';

const Skills: FC = () => {

  return (
    <ContentBlock
      title='SKILLS'
    >
      <div className='skills'>
        <div className='skills-row'>
          <div className='skill-item'>
            {getIcon(IconName.python)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.java)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.javascript)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.typescript)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.c)}
          </div>
        </div>

        <div className='skills-row'>
          <div className='skill-item'>
            {getIcon(IconName.react)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.vue)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.angular)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.sass)}
          </div>
        </div>

        <div className='skills-row'>
          <div className='skill-item'>
            {getIcon(IconName.flask)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.postgresql)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.mysql)}
          </div>
        </div>

        <div className='skills-row'>
          <div className='skill-item'>
            {getIcon(IconName.git)}
          </div>
          <div className='skill-item'>
            {getIcon(IconName.docker)}
          </div>
        </div>

        <div className='skills-row'>
          <div className='skill-item'>
            {getIcon(IconName.jira)}
          </div>
        </div>
      </div> 
    </ContentBlock>
  );
};

export default Skills;
