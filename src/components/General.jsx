import '../styles/General.css';

const General = ({ data, updateData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form>
      <legend>General Information</legend>
      <div>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          size='30'
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>E-Mail: </label>
        <input
          type='email'
          name='email'
          size='30'
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone: </label>
        <input
          type='tel'
          name='phone'
          size='30'
          value={data.phone}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default General;
