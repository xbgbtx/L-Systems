( function ( lsystem )
{
    lsystem.LSystemApp = class
    {
        constructor ( draw_ctx_actions )
        {
            this.lsystem_renderer = new lsystem.Renderer ( draw_ctx_actions );
            this.current_lsystem_data = undefined;
        }

        display_lsystem ( render_data )
        {
            let rewrite = ( s ) => lsystem.rewrite ( s, render_data.grammar ); 

            let cmd_interpreter = new lsystem.draw_cmds.CmdInterpreter ();
            cmd_interpreter.add_cmd ( "A", 
                new lsystem.draw_cmds.DrawLine ( 10 ) );
            cmd_interpreter.add_cmd ( "B", 
                new lsystem.draw_cmds.DrawMove ( 10 ) );

            let process_cb = ( draw_ctx, s ) => 
            {
                let cmd_interpret_cb = ( symbol ) => 
                    cmd_interpreter.process ( draw_ctx, symbol );

                lsystem.process ( s, cmd_interpret_cb );
            };

            let succ_transform = ( draw_ctx, gen ) =>
            {
                let g = draw_ctx.get_pixi_graphics ();
                g.position.y += 10 * gen;
                g.scale.x = 1/Math.pow(3,gen);
            };

            this.lsystem_renderer.display ( 
                render_data.get_start (), 
                rewrite, 
                process_cb,
                render_data.get_gen_draw_set (),
                succ_transform
            );

            this.current_lsystem_data = render_data;
        }
    };


}( window.lsystem = window.lsystem || {} ))


