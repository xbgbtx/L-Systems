( function ( lsystem )
{
    lsystem.Viewer = class
    {
        constructor ({ dctx_create, dctx_destroy })
        {
            this._dctx_create = dctx_create;
            this._dctx_destroy = dctx_destroy;
            this._dctx_pointers = [];
        }

        get_dctx_pointers ()
        {
            return this._dctx_pointers;
        }

        tear_down ()
        {
            for ( const g of this._dctx_pointers )
            {
                this._dctx_destroy (g);
            }

            this._dctx_pointers = [];
        }

        _construct_dctx ( n )
        {
            for ( let i=0; i<n; i++ )
            {
                let g = this._dctx_create ();
                this._dctx_pointers.push ( g );
            }
        }

        display ( start, rewrite, string_interpreter, draw_set )
        {
            this.tear_down ();
            this._construct_dctx ( draw_set.size );
            let max_gen = Math.max ( ...Array.from(draw_set));

            let s = start;

            for ( let i=0; i<max_gen; i++ )
            {
                let g = i+1;

                if ( draw_set.has ( g ) )
                {
                    string_interpreter ();
                }

                if ( g < max_gen )
                    s = rewrite ( s );
            }
        }
    }
}( window.lsystem = window.lsystem || {} ))

