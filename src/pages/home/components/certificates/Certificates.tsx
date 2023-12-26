import './Certificates.scss';

import { FC } from 'react';
import ContentBlock from 'components/content-block/ContentBlock';

import AWS_CLOUD_PRACTITIONER from 'assets/certificates/aws-cloud-practitioner.png';
import AWS_DEVELOPER from 'assets/certificates/aws-developer.png';
import AWS_SAA from 'assets/certificates/aws-solution-architect.png';

const Certificates: FC = () => {
  return (
    <ContentBlock
      title='CERTIFICATES'
    >
      <div className='certificates-container'>
          <img
            className='certificates-item'
            src={AWS_CLOUD_PRACTITIONER}
            alt='AWS Cloud Practitioner'
            onClick={() => window.open('https://www.credly.com/badges/d92087bd-31ee-48b4-982d-7484d51bf7ed/public_url')}
          />
          <img
            className='certificates-item'
            src={AWS_DEVELOPER}
            alt='AWS Developer'
            onClick={() => window.open('https://www.credly.com/badges/a559b987-6817-4ad3-aa09-b36bce859798/public_url')}
          />
          <img
            className='certificates-item'
            src={AWS_SAA}
            alt='AWS Solution Architect'
            onClick={() => window.open('https://www.credly.com/badges/cf36015c-0e81-41fc-bf5a-afe4c375c68f/public_url')}
          />
      </div>
    </ContentBlock>
  );
};

export default Certificates;
