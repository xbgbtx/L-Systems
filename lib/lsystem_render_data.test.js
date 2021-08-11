/**
 * @jest-environment jsdom
 */

require('./lsystem_render_data');

const LS = global.lsystem;

test('test construct render data', () => {
    let start = "A";
    let grammar = {};
    let gen_draw_set = {};

    let render_data = new lsystem.RenderData ({
        start,
        grammar,
        gen_draw_set
    });

    expect ( render_data.get_grammar () ).toBe ( grammar );
    expect ( render_data.get_start () ).toEqual ( start );
    expect ( render_data.get_gen_draw_set () ).toBe ( gen_draw_set );
});

