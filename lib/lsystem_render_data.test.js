/**
 * @jest-environment jsdom
 */

require('./lsystem_render_data');

const LS = global.lsystem;

test('test construct render data', () => {
    let grammar = {};

    let render_data = new lsystem.RenderData ({
        grammar
    });

    expect ( render_data.get_grammar () ).toBe ( grammar );
});

