import { FC, useEffect } from 'react';

const Admin: FC = () => {
  useEffect(() => { document.title='Zheyun Wu | Admin' }, []);

  return (
    <div className='admin'>
      admin page
    </div>
  )
};

export default Admin;
