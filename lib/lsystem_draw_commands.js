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

   lsystem.draw_cmds = draw_cmds;
}( window.lsystem = window.lsystem || {} ))
