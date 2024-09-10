import { atributosAnimais, especiesPermitidas } from "./animais.js";
import { recintos } from "./recintos.js";

class RecintosZoo {
  constructor() {
    this._recintos = recintos;
  }

  analisaRecintos(especie, quantidade) {
    if (isNaN(quantidade) || quantidade <= 0) {
      return { erro: "Quantidade inválida", recintosViaveis: null };
    }

    if (!especiesPermitidas.includes(especie)) {
      return { erro: "Animal inválido", recintosViaveis: null };
    }

    const { tamanho, bioma, tipo } = atributosAnimais[especie];
    const recintosViaveis = [];

    this._recintos.forEach((recinto) => {
      const biomaAdequado = Array.isArray(recinto.bioma)
        ? Array.isArray(bioma)
          ? bioma.some((b) => recinto.bioma.includes(b))
          : recinto.bioma.includes(bioma)
        : Array.isArray(bioma)
        ? bioma.includes(recinto.bioma)
        : recinto.bioma === bioma;

      if (biomaAdequado) {
        let semelhanca = true;

        if (tipo === "carnivoro") {
          const temCarnivoros = recinto.animais.some(
            (animalAtual) => animalAtual.tipo === "carnivoro"
          );
          const temHerbivoros = recinto.animais.some(
            (animalAtual) => animalAtual.tipo === "herbivoro"
          );

          if (temHerbivoros) {
            semelhanca = false;
          } else {
            semelhanca = temCarnivoros
              ? recinto.animais.every(
                  (animalAtual) => animalAtual.tipo === "carnivoro"
                )
              : true;
          }
        } else {
          const temCarnivoros = recinto.animais.some(
            (animalAtual) => animalAtual.tipo === "carnivoro"
          );
          semelhanca = !temCarnivoros;
        }

        if (semelhanca) {
          const espacoOcupado = recinto.animais.reduce(
            (totalEspacoOcupado, animalAtual) =>
              totalEspacoOcupado +
              animalAtual.quantidade *
                atributosAnimais[animalAtual.especie].tamanho,
            0
          );

          const espacoRequirido = tamanho * quantidade;
          const espacoExtra = recinto.animais.some(
            (animalAtual) => animalAtual.especie !== especie
          )
            ? 1
            : 0;
          const espacoTotalNecessario = espacoRequirido + espacoExtra;

          const espacoDisponivel = recinto.tamanhoTotal - espacoOcupado;

          if (espacoDisponivel >= espacoTotalNecessario) {
            recintosViaveis.push(
              `Recinto ${recinto.numero} (espaço livre: ${
                espacoDisponivel - espacoTotalNecessario
              } total: ${recinto.tamanhoTotal})`
            );
          }
        }
      }
    });

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável", recintosViaveis: null };
    }

    return { erro: null, recintosViaveis };
  }
}

export { RecintosZoo as RecintosZoo };
