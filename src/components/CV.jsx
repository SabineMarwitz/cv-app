const CV = ({ general, education, experience }) => {
  return (
    <>
      <button
        onClick={() => {
          console.log(general.name, general.email, general.phone);
          console.log(education.date, education.school, education.study);
          console.log(
            experience.company,
            experience.position,
            experience.responsibilities,
            experience.date,
          );
        }}
      >
        Submit
      </button>
    </>
  );
};

export default CV;
