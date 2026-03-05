import { useState } from 'react';

const CV = ({ general, educationList, experienceList }) => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  function logData() {
    console.log('***********************************************');
    console.log('PERSONAL DATA:');
    console.log(general.name, general.email, general.phone);

    console.log('EDUCATIONAL EXPERIENCE: ');
    for (let j = 0; j < educationList.length; j++) {
      console.log(
        educationList[j].date,
        educationList[j].school,
        educationList[j].study,
      );
    }

    console.log('PRACTICAL EXPERIENCE: ');
    for (let i = 0; i < experienceList.length; i++) {
      console.log(
        experienceList[i].date,
        experienceList[i].company,
        experienceList[i].position,
        experienceList[i].responsibilities,
      );
    }
    console.log('***********************************************');
  }

  return (
    <>
      <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>
      {show && (
        <section>
          {' '}
          PERSONAL DATA:
          <p>
            {general.name} {general.email} {general.phone}
          </p>
        </section>
      )}
      {show && (
        <section>
          {' '}
          EDUCATIONAL EXPERIENCE:
          <ul>
            {educationList.map((item) => (
              <li key={item.date}>
                {item.date} {item.school} {item.study}
              </li>
            ))}
          </ul>
        </section>
      )}
      {show && (
        <section>
          PRACTICAL EXPERIENCE:
          <ul>
            {experienceList.map((item) => (
              <li key={item.date}>
                {item.date} {item.company} {item.position}{' '}
                {item.responsibilities}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default CV;
