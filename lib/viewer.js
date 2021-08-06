( function ( lsystem )
{
    lsystem.Viewer = class
    {
        constructor ({ gctx_create, gctx_destroy })
        {
            this._gctx_create = gctx_create;
            this._gctx_destroy = gctx_destroy;
            this._gctx_pointers = [];
        }

        tear_down ()
        {
            for ( const g of this._gctx_pointers )
            {
                this._gctx_destroy ();
            }
        }

        display ( n )
        {
            this.tear_down ();

            for ( let i=0; i<n; i++ )
            {
                let g = this._gctx_create ();
                this._gctx_pointers.push ( g );
            }
        }
    }
}( window.lsystem = window.lsystem || {} ))

