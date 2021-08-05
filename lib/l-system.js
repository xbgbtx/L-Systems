( function ( lsystem )
{
    lsystem.expand = function ( s, grammar )
    {
        return "";
    };
}( window.lsystem = window.lsystem || {} ))

/*
class LSystem
{
    constructor ( grammar ) 
    {
        this.grammar = grammar;
    }

    rewrite ( s )
    {
        let out = "";

        for ( const c of s )
        {
            if ( this.grammar.has ( c ) )
                out += this.grammar.get(c)
        }

        return out;
    }
}

module.exports = {
    LSystem : LSystem
}
*/
