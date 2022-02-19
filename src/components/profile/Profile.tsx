import { FC, useEffect, useState, useRef } from 'react';
import './Profile.scss';

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
          <strong>Zheyun Wu</strong>
        </div>
        <div className='subtitle'>
          Software Developer
        </div>
      </div>
    </div>
  )
};

export default Profile;
