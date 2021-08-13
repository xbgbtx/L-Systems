//Pointer to object contanining app execution data.
let lsystem_app;

//Called when the page is lletoaded
async function page_loaded () 
{
    console.log ( "L-Systems starting..." );

    pixi_app.start ();
    let viewport = pixi_app.create_viewport ();
    
    let draw_ctx_actions = get_draw_ctx_actions ( viewport );

    lsystem_app = new lsystem.LSystemApp ( draw_ctx_actions );

    let render_data = get_cantor_render_data ();

    lsystem_app.display_lsystem ( render_data );
    lsystem_dom.show_lsystem_menu ( render_data );
}

//Function pointers to create and destroy the 'drawing context' that
//is used to render L-Systems.  L Systems rendering uses this drawing
//context code so that the rendering library can potentially be swapped.
function get_draw_ctx_actions ( viewport )
{
    let ctx_actions = {
        dctx_create : () =>
        {
            let ctx = new pixi_draw.DrawingContext ();
            viewport.addChild ( ctx.get_pixi_graphics () );
            return ctx;
        },

        dctx_destroy : ( ctx ) =>
        {
            let g = ctx.get_pixi_graphics ();
            viewport.removeChild ( g );
            ctx.destroy_pixi_graphics (); 
        }
    };

    return ctx_actions;
}

function ui_button_click ( button_id )
{
    lsystem_dom.ui_button_click ( button_id );
}

function get_cantor_render_data ()
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


