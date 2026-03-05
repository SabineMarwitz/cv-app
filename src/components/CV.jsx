import { useState } from 'react';
import CVGeneral from './CVGeneral.jsx';
import CVEducation from './CVEducation.jsx';
import CVExperience from './CVExperience.jsx';

const CV = ({ general, educationList, experienceList }) => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>
      {show && <CVGeneral data={general} />}
      {show && <CVEducation data={educationList} />}
      {show && <CVExperience data={experienceList} />}
    </>
  );
};

export default CV;
