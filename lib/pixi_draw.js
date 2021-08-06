( function ( pixi_draw )
{
    pixi_draw.DrawingContext = class
    {
        constructor ()
        {
            this._graphics = new PIXI.Graphics ();
            this._graphics.lineStyle ( 3, 0xFF0000 );
            this._graphics.drawCircle ( 0, 0, 15 );
        }

        get_pixi_graphics ()
        {
            return this._graphics;
        }
    }

}( window.pixi_draw = window.pixi_draw || {} ))
