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
          <div className='skill-item tooltip'>
            {getIcon(IconName.python)}
            <span className='tooltiptext'>Python</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.java)}
            <span className='tooltiptext'>Java</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.javascript)}
            <span className='tooltiptext'>JavaScript</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.typescript)}
            <span className='tooltiptext'>TypeScript</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.c)}
            <span className='tooltiptext'>C</span>
          </div>
        </div>

        <div className='skills-row'>
          <div className='skill-item tooltip'>
            {getIcon(IconName.react)}
            <span className='tooltiptext'>React</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.vue)}
            <span className='tooltiptext'>Vue</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.angular)}
            <span className='tooltiptext'>Angular</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.sass)}
            <span className='tooltiptext'>Sass</span>
          </div>
        </div>

        <div className='skills-row'>
          <div className='skill-item tooltip'>
            {getIcon(IconName.flask)}
            <span className='tooltiptext'>Flask</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.postgresql)}
            <span className='tooltiptext'>PostgreSQL</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.mysql)}
            <span className='tooltiptext'>MySQL</span>
          </div>
        </div>

        <div className='skills-row'>
          <div className='skill-item tooltip'>
            {getIcon(IconName.docker)}
            <span className='tooltiptext'>Docker</span>
          </div>
          <div className='skill-item tooltip'>
            {getIcon(IconName.k8s)}
            <span className='tooltiptext'>Kubernetes</span>
          </div>
        </div>

        <div className='skills-row'>
          <div className='skill-item tooltip'>
            {getIcon(IconName.git)}
            <span className='tooltiptext'>Git</span>
          </div>
        </div>
      </div> 
    </ContentBlock>
  );
};

export default Skills;
