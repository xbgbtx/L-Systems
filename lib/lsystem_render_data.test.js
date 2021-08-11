/**
 * @jest-environment jsdom
 */

require('./lsystem_render_data');

const LS = global.lsystem;

test('test construct render data', () => {
    let start = "A";
    let grammar = {};

    let render_data = new lsystem.RenderData ({
        start,
        grammar
    });

    expect ( render_data.get_grammar () ).toBe ( grammar );
    expect ( render_data.get_start () ).toEqual ( start );
});

