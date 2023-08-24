let g_game_area = document.querySelector( "#game_area" );
let g_game = g_game_area.getContext( '2d' );

let g_actual_width = g_game_area.width;
let g_actual_height = g_game_area.height;
let g_virtual_width = 512;
let g_virtual_height = 288;

g_game.scale( g_actual_width / g_virtual_width, g_actual_height / g_virtual_height );
g_game.imageSmoothingEnabled = false;
setInterval( render, 16.667 );

let pause = false;


let last_update = Date.now();
const g_gravity = 20;
let keypressed = [];


let backgrounds = new Backgrounds();
let bird = new Bird();

function render()
{
    let now = Date.now();
    let dt = ( ( now - last_update ) / 1000 );
    last_update = now;

    update( dt );
    draw();
}

function update( dt )
{
    if ( keypressed[ 'Escape' ] )
    {
        pause = !pause;
    }
    if ( !pause )
    {
        backgrounds.update( dt );
        bird.update( dt );
    }
    keypressed = [];
}

function draw()
{
    g_game.clearRect( 0, 0, g_actual_width, g_actual_height );
    backgrounds.draw();
    bird.draw();
}

document.addEventListener( 'keydown', function ( event )
{
    keypressed[ event.code ] = true;
    console.log( event.code );
} );

