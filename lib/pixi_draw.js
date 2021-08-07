( function ( pixi_draw )
{
    pixi_draw.DrawingContext = class
    {
        constructor ()
        {
            this._graphics = new PIXI.Graphics ();
            this._graphics.lineStyle ( 1, 0xFF0000 );

            this.x = 0;
            this.y = 0;
        }

        get_pixi_graphics ()
        {
            return this._graphics;
        }

        destroy_pixi_graphics ()
        {
            this._graphics.destroy ();
        }

        move ( len )
        {
            this.x += len;
        }

        line ( len )
        {
            this._graphics.moveTo ( this.x, this.y );
            this._graphics.lineTo ( this.x+len, this.y );

            this.move ( len );
        }
    }

}( window.pixi_draw = window.pixi_draw || {} ))
