import React from 'react';


function GenreFilter({genres}){
    return (
        <div>
            {genres.map((genre, index) =>(
                <button key={index} onClick={() => console.log(`Genre Selected: ${genre}`)}>
                    {genre}
                </button>
            ))}
        </div>
    );
}

export default GenreFilter;