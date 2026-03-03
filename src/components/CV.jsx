const CV = ({ general, education }) => {
  return (
    <>
      <button
        onClick={() => {
          console.log(general.name, general.email, general.phone);
          console.log(education.date, education.school, education.study);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default CV;
