class CountDownState extends BaseState
{
    constructor()
    {
        super();
        this.count = 3;
        this.timer = 0;
    }
    enter( enter_para )
    {
        sounds[ 'marios_way' ].play();
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
        print( `${this.count}`, g_virtual_width / 2, g_virtual_height / 2, 'center', 'black', '50px flappy-font' );
    }
}