( function ( lsystem )
{
    lsystem.rewrite = function ( s, grammar )
    {
        let out = "";

        for ( const c of s )
        {
            if ( grammar.has ( c ) )
                out += grammar.get ( c );
        }

        return out;
    };
}( window.lsystem = window.lsystem || {} ))

