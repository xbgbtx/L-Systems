( function ( pixi_app )
{
    let app, update, viewport;

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

    pixi_app.create_viewport = function ()
    {
        viewport = new pixi_viewport.Viewport({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            worldWidth: 1024,
            worldHeight: 1024
        });

        viewport
            .drag ()
            .pinch ()
            .wheel ()
            .decelerate ();

        app.stage.addChild(viewport);

        viewport.snap ( -512, -512 );

        return viewport;
    }
}( window.pixi_app = window.pixi_app || {} ))

