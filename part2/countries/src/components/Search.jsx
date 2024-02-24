function Search({ inputValue, setInputValue }) {
  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h3>Search:</h3>
      <input type="text" value={inputValue} onChange={onChange} />
    </div>
  );
}

export { Search };
