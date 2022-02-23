import { FC } from 'react';
import './Home.scss';

import Profile from './components/profile/Profile';
import Education from './components/education/Education';
import WorkExperience from './components/work-experience/WorkExperience';

const Home: FC = () => {
  return (
    <div className='home'>
      <section id='profile'>
        <Profile />
      </section>

      <section id='education'>
        <div className='content-container'>
          <Education />
        </div>
      </section>

      <section id='work-experience'>
        <div className='content-container'>
          <WorkExperience />
        </div>
      </section>

      <section style={{textAlign: 'center', fontSize: '30px', color:'gray'}}>
        to be developed...
      </section>
    </div>
  )
};

export default Home;
