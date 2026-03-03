import './App.css';
import { useState } from 'react';
import General from './components/General.jsx';
import CV from './components/CV.jsx';

function App() {
  const [generalData, setGeneralData] = useState({
    name: 'name',
    email: 'name@com',
    phone: 'phone',
  });

  return (
    <>
      <h1>CV Application</h1>
      <General
        data={generalData}
        updateData={(generalData) => setGeneralData(generalData)}
      />
      <CV data={generalData} />
    </>
  );
}

export default App;
