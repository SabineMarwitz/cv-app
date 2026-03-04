const Education = ({ data, updateData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form>
      <legend>Educational Experience</legend>
      <div>
        <label>Date of Study: </label>
        <input
          type='text'
          name='date'
          size='30'
          value={data.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>School Name: </label>
        <input
          type='text'
          name='school'
          size='30'
          value={data.school}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Title of Study: </label>
        <input
          type='text'
          name='study'
          size='30'
          value={data.study}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Education;
