class Backgrounds
{
    constructor()
    {
        this.mountains = images[ 'background' ];

        this.ground = images[ 'ground' ];
        this.mountains_position = 0;
        this.ground_position = 0;

        this.mountains_scroll_speed = 20;
        this.ground_scroll_speed = 80;

        this.mountains_looping_point = 413;
        this.ground_looping_point = g_virtual_width;

        this.ground_start_height = Math.floor( g_virtual_height - this.ground.height );
    }

    update( dt )
    {
        this.mountains_position = ( ( this.mountains_position + ( dt * ( this.mountains_scroll_speed ) ) ) % this.mountains_looping_point );
        this.ground_position = ( ( this.ground_position + ( dt * ( this.ground_scroll_speed ) ) ) % this.ground_looping_point );
    }

    draw()
    {
        g_game.drawImage( images[ 'background' ], -this.mountains_position, 0 );
        g_game.drawImage( images[ 'ground' ], -this.ground_position, this.ground_start_height );
    }
}

