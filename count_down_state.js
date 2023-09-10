class CountDownState extends BaseState
{
    constructor()
    {
        super();
        g_game.fillStyle = "black";
        g_game.font = "50px flappy-font";
        g_game.textAlign = 'center';
        this.count = 3;
        this.timer = 0;
    }
    update( dt )
    {
        this.timer += dt;
        if ( this.timer > 1 )
        {
            this.timer %= 1;
            this.count -= 1;
            if ( this.count == 0 )
            {
                g_state_machine.change( "PlayState" );
            }
        }
    }
    draw()
    {
        g_game.fillText( `${this.count}`, g_virtual_width / 2, g_virtual_height / 2 );
    }
}