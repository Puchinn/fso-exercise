function Country({ data = {} }) {
  const { name, capital, area, languages, flags } = data;

  return (
    <div>
      <h1> {name.common}</h1>
      <p>capital {capital[0]}</p>
      <p>area {area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(languages).map((lang) => (
          <li key={lang}> {lang} </li>
        ))}
      </ul>
      <img src={flags.png} alt={flags.alt} />
    </div>
  );
}

export { Country };
