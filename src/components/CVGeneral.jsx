const CVGeneral = ({ data }) => {
  return (
    <section>
      {' '}
      PERSONAL DATA:
      <p>
        {data.name} {data.email} {data.phone}
      </p>
    </section>
  );
};

export default CVGeneral;
