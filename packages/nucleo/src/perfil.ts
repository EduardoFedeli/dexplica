// Perfil: o que os status base de um Pokémon favorecem, sem olhar Build nem Time (RF05).
// Os valores são códigos; o texto que a pessoa lê mora no arquivo de textos do app (RNF07).

export type StatusBase = {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
};

export type Lado = "fisico" | "especial" | "misto";
export type Postura = "ofensivo" | "defensivo" | "equilibrado";
export type Velocidade = "rapido" | "medio" | "lento";

export type Perfil = {
  lado: Lado;
  postura: Postura;
  velocidade: Velocidade;
};

export function perfil(status: StatusBase): Perfil {
  // Lado: Ataque e Atq. Esp. com diferença de até 10 é Misto; senão, vence o maior.
  const lado: Lado =
    Math.abs(status.atk - status.spa) <= 10 ? "misto" : status.atk > status.spa ? "fisico" : "especial";

  // Postura: o melhor ataque contra a média de HP, Defesa e Def. Esp.; ±15 separa os três.
  const ataque = Math.max(status.atk, status.spa);
  const defesa = (status.hp + status.def + status.spd) / 3;
  const postura: Postura =
    ataque - defesa > 15 ? "ofensivo" : ataque - defesa < -15 ? "defensivo" : "equilibrado";

  // Velocidade: 100 ou mais é Rápido; até 70 é Lento; o resto é Médio.
  const velocidade: Velocidade = status.spe >= 100 ? "rapido" : status.spe <= 70 ? "lento" : "medio";

  return { lado, postura, velocidade };
}
