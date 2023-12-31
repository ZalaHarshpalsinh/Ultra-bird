const g_pipe_height = images[ 'pipe' ].height;
const g_gravity = 20;

class PlayState extends BaseState
{
    constructor()
    {
        super();
        this.bird = new Bird();
        this.pipe_pairs = new Pipe_pairs();
        this.score = 0;
    }
    collide( object1, object2 )
    {
        this.ease = 5;
        if ( ( object1.x + object1.width - this.ease > object2.x ) && ( object1.x + this.ease < object2.x + object2.width ) )
        {
            if ( ( object1.y + object1.height - this.ease > object2.y ) && ( object1.y + this.ease < object2.y + object2.height ) )
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
    has_passed( obj1, obj2 )
    {
        if ( obj1.x > ( obj2.x + obj2.width ) )
        {
            return true;
        }
        return false;
    }
    update( dt )
    {
        if ( this.bird_dead() )
        {
            sounds[ 'explosion' ].play();
            sounds[ 'hurt' ].play();
            g_state_machine.change( 'ScoreState', { score: this.score } );
        }
        for ( let pipe_pair of this.pipe_pairs.pipe_pairs )
        {
            if ( this.has_passed( this.bird, pipe_pair.pipes[ 0 ] ) && pipe_pair.passed_the_bird == false )
            {
                sounds[ 'score' ].play();
                this.score++;
                pipe_pair.passed_the_bird = true;
            }
        }
        this.bird.update( dt );
        this.pipe_pairs.update( dt );
    }
    draw()
    {
        this.pipe_pairs.draw();
        this.bird.draw();
        print( `Score : ${this.score}`, 5, 25, 'left', 'red', '20px flappy-font' );
        print( "Pause : Esc", 0, g_virtual_height, 'left', 'black', '20px flappy-font' );
        print( "Jump : SPACEBAR", g_virtual_width, 25, 'right', 'black', '20px flappy-font' );
    }
}