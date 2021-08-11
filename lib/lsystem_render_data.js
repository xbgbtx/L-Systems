( function ( lsystem )
{
    lsystem.RenderData = class
    {
        constructor ({
            start,
            grammar,
            gen_draw_set
        })
        {
            this.start = start;
            this.grammar = grammar;
            this.gen_draw_set = gen_draw_set;
        };

        get_start ()
        {
            return this.start;
        }

        get_grammar ()
        {
            return this.grammar;
        }

        get_gen_draw_set ()
        {
            return this.gen_draw_set;
        }
    }

}( window.lsystem = window.lsystem || {} ))

