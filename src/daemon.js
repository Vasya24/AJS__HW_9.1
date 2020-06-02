import { Character } from './index'
class Daemon extends Character {
  constructor(name) {
    super(name);
    this.attack = 100;
    this.defence = 40;
  }
  set power(s) {
    if (s === 2) {
   this.attack -= this.attack/100*10
} else if (s===3) {
 this.attack -= this.attack/100*20
} else if (s===4) {
 this.attack -= this.attack/100*30
} else if (s===5) {
 this.attack -= this.attack/100*40
} else if (s===6) {
 this.attack -= this.attack/100*50
} else if (s===7) {
 this.attack = this.attack/100*60
} else if (s===8) {
 this.attack -= this.attack/100*70
} else if (s===9) {
 this.attack -= this.attack/100*80
} else if (s===10) {
 this.attack -= this.attack/100*90
} else {
 this.attack = Math.ceil(Math.random()*10)
}
 }
 get power() {
   return this.attack 
 }

 set stoned(s) {
  this.attack = this.attack - Math.log2(s) * 5
}
}

  export { Daemon }
