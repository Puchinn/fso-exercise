function errorHanddling(err, req, res) {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
}

export { errorHanddling };
