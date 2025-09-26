const Person = ({ person }) => {
  if (!person) {
    return "";
  }

  return (
    <>
      <h1>Random person</h1>

      <ul>
        <li>{person.first_name}</li>
        <li>{person.last_name}</li>
        <li>{person.email}</li>
        <img src={person.picture.large} alt="picture" />
      </ul>
    </>
  );
};

export default Person;
