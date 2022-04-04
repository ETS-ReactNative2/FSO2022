const Search = (props) => {
  const { value, handleOnChange } = props;

  return (
    <div>
      find countries
      <input type="text" value={value} onChange={handleOnChange} />
    </div>
  );
};

export default Search