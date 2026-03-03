const Experience = ({ data, updateData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ ...data, [name]: value });
  };

  return (
    <form>
      <legend>Practical Experience</legend>
      <div>
        <label>Company Name: </label>
        <input
          type='text'
          name='company'
          size='30'
          value={data.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Title of Position: </label>
        <input
          type='text'
          name='position'
          size='30'
          value={data.position}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Main responsibilities: </label>
        <input
          type='text'
          name='resposibilities'
          size='30'
          value={data.resposibilities}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date from to: </label>
        <input
          type='text'
          name='date'
          size='30'
          value={data.date}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Experience;
