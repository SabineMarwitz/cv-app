const CVEducation = ({ data }) => {
  return (
    <section>
      {' '}
      EDUCATIONAL EXPERIENCE:
      <ul>
        {data.map((item) => (
          <li key={item.date}>
            {item.date} {item.school} {item.study}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CVEducation;
