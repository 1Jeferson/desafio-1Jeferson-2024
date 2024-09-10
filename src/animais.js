const especiesPermitidas = [
  "LEAO",
  "LEOPARDO",
  "CROCODILO",
  "MACACO",
  "GAZELA",
  "HIPOPOTAMO",
];

const atributosAnimais = {
  LEAO: { tamanho: 3, bioma: "savana", tipo: "carnivoro" },
  LEOPARDO: { tamanho: 2, bioma: "savana", tipo: "carnivoro" },
  CROCODILO: { tamanho: 3, bioma: "rio", tipo: "carnivoro" },
  MACACO: { tamanho: 1, bioma: ["savana", "floresta"], tipo: "herbivoro" },
  GAZELA: { tamanho: 2, bioma: "savana", tipo: "herbivoro" },
  HIPOPOTAMO: { tamanho: 4, bioma: ["savana", "rio"], tipo: "herbivoro" },
};

export { especiesPermitidas, atributosAnimais };
