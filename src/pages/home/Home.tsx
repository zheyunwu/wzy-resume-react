import { FC } from 'react';
import './Home.scss';

import Profile from './components/profile/Profile';
import Parallax from 'components/parallax/Parallax';
import Education from './components/education/Education';
import WorkExperience from './components/work-experience/WorkExperience';

import STHLM_SEA1 from '../../assets/sthlm_sea1.jpeg';

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

      <section>
        <Parallax
          image={STHLM_SEA1}
        />
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
