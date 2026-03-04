import './App.css';
import { useState } from 'react';
import General from './components/General.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import CV from './components/CV.jsx';

function App() {
  const [generalData, setGeneralData] = useState({
    name: 'name',
    email: 'name@com',
    phone: 'phone',
  });

  const [education, setEducation] = useState({
    school: ' ',
    study: ' ',
    date: ' ',
  });

  const [experience, setExperience] = useState({
    company: ' ',
    position: ' ',
    responsibilities: ' ',
    date: ' ',
  });

  const [experienceList, setExperienceList] = useState([]);

  const submitExperience = (experience) => () => {
    setExperienceList([...experienceList, experience]);
  };

  return (
    <>
      <h1>CV Application</h1>
      <General
        data={generalData}
        updateData={(generalData) => setGeneralData(generalData)}
      />
      <Education
        data={education}
        updateData={(education) => setEducation(education)}
      />
      <Experience
        data={experience}
        updateData={(experience) => setExperience(experience)}
      />
      <button onClick={submitExperience(experience)}>Submit</button>
      <h2>Your CV starts here</h2>
      <CV
        general={generalData}
        education={education}
        experienceList={experienceList}
      />
    </>
  );
}

export default App;
