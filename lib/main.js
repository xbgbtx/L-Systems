//Called when the page is loaded
async function page_loaded () 
{
    console.log ( "L-Systems starting..." );

    let app = pixi_app.start ();

    let viewport = pixi_app.create_viewport ();

    let viewer = create_viewer ( viewport );

    let grammar = new lsystem.Grammar ();
    grammar.set ( "A", "ABA" );
    grammar.set ( "B", "BBB" );

    let draw_set = new Set ();
    draw_set.add ( 1 );
    draw_set.add ( 2 );
    draw_set.add ( 3 );

    display ( viewer, "A", grammar, draw_set );
}

function create_viewer ( viewport )
{
    let dctx_create = () => 
    {
        let ctx = new pixi_draw.DrawingContext ();

        viewport.addChild ( ctx.get_pixi_graphics () );

        return ctx;
    };

    let dctx_destroy = ( ctx ) => 
    {
        let g = ctx.get_pixi_graphics ();

        viewport.removeChild ( g );

        d.destroy_pixi_graphics (); 
    };

    return new lsystem.Viewer ({ dctx_create, dctx_destroy });
}

function display ( viewer, start, grammar, draw_set )
{
    let rewrite = ( s ) => lsystem.rewrite ( s, grammar ); 

    let string_interpreter = ( s ) => 
    {
        console.log ( s );

        lsystem.process ( s, ( c ) =>
        {
            console.log ( `-> ${c}` );
        });
    };

    viewer.display ( start, rewrite, string_interpreter, draw_set );
}

