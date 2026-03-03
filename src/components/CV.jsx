const CV = ({ data }) => {
  return (
    <>
      <button onClick={() => console.log(data.name, data.email, data.phone)}>
        Submit
      </button>
    </>
  );
};

export default CV;
