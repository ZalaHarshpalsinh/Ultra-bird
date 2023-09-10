class ScoreState extends BaseState
{
    constructor()
    {
        super();
        this.score = 0;
        g_game.fillStyle = 'black';
        g_game.textAlign = 'center';
    }
    enter( enter_para )
    {
        this.score = enter_para.score;
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
        g_game.font = "30px flappy-font";
        g_game.fillText( "You lost the game T_T.", g_virtual_width / 2, g_virtual_height / 2 - 30 );
        g_game.font = "25px flappy-font";
        g_game.fillText( `Score : ${this.score}`, g_virtual_width / 2, g_virtual_height / 2 );
        g_game.font = "20px flappy-font";
        g_game.fillText( "Press enter to play again.", g_virtual_width / 2, g_virtual_height / 2 + 30 );
    }
}