
function load_images( images )
{
    for ( let name in images )
    {
        let image = document.createElement( 'img' );
        image.src = images[ name ];
        images[ name ] = image;
    }
    return images;
}
function load_sounds( sounds )
{
    for ( let name in sounds )
    {
        let sound = new Audio( sounds[ name ] );
        sounds[ name ] = sound;
    }
    return sounds;
}

function on_all_load_start_render( images, render )
{
    let load_count = 0;
    let image_count = Object.keys( images ).length;
    for ( let name in images )
    {
        images[ name ].onload = () =>
        {
            load_count++;
            if ( load_count == image_count )
            {
                setInterval( render, 16.667 );
            }
        }
    }
}

function random( lower, upper )
{
    return ( ( Math.random() * ( upper - lower ) ) + lower );
}