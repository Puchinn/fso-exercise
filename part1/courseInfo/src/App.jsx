const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const totalExercises = course.parts
    .map((course) => course.exercises)
    .reduce((pv, cv) => pv + cv);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;

function Header({ course }) {
  return <h1> {course} </h1>;
}

function Total({ total }) {
  return <p>Number of exercises {total} </p>;
}

function Content({ parts = [] }) {
  const partsList = parts.map((part) => (
    <Part key={part.name} title={part.name} count={part.exercises} />
  ));
  return <div>{partsList}</div>;
}

function Part({ title, count }) {
  return (
    <p>
      {title} {count}
    </p>
  );
}
