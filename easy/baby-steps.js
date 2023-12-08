console.log(
  process.argv.reduce((acc, cur, i) => (i > 1 ? acc + parseInt(cur) : acc), 0)
);
