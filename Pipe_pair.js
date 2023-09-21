class Pipe_pair
{
    constructor( y, gap )
    {
        this.x = g_virtual_width;
        this.pipe_gap = gap;
        this.pipes = [ new Pipe( 'upper', this.x, y ), new Pipe( 'lower', this.x, y + g_pipe_height + this.pipe_gap ) ];
        this.remove = false;
        this.passed_the_bird = false;
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