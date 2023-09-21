const g_game_area = document.querySelector( "#game_area" );
const g_game = g_game_area.getContext( '2d' );
g_game.imageSmoothingEnabled = false;

const g_actual_width = g_game_area.width;
const g_actual_height = g_game_area.height;
const g_virtual_width = 512;
const g_virtual_height = 288;
const scale_x = g_actual_width / g_virtual_width;
const scale_y = g_actual_height / g_virtual_height;
g_game.scale( scale_x, scale_y );


sounds[ 'marios_way' ].loop = true;


let pause = false;
let last_update = 0;
let keypressed = [];
let backgrounds = new Backgrounds();
let states = {
    'BaseState': function () { return new BaseState() },
    'PlayState': function () { return new PlayState() },
    'TitleScreenState': function () { return new TitleScreenState() },
    'ScoreState': function () { return new ScoreState() },
    'CountDownState': function () { return new CountDownState() }
}
let g_state_machine = new StateMachine( states );
g_state_machine.change( 'TitleScreenState' );


function render( time )
{
    let dt = ( time - last_update ) / 1000;
    last_update = time;
    update( dt );
    draw();
    requestAnimationFrame( render );
}

function update( dt )
{
    if ( keypressed[ 'Escape' ] )
    {
        pause = !pause;
        if ( pause )
        {
            sounds[ 'marios_way' ].pause();
        }
        else
        {
            sounds[ 'marios_way' ].play();
        }
    }
    if ( !pause )
    {
        backgrounds.update( dt );
        g_state_machine.update( dt );
    }
    keypressed = [];
}

function draw()
{
    g_game.clearRect( 0, 0, g_virtual_width, g_virtual_height );
    backgrounds.draw();
    g_state_machine.draw();
}


document.addEventListener( 'keydown', function ( event )
{
    keypressed[ event.code ] = true;
    console.log( event.code );
} );

document.addEventListener( 'click', function ( event )
{
    keypressed[ 'mouse' ] = true;
} );

requestAnimationFrame( render );