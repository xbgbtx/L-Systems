( function ( lsystem )
{
    lsystem.RenderData = class
    {
        constructor ({
            grammar
        })
        {
            this.grammar = grammar;
        };

        get_grammar ()
        {
            return this.grammar;
        }
    }

}( window.lsystem = window.lsystem || {} ))

