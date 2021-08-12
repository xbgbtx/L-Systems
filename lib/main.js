//Pointer to object contanining app execution data.
let lsystem_app;

//Called when the page is lletoaded
async function page_loaded () 
{
    console.log ( "L-Systems starting..." );

    pixi_app.start ();
    let viewport = pixi_app.create_viewport ();

    lsystem_app = new lsystem.LSystemApp ( viewport );

    lsystem_dom.show_lsystem_menu ();

    let render_data = get_cantor_render_data ();

    lsystem_app.display_lsystem ( render_data );
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


