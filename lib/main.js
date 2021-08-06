//Called when the page is loaded
async function page_loaded () 
{
    console.log ( "L-Systems starting..." );

    let app = pixi_app.start ();

    let vp = pixi_app.create_viewport ();

    let drawCtx = new pixi_draw.DrawingContext ();
    let g = drawCtx.get_pixi_graphics () 
    vp.addChild ( g );
}

function create_viewport ( app )
{
}

