import CVGeneral from './CVGeneral.jsx';
import CVEducation from './CVEducation.jsx';
import CVExperience from './CVExperience.jsx';

const CV = ({ general, educationList, experienceList }) => {
  return (
    <article>
      <CVGeneral data={general} />
      <CVEducation data={educationList} />
      <CVExperience data={experienceList} />
    </article>
  );
};

export default CV;
