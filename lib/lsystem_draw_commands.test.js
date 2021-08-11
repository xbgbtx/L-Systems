/**
 * @jest-environment jsdom
 */

require('./lsystem_draw_commands');

const LS = global.lsystem;

test('test move command', () => {
    let draw_ctx =
    {
        move : jest.fn ()
    };

    let cmd = new LS.draw_cmds.DrawMove ( 5 );

    cmd.execute ( draw_ctx );

    expect ( draw_ctx.move ).toHaveBeenCalledTimes ( 1 );
    expect ( draw_ctx.move ).toHaveBeenNthCalledWith ( 1, 5 );
});


