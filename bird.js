
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
        if ( keypressed[ 'Space' ] || keypressed[ 'mouse' ] )
        {
            sounds[ 'jump' ].play();
            this.dy = -5.5;
        }
        this.y = Math.max( 0, this.y + this.dy );
    }

    draw()
    {
        g_game.drawImage( this.bird, this.x, this.y );
    }
}