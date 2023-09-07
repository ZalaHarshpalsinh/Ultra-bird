const g_pipe_height = 288;
const g_gravity = 20;

class PlayState extends BaseState
{
    constructor()
    {
        super();
        this.bird = new Bird();
        this.pipe_pairs = new Pipe_pairs();
    }
    collide( object1, object2 )
    {
        if ( ( object1.x + object1.width > object2.x ) && ( object1.x < object2.x + object2.width ) )
        {
            if ( ( object1.y + object1.height > object2.y ) && ( object1.y < object2.y + object2.height ) )
            {
                return true;
            }
        }
        return false;
    }
    bird_dead()
    {
        if ( this.bird.y > g_virtual_height - 15 )
        {
            return true;
        }
        else
        {
            for ( let pipe_pair of this.pipe_pairs.pipe_pairs )
            {
                for ( let pipe of pipe_pair.pipes )
                {
                    if ( this.collide( pipe, this.bird ) )
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    update( dt )
    {
        if ( this.bird_dead() )
        {
            g_state_machine.change( 'TitleScreenState' );
        }
        this.bird.update( dt );
        this.pipe_pairs.update( dt );
    }
    draw()
    {
        this.pipe_pairs.draw();
        this.bird.draw();
    }
}