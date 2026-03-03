import './App.css';
import { useState } from 'react';
import General from './components/General.jsx';
import Education from './components/Education.jsx';
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
      <CV general={generalData} education={education} />
    </>
  );
}

export default App;
