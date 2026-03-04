const CV = ({ general, education, experienceList }) => {
  return (
    <>
      <button
        onClick={() => {
          console.log('***********************************************');
          console.log('PERSONAL DATA:');
          console.log(general.name, general.email, general.phone);

          console.log('EDUCATIONAL EXPERIENCE: ');
          console.log(education.date, education.school, education.study);

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
        }}
      >
        Click me
      </button>
    </>
  );
};

export default CV;
