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
    resposibilities: ' ',
    date: ' ',
  });

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
      <CV general={generalData} education={education} experience={experience} />
    </>
  );
}

export default App;
