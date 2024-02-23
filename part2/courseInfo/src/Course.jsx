function Course({ course }) {
  const { name, parts } = course;

  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total courses={parts} />
    </>
  );
}

export { Course };

function Header({ course }) {
  return <h1> {course} </h1>;
}

function Total({ courses = [] }) {
  const total = courses.reduce((pv, cv) => pv + cv.exercises, 0);
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
