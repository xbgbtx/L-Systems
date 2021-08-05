const l_system = require('./l-system');
const LSystem = l_system.LSystem;

test('test expand empty grammar', () => {
    let grammar = new Map ();
    let ls = new LSystem ( grammar );
    expect(ls.rewrite ( "A" )).toEqual("");
});

