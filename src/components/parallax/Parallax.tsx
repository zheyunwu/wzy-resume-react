import { FC, useEffect, useState, useRef } from 'react';
import './Parallax.scss';

import TypewriterText from 'components/typewriter-text/TypewriterText';

interface ParallaxProps {
  image: string;
  title?: string;
  subtitle?: string;
  fixed?: boolean
};

const Parallax: FC<ParallaxProps> = ({image, title, subtitle, fixed=true}) => {
  const pRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);


  const handleScroll = () => {
    console.log(pRef.current?.scrollBy)
    if (pRef && pRef.current) {
      setParallaxOffset(window.scrollY * 0.7);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundPositionY: `calc(50% - ${fixed ? 0 : parallaxOffset}px)`,
  }

  return (
    <div className='parallax' ref={pRef} style={styles}>
      <div className='text'>
        {title && (
          <div className='title'>
            <span>{title}</span>
          </div>
        )}
        {subtitle && (
          <div className='subtitle'>
            <TypewriterText
              duration={5}
              delay={1.5}
              loop={true}
            >
              {subtitle}
            </TypewriterText>
          </div>
        )}
      </div>
    </div>
  )
};

export default Parallax;
