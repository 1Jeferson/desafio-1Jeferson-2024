const recintos = [
  {
    numero: 1,
    bioma: "savana",
    tamanhoTotal: 10,
    animais: [{ especie: "MACACO", quantidade: 3, tipo: "herbivoro" }],
  },
  { numero: 2, bioma: "floresta", tamanhoTotal: 5, animais: [] },
  {
    numero: 3,
    bioma: ["savana", "rio"],
    tamanhoTotal: 7,
    animais: [{ especie: "GAZELA", quantidade: 1, tipo: "herbivoro" }],
  },
  { numero: 4, bioma: "rio", tamanhoTotal: 8, animais: [] },
  {
    numero: 5,
    bioma: "savana",
    tamanhoTotal: 9,
    animais: [{ especie: "LEAO", quantidade: 1, tipo: "carnivoro" }],
  },
];

export { recintos };
