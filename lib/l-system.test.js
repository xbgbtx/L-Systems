/**
 * @jest-environment jsdom
 */

require('./l-system');

const LS = global.lsystem;

test('test expand empty grammar', () => {
    let grammar = new Map ();
    expect( LS.rewrite ( "A", grammar )).toEqual("");
});

test('test one char rewrite', () => {
    let grammar = new Map ();
    grammar.set ( "A", "B" );
    grammar.set ( "B", "A" );

    let s = "A"

    s = LS.rewrite ( s, grammar );
    expect(s).toEqual("B");
    s = LS.rewrite ( s, grammar );
    expect(s).toEqual("A");
});

test('test expand', () => {
    let grammar = new Map ();
    grammar.set ( "A", "ABA" );
    grammar.set ( "B", "BBB" );

    let s = "A"

    s = LS.rewrite ( s, grammar );
    expect(s).toEqual("ABA");
    s = LS.rewrite ( s, grammar );
    expect(s).toEqual("ABABBBABA");
});

