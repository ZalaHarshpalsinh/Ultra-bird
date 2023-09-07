class Pipe
{
    constructor( orientaion, x, y )
    {
        this.pipe = images[ 'pipe' ];

        this.orientaion = orientaion;

        this.x = x
        this.y = y;
        this.width = this.pipe.width;
        this.height = this.pipe.height;
        this.scroll_speed = 50;
    }

    update( dt )
    {
        this.x = this.x - ( dt * this.scroll_speed );
    }

    draw()
    {
        if ( this.orientaion == 'upper' )
        {
            g_game.save();
            g_game.scale( 1, -1 );
            g_game.drawImage( this.pipe, this.x, -( this.y + g_pipe_height ) );
            g_game.restore();
        }
        else
        {
            g_game.drawImage( this.pipe, this.x, this.y );
        }
    }
}
