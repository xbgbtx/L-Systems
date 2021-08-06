/**
 * @jest-environment jsdom
 */

require('./viewer');

const LS = global.lsystem;

test ( "construct a viewer", () =>
{
    let gctx_create = jest.fn ();

    let g1 = { id: 1 };
    let g2 = { id: 2 };
    let g3 = { id: 3 };

    gctx_create.mockReturnValueOnce ( g1 );
    gctx_create.mockReturnValueOnce ( g2 );
    gctx_create.mockReturnValueOnce ( g3 );

    let gctx_destroy = jest.fn ();

    let v = new LS.Viewer ({gctx_create, gctx_destroy});

    v.display ( 3 );

    expect ( gctx_create ).toHaveBeenCalledTimes ( 3 );
    expect ( gctx_destroy ).not.toHaveBeenCalled ();

    expect ( v.get_gctx_pointers () ).toEqual ( [ g1, g2, g3 ] );

    v.display ( 3 );

    expect ( gctx_create ).toHaveBeenCalledTimes ( 6 );
    expect ( gctx_destroy ).toHaveBeenCalledTimes ( 3 );

    expect ( gctx_destroy ).toHaveBeenNthCalledWith ( 1, g1 );
    expect ( gctx_destroy ).toHaveBeenNthCalledWith ( 2, g2 );
    expect ( gctx_destroy ).toHaveBeenNthCalledWith ( 3, g3 );
});
