class Pipe_pair
{
    constructor( y )
    {
        this.x = g_virtual_width;
        this.pipes = [ new Pipe( 'upper', this.x, y ), new Pipe( 'lower', this.x, y + g_pipe_height + 90 ) ];
        this.remove = false;
    }

    update( dt )
    {
        for ( let pipe of this.pipes )
        {
            pipe.update( dt );
        }
        if ( this.x < images[ 'pipe' ].width )
        {
            this.remove = true;
        }
    }
    draw()
    {
        for ( let pipe of this.pipes )
        {
            pipe.draw();
        }
    }
}