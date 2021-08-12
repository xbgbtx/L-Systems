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

test('test line command', () => {
    let draw_ctx =
    {
        line : jest.fn ()
    };

    let cmd = new LS.draw_cmds.DrawLine ( 5 );

    cmd.execute ( draw_ctx );

    expect ( draw_ctx.line ).toHaveBeenCalledTimes ( 1 );
    expect ( draw_ctx.line ).toHaveBeenNthCalledWith ( 1, 5 );
});

test ( 'test create draw command string interpreter', () =>
{
   let string_interpreter = new LS.draw_cmds.StringInterpreter ();

   let mock_cmd = {
      execute : jest.fn ()
   }

   string_interpreter.add_cmd ( "A", mock_cmd );
});
