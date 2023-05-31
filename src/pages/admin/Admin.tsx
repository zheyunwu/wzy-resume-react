import { FC, useEffect, useState } from 'react';
import { Container, Box, Tab, Tabs, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Switch } from '@mui/material';
import { Edit, Delete} from '@mui/icons-material';

import capitalize from 'utils/capitalize';

interface EducationData {
  school: string;
  degree: string;
  major: string;
  start: string;
  end: string;
  location: string;
  description?: string;
  logo: string;  // Assuming logo is a string (URL)
}

interface WorkExperienceData {
  company: string;
  company_link?: string;
  position: string;
  start: string;
  end: string;
  location: string;
  description: string;
}

const educationData: EducationData[] = [
  {
    school: 'KTH Royal Institute of Technology',
    degree: 'Master',
    major: 'Computer Science and Engineering',
    start: 'Sep 2021',
    end: 'Dec 2022',
    location: 'Stockholm, Sweden',
    description: '<li><b>Courses</b>: Modern Methods in Software Engineering, Data Mining, Scalable Machine Learning and Deep Learning, Theory and Methodology of Science with Applications</li>',
    logo: 'https://github.com/zheyunwu/wzy-resume-react/blob/master/src/assets/KTH_logo.png?raw=true'
  },
  {
    school: 'Aalto University',
    degree: 'Master',
    major: 'Computer Science and Engineering',
    start: 'Sep 2020',
    end: 'Jun 2021',
    location: 'Helsinki, Finland',
    description: '<li><b>Courses</b>: Cloud Software and Systems, Internet Traffic Measurements and Analysis, Web Software Development, Big Data Platforms, Internet Protocols, Software-Defined Networking, Cybersecurity</li>',
    logo: 'https://github.com/zheyunwu/wzy-resume-react/blob/master/src/assets/aalto_logo.png?raw=true'
  },
  {
    school: 'Stockholm University',
    degree: 'Exchange Student',
    major: 'Computer and System Sciences (DSV)',
    start: 'Jan 2019',
    end: 'Jun 2019',
    location: 'Stockholm, Sweden',
    description: '',
    logo: 'https://github.com/zheyunwu/wzy-resume-react/blob/dev/src/assets/SU_logo2.png?raw=true'
  },
  {
    school: 'Tamkang University',
    degree: 'Bachelor',
    major: 'Information Management',
    start: 'Sep 2015',
    end: 'Jun 2019',
    location: 'Tamsui, Taiwan',
    description: '<li><b>GPA</b>: 3.959/4.0 (Class Rank: 1/67, Dept. Rank: 1/206)</li><li><b>Courses</b>: Calculus, Statistics, Fundamentals of Computer Programming (C), Programming and Data Structures (Java), Algorithms, Database Design, Network and Communication, Operating Systems, Advanced Object-Oriented Programming (Java + Design patterns), System Analysis and Design</li>',
    logo: 'https://github.com/zheyunwu/wzy-resume-react/blob/master/src/assets/TKU_logo.png?raw=true'
  }
];

const workExperienceData: WorkExperienceData[] = [
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

const Admin: FC = () => {
  useEffect(() => { document.title='Zheyun Wu | Admin' }, []);

  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  const renderTable = (data: EducationData[] | WorkExperienceData[]) => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableCell key={key}>{capitalize(key)}</TableCell>
            ))}
            <TableCell>Actions</TableCell>
            <TableCell>Visible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {Object.values(item).map((value, index) => (
                <TableCell key={index}>{value}</TableCell>
              ))}
              <TableCell>
                <IconButton aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton aria-label="delete">
                  <Delete />
                </IconButton>
              </TableCell>
              <TableCell>
                <Switch
                  defaultChecked
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Container maxWidth='lg' sx={{ marginTop: '64px', paddingY: '20px' }}>
      <Box>
        <Paper sx={{ marginBottom: '80px' }}>
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab label="Education" />
            <Tab label="Work Experience" />
          </Tabs>
        </Paper>
        {activeTab === 0 && renderTable(educationData)}
        {activeTab === 1 && renderTable(workExperienceData)}
      </Box>
    </Container>
  );
};

export default Admin;
