import { FC, useEffect } from 'react';
import './Home.scss';

import Profile from './components/profile/Profile';
import Parallax from 'components/parallax/Parallax';
import Certificates from './components/certificates/Certificates';
import Education from './components/education/Education';
import WorkExperience from './components/work-experience/WorkExperience';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

import STHLM_SEA1 from '../../assets/sthlm_sea1.jpeg';

const Home: FC = () => {
  useEffect(() => { document.title='Zheyun Wu' }, []);

  return (
    <div className='home'>
      <section id='profile'>
        <Profile />
      </section>

      <section id='certificates' className='content-container'>
        <Certificates />
      </section>

      <section id='education' className='content-container'>
        <Education />
      </section>

      <section id='work-experience' className='content-container'>
        <WorkExperience />
      </section>

      <section id='skills' className='content-container'>
        <Skills />
      </section>

      <section id='contact' className='content-container'>
        <Contact />
      </section>

      <section>
        <Parallax
          image={STHLM_SEA1}
          fixed={false}
          subtitle={'To Be Developed...'}
        />
      </section>
    </div>
  )
};

export default Home;
