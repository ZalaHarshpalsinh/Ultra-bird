class TitleScreenState extends BaseState
{
    constructor()
    {
        super();
    }
    update( dt )
    {
        if ( keypressed[ 'Enter' ] || keypressed[ 'mouse' ] )
        {
            g_state_machine.change( 'CountDownState' );
        }
    }
    draw()
    {
        print( "ULTRA Bird", g_virtual_width / 2, g_virtual_height / 2, 'center', 'black', '50px flappy-font' );
        print( "Press Enter", g_virtual_width / 2, g_virtual_height / 2 + 50, 'center', 'black', '20px flappy-font' );
    }
}