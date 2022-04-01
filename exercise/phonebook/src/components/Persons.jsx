const Persons = ({ list }) => {
  const output = list.map((person) => (
    <p key={person.id}>
      {person.name} {person.number}
    </p>
  ));
  return output;
};

export default Persons;
