( function ( lsystem )
{
    lsystem.get_preset = function ( preset_name )
    {
        switch ( preset_name )
        {
            case "cantor" :
                return cantor_data ();
                break;

            case "dragon" :
                return dragon_data ();
                break;
        }
    }

    let cantor_data = function ()
    {
        let start = "A";

        let grammar = new lsystem.Grammar ();
        grammar.set ( "A", "ABA" );
        grammar.set ( "B", "BBB" );

        let gen_draw_set = new Set ();
        gen_draw_set.add ( 1 );
        gen_draw_set.add ( 2 );
        gen_draw_set.add ( 3 );
        gen_draw_set.add ( 4 );
        gen_draw_set.add ( 5 );
        gen_draw_set.add ( 6 );
        gen_draw_set.add ( 7 );

        return new lsystem.RenderData ({
            start,
            grammar,
            gen_draw_set
        });
    }

    let dragon_data = function ()
    {
        let start = "A";

        let grammar = new lsystem.Grammar ();
        grammar.set ( "A", "ABA" );
        grammar.set ( "B", "BBB" );

        let gen_draw_set = new Set ();
        gen_draw_set.add ( 1 );
        gen_draw_set.add ( 2 );
        gen_draw_set.add ( 3 );
        gen_draw_set.add ( 4 );
        gen_draw_set.add ( 5 );
        gen_draw_set.add ( 6 );
        gen_draw_set.add ( 7 );

        return new lsystem.RenderData ({
            start,
            grammar,
            gen_draw_set
        });
    }

}( window.lsystem = window.lsystem || {} ))
