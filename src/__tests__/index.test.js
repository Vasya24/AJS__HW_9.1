import { Daemon } from '../daemon'

test('Attack test', () => {
    let a = new Daemon('Vasiliy');
    a.power = 2;
    a.stoned = 2;
    expect(a.attack).toBe(85)
})