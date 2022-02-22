import { FC } from 'react';
import './Home.scss';

import Profile from './components/profile/Profile';
import Education from './components/education/Education';

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

      <section style={{textAlign: 'center', fontSize: '30px', color:'gray'}}>
        to be developed...
      </section>
    </div>
  )
};

export default Home;
