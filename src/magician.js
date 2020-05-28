import { Character } from './index'

class Magician extends Character {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.defence = 40;
  }
}

  export { Magician }