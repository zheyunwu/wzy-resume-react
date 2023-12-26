import { FC } from 'react';
import capitalize from 'utils/capitalize';

import './Education.scss';

import ContentBlock from 'components/content-block/ContentBlock';

import KTH_LOGO from 'assets/KTH_logo.png';
import Aalto_LOGO from 'assets/aalto_logo.png';
import TKU_LOGO from 'assets/TKU_logo.png';
import SU_LOGO from 'assets/SU_logo2.png';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface EducationData {
  school: string;
  degree: 'Bachelor' | 'Master' | 'Exchange Student';
  major: string;
  start: string;
  end: string;
  location: string;
  description?: string;
  logo?: string
}

const dataList: Array<EducationData> = [
  {
    school: 'KTH Royal Institute of Technology',
    degree: 'Master',
    major: 'Computer Science and Engineering',
    start: 'Sep 2021',
    end: 'Dec 2022',
    location: 'Stockholm, Sweden',
    description: '<li><b>Courses</b>: Modern Methods in Software Engineering, Data Mining, Scalable Machine Learning and Deep Learning, Theory and Methodology of Science with Applications</li>',
    logo: KTH_LOGO
  },
  {
    school: 'Aalto University',
    degree: 'Master',
    major: 'Computer Science and Engineering',
    start: 'Sep 2020',
    end: 'Jun 2021',
    location: 'Helsinki, Finland',
    description: '<li><b>Courses</b>: Cloud Software and Systems, Internet Traffic Measurements and Analysis, Web Software Development, Big Data Platforms, Internet Protocols, Software-Defined Networking, Cybersecurity</li>',
    logo: Aalto_LOGO
  },
  {
    school: 'Stockholm University',
    degree: 'Exchange Student',
    major: 'Computer and System Sciences (DSV)',
    start: 'Jan 2019',
    end: 'Jun 2019',
    location: 'Stockholm, Sweden',
    logo: SU_LOGO
  },
  {
    school: 'Tamkang University',
    degree: 'Bachelor',
    major: 'Information Management',
    start: 'Sep 2015',
    end: 'Jun 2019',
    location: 'Tamsui, Taiwan',
    description: '<li><b>GPA</b>: 3.959/4.0 (Class Rank: 1/67, Dept. Rank: 1/206)</li><li><b>Courses</b>: Calculus, Statistics, Fundamentals of Computer Programming (C), Programming and Data Structures (Java), Algorithms, Database Design, Network and Communication, Operating Systems, Advanced Object-Oriented Programming (Java + Design patterns), System Analysis and Design</li>',
    logo: TKU_LOGO
  }
];

const Education: FC = () => {
  return (
    <div className='education'>
      <ContentBlock
        title='EDUCATION'
      >
        <div className='content'>
          {dataList.map((item) => {
            return (
              <div className='event'>
                <div className='left'>
                  <div className='duration'>
                    <span>{`${item.start} - ${item.end}`}</span>
                  </div>
                  <div className='location'>
                  <FontAwesomeIcon icon={faLocationDot} /> {item.location}
                  </div>
                </div>
                <div className='right'>
                  <div className='school-name'>
                    {item.school}
                    <img className='school-logo' src={item.logo} alt='school logo'/>
                  </div>

                  <div className='degree-major'>
                    {`(${capitalize(item.degree)}) ${item.major}`}
                  </div>

                  <div className='description'>
                    <ul style={{listStylePosition: 'outside'}}>
                      {item.description && <div dangerouslySetInnerHTML={{ __html: item.description }} />}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentBlock>
    </div>
  );
};

export default Education;
