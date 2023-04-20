import React, {useState} from 'react';
import {Section} from "../../../element/section/Section";

export const CallApiFetch = (props) => {

    const [movies, setMovies] = useState([]);

    const onclickHandler = () => {
        setMovies([{id: "Loading", title: "movies..."}]);
        fetch("https://swapi.dev/api/films/")
            .then(response => response.json())
            .then(data => {
                const mappedMovies = data.results.map(res => {
                    return {
                        id: res.episode_id,
                        title: res.title
                    }
                });
                setMovies(mappedMovies);
            })
            .catch(err => console.log(err));
    }

    async function onclickHandlerAsyncAwait () {
        setMovies([{id: "Loading", title: "movies..."}]);
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        const mappedMovies = data.results.map(res => {
            return {
                id: res.episode_id,
                title: res.title
            }
        });
        setMovies(mappedMovies);
    }

    const displayMovies = (movieList) => {
        return movieList.map(m => <p>{m.id} - {m.title}</p>);
    }

    return (
        <Section title="Call API with fetch"
                 anchor="fetchapi-anchor"
                 background={props.color}
                 description='Call API with built-in fetch function'>
            <button type="button" onClick={onclickHandler}>
                Call Star Wars API
            </button>
            <button type="button" onClick={onclickHandlerAsyncAwait}>
                Call Star Wars API async/await
            </button>
            <p>
                Star Wars movies: {displayMovies(movies)}
            </p>
        </Section>
    );
};