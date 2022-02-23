import { FC } from 'react';

import Parallax from 'components/parallax/Parallax';
import STHLM_SUNSET from 'assets/sthlm_sunset.jpeg';

const Profile: FC = () => {

  return (
    <Parallax
        image={STHLM_SUNSET}
        title="HI, I'M ZHEYUN WU"
        subtitle='Software Developer'
        fixed={false}
    />
  )
};

export default Profile;
