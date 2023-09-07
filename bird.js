
class Bird
{
    constructor()
    {
        this.bird = images[ 'bird' ];

        this.x = ( g_virtual_width / 2 ) - ( this.bird.width / 2 );
        this.y = ( g_virtual_height / 2 ) - ( this.bird.height / 2 );
        this.width = this.bird.width;
        this.height = this.bird.height;
        this.dy = 0;
    }

    update( dt )
    {
        this.dy = this.dy + ( dt * g_gravity );
        if ( keypressed[ 'Space' ] )
        {
            this.dy = -6;
        }
        this.y = this.y + this.dy;
    }

    draw()
    {
        g_game.drawImage( this.bird, this.x, this.y );
    }
}