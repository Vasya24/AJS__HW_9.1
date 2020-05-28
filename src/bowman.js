import { Character } from './index'

class Bowman extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.defence = 25
  }
}

export { Bowman }  