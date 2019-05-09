const logic = {
  family: [
    {
      name: "Wilbur",
      alive: true
    },
    {
      name: "Mabel",
      alive: true
    },
    {
      name: "Walter",
      alive: true
    },
    {
      name: "Eunice",
      alive: true
    },
    {
      name: "Enos",
      alive: true
    },
    {
      name: "Winifred",
      alive: true
    }
  ],
  images: {
    events: [
      {
        url: "/img/event_river.gif",
        alt: "River",
        msg: "You reached a river. Guess a letter correctly to cross."
      },
      {
        url: "/img/event_forest.gif",
        alt: "Forest",
        msg: "You arrive at a forest. Guess a letter to hunt for food."
      },
      {
        url: "/img/event_fort.gif",
        alt: "Fort",
        msg: "You happen upon a fort. Guess a letter to resupply."
      }
    ]
  },
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
  colorStatus: {
    available: "lime",
    unavailable: "#3f3f3f"
  },
  chooseEvent: () => {
    return logic.images.events[
      Math.floor(Math.random() * logic.images.events.length)
    ];
  },
  chooseWord: () => {
    return logic.words[Math.floor(Math.random() * logic.words.length)]
      .toUpperCase()
      .split("");
  },
  displayWord: (word, selectedLetters) => {
    return word.map(letter =>
      selectedLetters.indexOf(letter) > -1 ? letter : "-"
    );
  }
};

export default logic;
