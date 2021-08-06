/**
 * @jest-environment jsdom
 */

require('./viewer');

const LS = global.lsystem;

test ( "construct a viewer", () =>
{
    let v = new LS.Viewer ();
});
