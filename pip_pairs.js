class Pipe_pairs
{
    constructor()
    {
        this.pipe_pairs = [];
        this.time = 0;
        // this.min_y = -g_pipe_height + 50;
        // this.max_y = -g_pipe_height + g_virtual_height - 140;
        this.last_y = random( this.min_y, this.max_y );
        this.spawn_time = 2
        this.pipe_gap = random( 100, 150 );
    }
    update( dt )
    {
        this.time += dt;
        if ( this.time > this.spawn_time )
        {
            // let y = Math.min( Math.max( this.last_y + random( -100, 100 ), this.min_y ), this.max_y );
            let y = random( -g_pipe_height + 50, -g_pipe_height + g_virtual_height - this.pipe_gap - 50 );
            this.last_y = y;
            let new_pipe_pair = new Pipe_pair( y, this.pipe_gap );
            this.pipe_pairs.push( new_pipe_pair );
            this.time = 0;
            this.spawn_time = random( 3, 5 );
            this.pipe_gap = random( 100, 160 );
        }
        for ( let pipe_pair of this.pipe_pairs )
        {
            if ( pipe_pair.remove )
            {
                this.pipe_pairs.shift();
            }
        }
        for ( let pipe_pair of this.pipe_pairs )
        {
            pipe_pair.update( dt );
        }
    }
    draw()
    {
        for ( let pipe_pair of this.pipe_pairs )
        {
            pipe_pair.draw();
        }
    }
}