//Called when the page is loaded
async function page_loaded () 
{
    console.log ( "L-Systems starting..." );

    let app = pixi_app.start ();

    lsystem_dom.show_lsystem_menu ();

    let viewport = pixi_app.create_viewport ();

    let viewer = create_viewer ( viewport );

    let grammar = new lsystem.Grammar ();
    grammar.set ( "A", "ABA" );
    grammar.set ( "B", "BBB" );

    let draw_set = new Set ();
    draw_set.add ( 1 );
    draw_set.add ( 2 );
    draw_set.add ( 3 );
    draw_set.add ( 4 );
    draw_set.add ( 5 );
    draw_set.add ( 6 );
    draw_set.add ( 7 );

    display ( viewer, "A", grammar, draw_set );
}

function ui_button_click ( button_id )
{
    lsystem_dom.ui_button_click ( button_id );
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

    return new lsystem.Renderer ({ dctx_create, dctx_destroy });
}

function display ( viewer, start, grammar, draw_set )
{
    let rewrite = ( s ) => lsystem.rewrite ( s, grammar ); 

    let string_interpreter = ( draw_ctx, s ) => 
    {
        lsystem.process ( s, ( c ) =>
        {
            switch ( c )
            {
                case "A" : 
                    draw_ctx.line ( 100 );
                    break; 
                case "B" : 
                    draw_ctx.move ( 100 );
                    break; 
            }
        });
    };

    succ_transform = ( draw_ctx, gen ) =>
    {
        let g = draw_ctx.get_pixi_graphics ();
        g.position.y += 10 * gen;
        g.scale.x = 1/Math.pow(3,gen);
    };

    viewer.display ( start, rewrite, string_interpreter, draw_set,
                     succ_transform );
}

