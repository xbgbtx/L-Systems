//Called when the page is loaded
async function page_loaded () 
{
    console.log ( "L-Systems starting..." );

    let app = pixi_app.start ();

    let drawCtx = new pixi_draw.DrawingContext ();
    app.stage.addChild ( drawCtx.get_pixi_graphics () );
}

