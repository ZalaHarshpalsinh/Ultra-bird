var g_game_area = document.querySelector( "#game_area" );

var g_game = g_game_area.getContext( '2d' );

var g_actual_width = g_game_area.width;
var g_actual_height = g_game_area.height;
var g_virtual_width = 512;
var g_virtual_height = 288;

g_game.scale( g_actual_width / g_virtual_width, g_actual_height / g_virtual_height );
g_game.imageSmoothingEnabled = false;


let last_update = Date.now();
let backgrounds = new Backgrounds();

render();
function render()
{
    let now = Date.now();
    let dt = ( ( now - last_update ) / 1000 );
    last_update = now;
    update( dt );
    draw();
    window.requestAnimationFrame( render );
}

function update( dt )
{
    backgrounds.update( dt );
}

function draw()
{
    g_game.clearRect( 0, 0, g_actual_width, g_actual_height );
    backgrounds.draw();
}

