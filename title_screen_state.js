class TitleScreenState extends BaseState
{
    constructor()
    {
        super();
        g_game.textAlign = 'center';
    }
    update( dt )
    {
        if ( keypressed[ 'Enter' ] )
        {
            g_state_machine.change( 'CountDownState' );
        }
    }
    draw()
    {
        g_game.font = '50px flappy-font';
        g_game.fillText( "ULTRA Bird", g_virtual_width / 2, g_virtual_height / 2 );
        g_game.font = '20px flappy-font';
        g_game.fillText( "Press Enter", g_virtual_width / 2, g_virtual_height / 2 + 50 );
    }
}