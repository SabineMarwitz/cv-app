const CVExperience = ({ data }) => {
  return (
    <section>
      {' '}
      PRACTICAL EXPERIENCE:
      <ul>
        {data.map((item) => (
          <li key={item.date}>
            {item.date} {item.company} {item.position} {item.responsibilities}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CVExperience;
