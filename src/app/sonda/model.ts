export class Posicao {
    x: number;
    y: number;
  }
  
  export class Planalto {
    x: number;
    y: number;
  }
  
  export class Sonda {
    posicao = new Posicao();
    planalto = new Planalto();
    direcaoCardinal: string;
    entrada: string;
  }