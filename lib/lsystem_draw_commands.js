( function ( lsystem )
{
   let draw_cmds = {};

   draw_cmds.DrawMove = class
   {
      constructor ( distance )
      {
         this.distance = distance;
      }

      execute ( draw_ctx )
      {
         draw_ctx.move ( this.distance );
      }
   }

   draw_cmds.DrawLine = class
   {
      constructor ( distance )
      {
         this.distance = distance;
      }

      execute ( draw_ctx )
      {
         draw_ctx.line ( this.distance );
      }
   }

   draw_cmds.StringInterpreter = class
   {
      constructor ()
      {
         this._symbol_map = new Map ();
      }

      add_cmd ( symbol, cmd )
      {
         this._symbol_map.set ( symbol, cmd );
      }

      process ( symbol, draw_ctx )
      {
         let cmd = this._symbol_map.get ( symbol );
         cmd.execute ( draw_ctx );
      }
   }

   lsystem.draw_cmds = draw_cmds;
}( window.lsystem = window.lsystem || {} ))

