const logic = {
  words: [
    "dysentery",
    "snakebite",
    "hunting",
    "river",
    "goldrush",
    "wagon",
    "buffalo",
    "measles",
    "exhaustion",
    "typhoid",
    "cholera",
    "exploration",
    "cavalry",
    "mountains",
    "funeral",
    "pioneer",
    "independence",
    "yukon"
  ],
  chooseWord: () => {
    return logic.words[Math.floor(Math.random() * logic.words.length)].split(
      ""
    );
  }
};

export default logic;
