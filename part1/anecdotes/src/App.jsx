import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

function App() {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([]);

  const selectRandom = () => {
    setSelected((Math.random() * (anecdotes.length - 1)).toFixed(0));
  };

  const vote = () => {
    const foundedAnecdote = votes.find(
      (anecdote) => anecdote.text === anecdotes[selected]
    );
    if (foundedAnecdote) {
      const addedVote = {
        ...foundedAnecdote,
        votes: foundedAnecdote.votes + 1,
      };
      setVotes(votes.map((a) => (a.text === addedVote.text ? addedVote : a)));
    } else {
      const anecdote = {
        text: anecdotes[selected],
        votes: 1,
      };
      setVotes([...votes, anecdote]);
    }
  };

  const anecdoteVotes =
    votes.find((anecdote) => anecdote.text === anecdotes[selected])?.votes || 0;

  const mostVotedAnecdote = votes.sort((a, b) => b?.votes - a?.votes)[0];

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> {anecdotes[selected]} </p>
      <p>has : {anecdoteVotes} votes</p>
      <button onClick={selectRandom}>next anecdote</button>
      <button onClick={vote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p> {mostVotedAnecdote?.text || ""} </p>
      <p>{mostVotedAnecdote ? `has ${mostVotedAnecdote.votes} votes` : ""}</p>
    </div>
  );
}

export default App;
