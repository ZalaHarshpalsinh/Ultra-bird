class ScoreState extends BaseState
{
    constructor()
    {
        super();
        this.score = 0;
    }
    enter( enter_para )
    {
        this.score = enter_para.score;
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
        print( "You lost the game T_T.", g_virtual_width / 2, g_virtual_height / 2 - 30, 'center', 'black', '30px flappy-font' );
        print( `Score : ${this.score}`, g_virtual_width / 2, g_virtual_height / 2, 'center', 'black', '25px flappy-font' );
        print( "Press enter to play again.", g_virtual_width / 2, g_virtual_height / 2 + 30, 'center', 'black', '20px flappy-font' );
    }
}