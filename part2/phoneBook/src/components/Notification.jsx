function Notification({ message = {} }) {
  const styles = {
    color: message.error ? "red" : "green",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  if (!message.text) return null;
  return <div style={styles}>{message.text}</div>;
}

export { Notification };
