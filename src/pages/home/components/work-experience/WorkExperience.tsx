import { FC } from 'react';

import './WorkExperience.scss';

import ContentBlock from 'components/content-block/ContentBlock';
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
}

const dataList: Array<WorkExperienceData> = [
  {
    company: 'LiangDao Intelligence Vehicle Technology',
    company_link: 'https://www.liangdao.de/',
    position: "Software Engineer",
    start: 'Jan 2023',
    end: 'Present',
    location: 'Berlin, Germany',
    description: '<li>Tech Stack: <u>Docker / Kubernetes / Argo Workflows</u></li>'
  },
  {
    company: 'LiangDao Intelligence Vehicle Technology',
    company_link: 'https://www.liangdao.de/',
    position: "Master's Thesis Worker",
    start: 'Apr 2022',
    end: 'Dec 2022',
    location: 'Berlin, Germany',
    description: '<li>Tech Stack: <u>Docker / Kubernetes</u></li>'
  },
  {
    company: 'Hopsworks',
    company_link: 'https://www.hopsworks.ai/',
    position: 'Frontend Developer (part-time)',
    start: 'Oct 2021',
    end: 'Jan 2022',
    location: 'Stockholm, Sweden',
    description: '<li>Tech Stack: <u>React (TypeScript)</u></li>'
  },
  {
    company: 'Tesla (Giga-factory Shanghai)',
    company_link: 'https://www.tesla.com/',
    position: 'Software Engineer Intern',
    start: 'Jul 2021',
    end: 'Sep 2021',
    location: 'Shanghai, China',
    description: '<li>Tech Stack: <u>Angular (Typescript) / .NET (C#)</u></li>'
  },
  {
    company: 'Siqian Software',
    position: 'Software Developer',
    start: 'Jan 2020',
    end: 'Jan 2021',
    location: 'Taiwan (Remote)',
    description: '<li>Tech Stack: <u>Vue / Python Flask / PostgreSQL / Minio / Docker</u></li>'
  },
  {
    company: 'Chunghwa Telecom Laboratories · Zhongxin Network',
    position: 'Crawler Development Intern',
    start: 'Oct 2021',
    end: 'Jan 2022',
    location: 'Taiwan',
    description: '<li>Tech Stack: <u>Python Scrapy</u></li>'
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
