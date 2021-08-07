/**
 * @jest-environment jsdom
 */

require('./viewer');

const LS = global.lsystem;

test ( "construct a viewer", () =>
{
    let start = "A";
    let symbol_interpreter = jest.fn ();
    let rewrite = jest.fn ();

    let dctx_create = jest.fn ();

    let d1 = { id: 1 };
    let d2 = { id: 2 };
    let d3 = { id: 3 };

    dctx_create.mockReturnValueOnce ( d1 );
    dctx_create.mockReturnValueOnce ( d2 );
    dctx_create.mockReturnValueOnce ( d3 );
    dctx_create.mockReturnValueOnce ( d1 );
    dctx_create.mockReturnValueOnce ( d2 );
    dctx_create.mockReturnValueOnce ( d3 );

    let dctx_destroy = jest.fn ();

    let v = new LS.Viewer ({dctx_create, dctx_destroy});

    v.display ( start, rewrite, symbol_interpreter, 3 );

    expect ( dctx_create ).toHaveBeenCalledTimes ( 3 );
    expect ( dctx_destroy ).not.toHaveBeenCalled ();

    expect ( v.get_dctx_pointers () ).toEqual ( [ d1, d2, d3 ] );

    v.display ( start, rewrite, symbol_interpreter, 3 );

    expect ( v.get_dctx_pointers () ).toEqual ( [ d1, d2, d3 ] );

    expect ( dctx_create ).toHaveBeenCalledTimes ( 6 );
    expect ( dctx_destroy ).toHaveBeenCalledTimes ( 3 );

    expect ( dctx_destroy ).toHaveBeenNthCalledWith ( 1, d1 );
    expect ( dctx_destroy ).toHaveBeenNthCalledWith ( 2, d2 );
    expect ( dctx_destroy ).toHaveBeenNthCalledWith ( 3, d3 );

    v.tear_down ();

    expect ( v.get_dctx_pointers () ).toEqual ( [] );
});

test ( "display func calls interpreter funcs with dctx array", ()=>
{
    let start = "A";
    let symbol_interpreter = jest.fn ();
    let rewrite = jest.fn ();

    rewrite.mockReturnValueOnce ( "AB" );
    rewrite.mockReturnValueOnce ( "ABC" );

    let dctx_create = jest.fn ();

    let d1 = { id: 1 };
    let d2 = { id: 2 };
    let d3 = { id: 3 };

    dctx_create.mockReturnValueOnce ( d1 );
    dctx_create.mockReturnValueOnce ( d2 );
    dctx_create.mockReturnValueOnce ( d3 );

    let dctx_destroy = jest.fn ();

    let v = new LS.Viewer ({dctx_create, dctx_destroy});

    v.display ( start, rewrite, symbol_interpreter, 3 );

    expect ( symbol_interpreter ).toHaveBeenCalledTimes ( 3 );
});
