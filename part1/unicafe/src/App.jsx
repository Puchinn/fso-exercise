import { useState } from "react";
import { Statistics } from "./Statistics";
import { Button } from "./Button";

function App() {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const voteGood = () => {
    setStatistics({
      ...statistics,
      good: statistics.good + 1,
    });
  };

  const voteNeutral = () => {
    setStatistics({
      ...statistics,
      neutral: statistics.neutral + 1,
    });
  };

  const voteBad = () => {
    setStatistics({
      ...statistics,
      bad: statistics.bad + 1,
    });
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={voteGood}>good</Button>
      <Button onClick={voteNeutral}>neutral</Button>
      <Button onClick={voteBad}>bad</Button>
      <Statistics statistics={statistics} />
    </div>
  );
}

export default App;
