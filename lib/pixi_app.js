( function ( pixi_app )
{
    let app, update;

    pixi_app.start = function ()
    {
        let canvas_div = document.getElementById ( "canvas_div" );
        let canvas = document.getElementById ( "pixi_canvas" );
        let type="WebGL";

        if ( !PIXI.utils.isWebGLSupported () )
        {
            type = "canvas";
        }

        PIXI.utils.sayHello ( type );

        app = new PIXI.Application ({ 
            view:  canvas,
            resizeTo: canvas_div 
        });

        PIXI.settings.RESOLUTION = window.devicePixelRatio;
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        app.ticker.add ( () =>
        {
            if ( update != null )
                update ();
        });

        return app;
    }

    pixi_app.set_update = function ( f )
    {
        update = f;
    }
}( window.pixi_app = window.pixi_app || {} ))

