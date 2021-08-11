( function ( lsystem )
{
    lsystem.RenderData = class
    {
        constructor ({
            start,
            grammar
        })
        {
            this.start = start;
            this.grammar = grammar;
        };

        get_start ()
        {
            return this.start;
        }

        get_grammar ()
        {
            return this.grammar;
        }
    }

}( window.lsystem = window.lsystem || {} ))

