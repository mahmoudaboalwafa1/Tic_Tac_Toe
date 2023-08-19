const LogicComputer = (randoms) => {
  let num = null;
  for (let i = 0; i < randoms.length; i++) {
    randoms[i] === 0
      ? (num = 2)
      : randoms[i] === 1
      ? (num = 1)
      : randoms[i] === 2
      ? (num = 2)
      : randoms[i] === 3
      ? (num = 3)
      : "";
  }

  console.log(num);
};

export default LogicComputer;
