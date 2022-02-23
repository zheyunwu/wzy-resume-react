import { FC, useEffect, useState, useRef } from 'react';
import './Profile.scss';

import TypewriterText from 'components/typewriter-text/TypewriterText';

const Profile: FC = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const [parallexOffset, setparallexOffset] = useState(0);


  const handleScroll = () => {
    setparallexOffset(window.scrollY * 0.7);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='profile' ref={profileRef} style={{backgroundPositionY: `calc(50% - ${parallexOffset}px)`}}>
      <div className='text'>
        <div className='title'>
          <span>HI, I'M ZHEYUN WU</span>
        </div>
        <div className='subtitle'>
          <TypewriterText
            duration={5}
            delay={1.5}
            loop={true}
          >Software Developer
          </TypewriterText>
        </div>
      </div>
    </div>
  )
};

export default Profile;
