//Called when the page is loaded
async function page_loaded () 
{
    console.log ( "L-Systems starting..." );

    let app = pixi_app.start ();

    let vp = pixi_app.create_viewport ();

    let draw_ctx = new pixi_draw.DrawingContext ();
    let g = draw_ctx.get_pixi_graphics (); 
    vp.addChild ( g );

    draw_ctx.line ( 10 );
    draw_ctx.move ( 10 );
    draw_ctx.line ( 10 );
}

