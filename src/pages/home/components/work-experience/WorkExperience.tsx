import { FC } from 'react';

import './WorkExperience.scss';

import ContentBlock from 'components/content-block/ContentBlock';

import TESLA_LOGO from 'assets/tesla_logo.png';
import HW_LOGO from 'assets/hopsworks_logo.png';
import LD_LOGO from 'assets/liangdao_logo.jpeg';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons';

interface WorkExperienceData {
  company: string;
  position: string;
  start: string;
  end: string;
  location: string;
  description?: string;
  company_link?: string;
  logo?: string;
}

const dataList: Array<WorkExperienceData> = [
  {
    company: 'LiangDao GmbH',
    company_link: 'https://www.liangdao.de/',
    position: "Fullstack Engineer",
    start: 'Jan 2023',
    end: 'Jan 2024',
    location: 'Berlin, Germany',
    description: '<li>Tech Stack: <u>Docker • Kubernetes • Python • React • Node.js • AWS</u></li>',
    logo: LD_LOGO
  },
  {
    company: 'LiangDao GmbH',
    company_link: 'https://www.liangdao.de/',
    position: "Master's Thesis Worker",
    start: 'Apr 2022',
    end: 'Dec 2022',
    location: 'Berlin, Germany',
    description: '<li>Tech Stack: <u>Docker • Kubernetes • GitLab CI/CD • Python</u></li>',
    logo: LD_LOGO
  },
  {
    company: 'Hopsworks',
    company_link: 'https://www.hopsworks.ai/',
    position: 'Frontend Developer (part-time)',
    start: 'Oct 2021',
    end: 'Jan 2022',
    location: 'Stockholm, Sweden',
    description: '<li>Tech Stack: <u>React (TypeScript) • Redux</u></li>',
    logo: HW_LOGO
  },
  {
    company: 'Tesla (Giga-factory Shanghai)',
    company_link: 'https://www.tesla.com/',
    position: 'Software Engineer Intern',
    start: 'Jul 2021',
    end: 'Sep 2021',
    location: 'Shanghai, China',
    description: '<li>Tech Stack: <u>Angular (TypeScript) • .NET (C#)</u></li>',
    logo: TESLA_LOGO
  },
  {
    company: 'Siqian Software',
    position: 'Software Developer',
    start: 'Jan 2020',
    end: 'Jan 2021',
    location: 'Taiwan (Remote)',
    description: '<li>Tech Stack: <u>Vue (JavaScript) • Flask (Python) • PostgreSQL • Minio • Docker</u></li>'
  },
  {
    company: 'Chunghwa Telecom Laboratories · Zhongxin Network',
    position: 'Crawler Development Intern',
    start: 'Oct 2021',
    end: 'Jan 2022',
    location: 'Taiwan',
    description: '<li>Tech Stack: <u>Scrapy (Python)</u></li>'
  },
];

const WorkExperience: FC = () => {
  return (
    <div className='work-experience'>
      <ContentBlock
        title='WORK EXPERIENCE'
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
                  <div className='position'>
                    {`${item.position}`}
                    {item.logo && <img className='company-logo' src={item.logo} alt='company logo'/>}
                  </div>

                  <div className='employer'>
                    @ {item.company } {item.company_link && <a href={item.company_link} target="_blank" rel="noreferrer"><FontAwesomeIcon size='xs' icon={faLink} /></a>}
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

export default WorkExperience;
