function Search({ inputValue, setInputValue }) {
  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Search:</h1>
      <input type="text" value={inputValue} onChange={onChange} />
    </div>
  );
}

export { Search };
