import { FC } from 'react';

import Profile from 'components/profile/Profile';
import Education from 'components/education/Education';

const Home: FC = () => {
  return (
    <div className='home'>
      <section id='profile'>
        <Profile />
      </section>

      <section id='education'>
        <Education />
      </section>
    </div>
  )
};

export default Home;
