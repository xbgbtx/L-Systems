/**
 * @jest-environment jsdom
 */

require('./l-system');

const LS = global.lsystem;

test('test expand empty grammar', () => {
    let grammar = new Map ();
    expect( LS.expand ( "A", grammar )).toEqual("");
});

/*
const LSystem = l_system.LSystem;

test('test expand empty grammar', () => {
    let grammar = new Map ();
    let ls = new LSystem ( grammar );
    expect(ls.rewrite ( "A" )).toEqual("");
});

test('test one char rewrite', () => {
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


test('test expand', () => {
    let grammar = new Map ();
    grammar.set ( "A", "ABA" );
    grammar.set ( "B", "BBB" );

    let ls = new LSystem ( grammar );
    let s = "A"

    s = ls.rewrite ( s );
    expect(s).toEqual("ABA");
    s = ls.rewrite ( s );
    expect(s).toEqual("ABABBBABA");
});

*/
