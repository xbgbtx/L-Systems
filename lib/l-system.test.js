const l_system = require('./l-system');
const LSystem = l_system.LSystem;

test('test expand empty grammar', () => {
    let grammar = new Map ();
    let ls = new LSystem ( grammar );
    expect(ls.rewrite ( "A" )).toEqual("");
});

test('test one rewrite', () => {
    let grammar = new Map ();
    grammar.set ( "A", "B" );
    grammar.set ( "B", "A" );

    let ls = new LSystem ( grammar );
    let s = "A"

    s = ls.rewrite ( s );
    expect(s).toEqual("B");
    s = ls.rewrite ( s );
    expect(s).toEqual("A");
});
