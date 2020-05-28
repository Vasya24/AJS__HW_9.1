import { Bowman } from '../bowman';
import { Swordsman } from '../swordsman';
import { Undead } from '../undead';
import { Zombie } from '../zombie';
import { Magician } from '../magician';
import { Daemon } from '../daemon'

const v1 = new Bowman('Арбалетчик');
test('First', () => {
    expect(v1.attack).toEqual(v1.defence)
});

const v2 = new Swordsman('Мечник');
test('Second', () => {
    expect(v2.defence).toBeLessThan(30)
});

const v3 = new Undead('Скелет');
test('Third', () => {
    expect(v3.defence).toBeGreaterThanOrEqual(v3.attack);
})

const v4 = new Zombie('Живой труп');
test('Fourth', () =>{
    expect(v4.attack).toBeLessThanOrEqual(40);
})

const v5 = new Magician('Монах');
test('Fifth', () => {
    expect(v5.attack).not.toBe(15)
})

const v6 = new Daemon('Ифрит');
test('Sixth', () => {
    expect(v6.defence).not.toEqual(v6.attack)
})