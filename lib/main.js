//Called when the page is loaded
async function page_loaded () 
{
    console.log ( "L-Systems starting..." );

    let app = pixi_app.start ();

    lsystem_dom.show_lsystem_menu ();

    let viewport = pixi_app.create_viewport ();

    let renderer = create_viewer ( viewport );

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

    let render_data = new lsystem.RenderData ({
        start,
        grammar,
        gen_draw_set
    });

    display ( renderer, render_data );
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

function display ( renderer, render_data )
{
    let rewrite = ( s ) => lsystem.rewrite ( s, render_data.grammar ); 

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

    renderer.display ( 
        render_data.get_start (), 
        rewrite, 
        string_interpreter,
        render_data.get_gen_draw_set (),
        succ_transform
    );
}

