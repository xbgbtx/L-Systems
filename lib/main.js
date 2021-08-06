//Called when the page is loaded
async function page_loaded () 
{
    console.log ( "L-Systems starting..." );

    let s = "A";
    let grammar = new lsystem.Grammar ();
    grammar.set ( "A", "ABA" );
    grammar.set ( "B", "BBB" );

    for ( let i = 0; i < 10; i++ )
    {
        s = lsystem.rewrite ( s, grammar );
        console.log ( s );
    }

}

