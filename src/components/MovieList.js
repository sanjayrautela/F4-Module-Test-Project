import React from 'react';

function MovieList({movies}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>title</th>
                    <th>Genre</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movies,index) => (
                    <tr key={index}>
                        <td>{movies.title}</td>
                        <td>{movies.genre}</td>
                        <td>{movies.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MovieList;