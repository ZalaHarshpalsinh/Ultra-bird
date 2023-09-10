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


let images = {
    bird: './resources/images/bird.png',
    ground: './resources/images/ground.png',
    pipe: './resources/images/pipe.png',
    background: './resources/images/background.png',
};
images = load_images( images );
let sounds = {
    explosion: './resources/sounds/explosion.wav',
    hurt: './resources/sounds/hurt.wav',
    jump: './resources/sounds/jump.wav',
    marios_way: './resources/sounds/marios_way.mp3',
    score: './resources/sounds/score.wav'
};
sounds = load_sounds( sounds );
sounds[ 'marios_way' ].loop = true;
sounds[ 'marios_way' ].play();



window.addEventListener( 'load', function ( event )
{
    // on_all_load_start_render( images, render );
    setInterval( render, 33.3333 );
} );



let pause = false;
let last_update = Date.now();
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
    g_game.clearRect( 0, 0, g_actual_width, g_actual_height );
    backgrounds.draw();
    g_state_machine.draw();
}







document.addEventListener( 'keydown', function ( event )
{
    keypressed[ event.code ] = true;
    console.log( event.code );
} );

