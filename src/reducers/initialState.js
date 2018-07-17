export default {
  recipes: {
    byId: {
      1: {
        id: 1,
        title: "Korean Tteok",
        prep: 15,
        ingredients: [1, 2, 3, 4, 5, 6],
        equipment: [1, 2],
        steps: [1, 2, 3],
        hints: [1, 2],
      },
      2: {
        id: 2,
        title: "Korean Chicken Tacos",
        prep: 20,
        ingredients: [3, 7, 8, 9, 10],
        equipment: [3, 4],
        steps: [4, 5, 6, 7],
        hints: [1, 3],
      },
      3: {
        id: 3,
        title: "Spicy Smoked Trout Sandwiches",
        prep: 60,
        ingredients: [9, 11, 12, 13],
        equipment: [5],
        steps: [8, 9],
        hints: [4],
      },
    },
    allIds: [1, 2, 3],
  },
  ingredients: {
    byId: {
      1: { id: 1, text: "yellow onion", quantity: "1x" },
      2: { id: 2, text: "piece ginger", quantity: "1x piece" },
      3: { id: 3, text: "Gochujang", quantity: "1 tbsp" },
      4: { id: 4, text: "white rice", quantity: "3/4 cup" },
      5: { id: 5, text: "vegetable oil", quantity: "1 tbsp" },
      6: { id: 6, text: "water", quantity: "1 1/2 cups" },

      7: { id: 7, text: "chopped chicken breast", quantity: "10 oz" },
      8: { id: 8, text: "flour tortillas", quantity: "4" },
      9: { id: 9, text: "sweet potato", quantity: "1 lb" },
      10: { id: 10, text: "black bean sauce", quantity: "2 tbsp" },

      11: { id: 11, text: "smoked trout fillet", quantity: "2" },
      12: { id: 12, text: "ciabatta rolls", quantity: "2" },
      13: { id: 13, text: "½ lb Cabbage", quantity: "1/2 lb" },
    },
    allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
  equipment: {
    byId: {
      1: {
        id: 1,
        name: "Rice Cooker",
      },
      2: {
        id: 2,
        name: "Large Wok",
      },
      3: {
        id: 3,
        name: '11" saucepan',
      },
      4: {
        id: 4,
        name: "quater sheet pan",
      },
      5: {
        id: 5,
        name: "cutting board",
      },
    },

    allIds: [1, 2, 3, 4, 5],
  },
  hints: {
    byId: {
      1: {
        title: "Gochujang",
        description:
          "Gochujang or red chili paste is a savory, sweet, and spicy fermented condiment made from chili powder, glutinous rice, meju powder, yeotgireum, and salt",
      },
      2: {
        title: "Rice Cooker",
        description:
          "A rice cooker or rice steamer is an automated kitchen appliance designed to boil or steam rice. It consists of a heat source, a cooking bowl, and a thermostat. The thermostat measures the temperature of the cooking bowl and controls the heat.",
      },
      3: {
        title: "Furikake",
        description:
          "Furikake, a Japanese seasoning, is a delicious blend of ingredients that can add depth of flavor to just about any savory dish.",
      },
      4: {
        title: "Red Wine Vinegar",
        description:
          "Like all wine vinegars, red wine vinegar is created by allowing wine to ferment, leading to the development of acetic acid.",
      },
    },
    allIds: [1, 2, 3, 4],
  },
  steps: {
    byId: {
      1: {
        id: 1,
        text:
          "Peel and small dice the onion. Peel and mince the ginger. Preheat the wok with vegetable oil.",
      },
      2: {
        id: 2,
        text:
          "Add the ginger, onion. Cook, stirring occasionally, 2 to 3 minutes, or until softened and fragrant.",
      },
      3: {
        id: 3,
        text: "Add 1 1/2 cups water, and all of the rice to the rice cooker.",
      },
      4: {
        id: 4,
        text: "Prepare & roast the sweet potato",
      },
      5: {
        id: 5,
        text: "Prepare & season the cabbage",
      },
      6: {
        id: 6,
        text: "Cook the chicken & add the sauce",
      },
      7: {
        id: 7,
        text: "Assemble the tacos & serve your dish",
      },
      8: {
        id: 8,
        text: "Flake & dress the fish",
      },
      9: {
        id: 9,
        text: "Assemble the sandwiches & serve your dish",
      },
    },
    allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  filter: {
    ingredients: [],
    equipment: [],
    prep: {},
  },
};
