import { StatisticLine } from "./StatisticLine";

function Statistics({ statistics }) {
  const allVotes = statistics.good + statistics.neutral + statistics.bad;
  const average = (((statistics.good - statistics.bad) * 1) / allVotes).toFixed(
    2
  );

  const positive = ((statistics.good * 100) / allVotes).toFixed(2) || 0;

  return (
    <div>
      <h1>Statistics</h1>
      {allVotes === 0 ? (
        <p> no feedback given </p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text={"good"} value={statistics.good} />
            <StatisticLine text={"neutral"} value={statistics.neutral} />
            <StatisticLine text={"bad"} value={statistics.bad} />
            <StatisticLine text={"average"} value={average} />
            <StatisticLine text={"positive"} value={positive + "%"} />
          </tbody>
        </table>
      )}
    </div>
  );
}

export { Statistics };
