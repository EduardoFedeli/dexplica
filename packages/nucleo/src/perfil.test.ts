import { describe, expect, it } from "vitest";
import { perfil, type StatusBase } from "./index";

// Status base das Gerações 7, 8 e 9 (não mudaram entre elas).
const gengar: StatusBase = { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 };
const lapras: StatusBase = { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 };
const blaziken: StatusBase = { hp: 80, atk: 120, def: 70, spa: 110, spd: 70, spe: 80 };
const kyogre: StatusBase = { hp: 100, atk: 100, def: 90, spa: 150, spd: 140, spe: 90 };
const garchomp: StatusBase = { hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102 };
const snorlax: StatusBase = { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 };
const charizard: StatusBase = { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 };
const metagross: StatusBase = { hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70 };

describe("Perfil: Lado", () => {
  it("Gengar é Especial (Atq. Esp. 130 contra Ataque 65)", () => {
    expect(perfil(gengar).lado).toBe("especial");
  });

  it("Kyogre é Especial (Atq. Esp. 150 contra Ataque 100)", () => {
    expect(perfil(kyogre).lado).toBe("especial");
  });

  it("Garchomp é Físico (Ataque 130 contra Atq. Esp. 80)", () => {
    expect(perfil(garchomp).lado).toBe("fisico");
  });

  it("Lapras é Misto (Ataque e Atq. Esp. iguais, 85)", () => {
    expect(perfil(lapras).lado).toBe("misto");
  });

  it("Blaziken é Misto: a diferença é 10, exatamente o limite (120 contra 110)", () => {
    expect(perfil(blaziken).lado).toBe("misto");
  });
});

// Postura: o melhor ataque contra a média de HP, Defesa e Def. Esp.; ±15 separa os três.
describe("Perfil: Postura", () => {
  it("Gengar é Ofensivo (130 contra média 65)", () => {
    expect(perfil(gengar).postura).toBe("ofensivo");
  });

  it("Blaziken é Ofensivo (120 contra média 73,3)", () => {
    expect(perfil(blaziken).postura).toBe("ofensivo");
  });

  it("Kyogre é Ofensivo (150 contra média 110)", () => {
    expect(perfil(kyogre).postura).toBe("ofensivo");
  });

  it("Lapras é Defensivo por pouco (85 contra média 101,7: −16,7)", () => {
    expect(perfil(lapras).postura).toBe("defensivo");
  });

  it("Snorlax é Equilibrado (110 contra média 111,7)", () => {
    expect(perfil(snorlax).postura).toBe("equilibrado");
  });
});

// Velocidade: 100 ou mais é Rápido; até 70 é Lento; o resto é Médio.
describe("Perfil: Velocidade", () => {
  it("Gengar é Rápido (110)", () => {
    expect(perfil(gengar).velocidade).toBe("rapido");
  });

  it("Charizard é Rápido: 100, exatamente o limite", () => {
    expect(perfil(charizard).velocidade).toBe("rapido");
  });

  it("Blaziken é Médio (80)", () => {
    expect(perfil(blaziken).velocidade).toBe("medio");
  });

  it("Metagross é Lento: 70, exatamente o limite", () => {
    expect(perfil(metagross).velocidade).toBe("lento");
  });

  it("Lapras é Lento (60)", () => {
    expect(perfil(lapras).velocidade).toBe("lento");
  });
});
