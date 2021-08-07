/**
 * @jest-environment jsdom
 */

require('./viewer');

const LS = global.lsystem;

test ( "construct a viewer", () =>
{
    let start = "A";
    let string_interpreter = jest.fn ();
    let rewrite = jest.fn ();

    draw_set = new Set ();
    draw_set.add ( 1 );
    draw_set.add ( 2 );
    draw_set.add ( 3 );

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

    v.display ( start, rewrite, string_interpreter, draw_set );

    expect ( dctx_create ).toHaveBeenCalledTimes ( 3 );
    expect ( dctx_destroy ).not.toHaveBeenCalled ();

    expect ( v.get_dctx_pointers () ).toEqual ( [ d1, d2, d3 ] );

    v.display ( start, rewrite, string_interpreter, draw_set );

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
    let string_interpreter = jest.fn ();
    let rewrite = jest.fn ();

    draw_set = new Set ();
    draw_set.add ( 1 );
    draw_set.add ( 2 );
    draw_set.add ( 3 );

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

    v.display ( start, rewrite, string_interpreter, draw_set );

    expect ( rewrite ).toHaveBeenCalledTimes ( 2 );
    expect ( rewrite ).toHaveBeenNthCalledWith ( 1, "A" );
    expect ( rewrite ).toHaveBeenNthCalledWith ( 2, "AB" );

    expect ( string_interpreter ).toHaveBeenCalledTimes ( 3 );
    expect ( string_interpreter ).toHaveBeenNthCalledWith ( 1, d1, "A" );
    expect ( string_interpreter ).toHaveBeenNthCalledWith ( 2, d2, "AB" );
    expect ( string_interpreter ).toHaveBeenNthCalledWith ( 3, d3, "ABC" );
});
